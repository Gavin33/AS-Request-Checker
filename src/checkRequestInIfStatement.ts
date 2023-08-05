import { TerminalNode } from 'antlr4';
import { ParserRuleContext } from 'antlr4ts';
import {
  IfBlockContext,
  StatementListContext,
  TellContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
  ErrorHandlerContext,
} from './ASGrammarParser';
import { checkFunctionCall, FunctionProperties } from './checkRequestListener';

type TellCallback = (ctx: TellContext, start: number | false, first: boolean) => number | false;

// check other functions to see where requests are being logged. Make sure first is updated where appropriate.

export default class checkRequestInIfStatement {
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];
  constructor(
    knownFunctions: string[] = [],
    functions: { [key: string]: FunctionProperties } = {}
  ) {
    this.knownFunctions = knownFunctions;
    this.functions = functions;
  }

  checkStart(
    ctx: ParserRuleContext | undefined,
    areRequests: boolean,
    count: number[],
    start: number | boolean,
    first: boolean
  ) {
    // If you just want to check if the context is found, just pass true to areRequests. Have to check if ctx is truthy anyway.
    // Problem. If we don't stop code execusion, there will be at least one extra request logged. More if we're dealing with a function call with multiple requests. Find a way to stop execution.

    // check to see if there's a request.
    if (first) {
      if (areRequests && start && ctx) {
        // If so, start. If it's original, then continue with the code. If not, stop it.
        if (start > ctx.start.start) {
          // Definitely return something that's NOT returning a 0, 0 array. Will also need to prevent the check after first successful execution.
          return false;
        }
      }
    }
    return count;
  }

  checkIfStatement(
    ctx: StatementListContext,
    tellCallback: TellCallback,
    start: number | false,
    first: boolean
  ) {
    let requests = 0;
    let keystrokes = 0;
    for (let statementCtx of ctx.statement()) {
      if (statementCtx.keystroke()?.expression()?.getText() === 'return') {
        keystrokes++;
        first = false;
      } else if (statementCtx.set()?.operation().value(0).getText() === 'URL') {
        requests++;
        first = false;
      } else if (statementCtx.openLocation()) {
        requests++;
        first = false;
      }
      // function calls are single statements. Can be processed like any other request in terms of checking dups.
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        checkFunctionCall(
          functionCallCtx,
          (func) => {
            if (func.requests || func.keystrokes) {
            first = false
            requests += func.requests;
            keystrokes += func.keystrokes;}
          },
          this.functions,
          this.knownFunctions
        );
      }
      const ifBlockCtx = statementCtx.ifBlock();
      const tellCtx = statementCtx.tell();
      const errorHandlerCtx = statementCtx.errorHandler();
      if (ifBlockCtx) {
        const count = this.checkIfBlock(
          ifBlockCtx,
          tellCallback.bind(this),
          false,
          false,
          first
        );
        if (count) {
          // check if 0, 0 and set first to false
          requests += count[0];
          keystrokes += count[1];
        } else {
          return false;
        }
      }
      // handle statements. Specifically errorHandlers, tells
      else if (tellCtx) {
        const tellRequests = tellCallback(tellCtx, start, first)
        // Not as simple as checking if it's falsy. Must be explicit.
        if (tellRequests !== false) {
          requests += tellRequests;
          first = false
        } else {
          return false;
        }
      } else if (errorHandlerCtx) {
        const count = this.checkErrorHandler(
          errorHandlerCtx,
          tellCallback.bind(this),
          false,
          first
        );
        if (count) {
          if (count.every((element) => !element)) {
            requests += count[0];
            keystrokes += count[1];
            first = false
          }
        } else {
          return false;
        }
      } else if (first) {
        const count = this.checkStart(
          statementCtx,
          !!(requests || keystrokes),
          [requests, keystrokes],
          start,
          first
        );
        // if this isn't a repeat.
        if (count) {
          [requests, keystrokes] = count;
          first = false;
        } else {
          return false;
        }
      }
    }
    return [requests, keystrokes];
  }

  checkElseRequests(
    ctx: StatementListContext,
    tellCallback: TellCallback,
    props: number[],
    start: number | false,
    first: boolean
  ) {
    // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
    const elseProps = this.checkIfStatement(
      ctx,
      tellCallback.bind(this),
      start,
      first
    );
    if (elseProps) {
      for (let i in elseProps) {
        if (elseProps[i] > props[i]) {
          props[i] = elseProps[i];
        }
      }
      return props;
    }
  }
  checkFalse(count?: number[]) {
    // set to count
    if (count) {
      return count;
    } else {
      return false;
    }
  }
  checkElse(
    ctx: ElseIfContext | ElseStatementContext,
    tellCallback: TellCallback,
    props: number[] | false,
    start: number | false,
    first: boolean
  ) {
    let elseRequests;
    if (props) {
      if (ctx.constructor.name === 'ElseStatementContext') {
        const elseStatementCtx = ctx as ElseStatementContext;
        elseRequests = this.checkElseRequests(
          elseStatementCtx.statementList(),
          tellCallback.bind(this),
          props,
          start,
          first
        );
      } else {
        const elseIfCtx = ctx as ElseIfContext;
        elseRequests = this.checkElseRequests(
          elseIfCtx.ifStatement().statementList(),
          tellCallback.bind(this),
          props,
          start,
          first
        );
      }
    }
    return this.checkFalse(elseRequests);
  }

  checkIfBlock(
    ifBlockCtx: IfBlockContext,
    tellCallback: TellCallback,
    start: number | false,
    ctx: IfStatementContext | ElseIfContext | ElseStatementContext | false,
    first: boolean
  ) {
    const elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    let count = [0, 0] as number[] | false;
    if (ctx?.constructor.name === 'IfStatementContext' || !ctx) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      count = this.checkIfStatement(
        ifBlockCtx.ifStatement().statementList(),
        tellCallback.bind(this),
        start,
        first
      );
      if (count) {
        // elseIf
        if (elseIfArray) {
          elseIfArray.forEach((elseIfCtx) => {
            count = this.checkElse(
              elseIfCtx,
              tellCallback.bind(this),
              count,
              start,
              false
            );
          });
        }
        // else
        const elseStatementCtx = ifBlockCtx.elseStatement();
        if (elseStatementCtx) {
          count = this.checkElse(
            elseStatementCtx,
            tellCallback.bind(this),
            count,
            start,
            false
          );
        }
      }
    }
    // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
    else {
      const ifRequests = this.checkIfStatement(
        ifBlockCtx.ifStatement().statementList(),
        tellCallback.bind(this),
        start,
        first
      );
      if (ifRequests) {
        if (elseIfArray) {
          for (let elseIfCtx of elseIfArray) {
            count = this.checkElse(
              elseIfCtx,
              tellCallback.bind(this),
              count,
              false,
              first
            );
            // If there are any requests/keystrokes, and not after context, it's calced. Can stop checking.
            if (!count) {
              return count;
            }
            if (
              !count.every((element) => {
                !element;
              })
            ) {
              first = false;
            }
          }
        }
        const elseStatementCtx = ctx as ElseStatementContext;
        count = this.checkElse(
          elseStatementCtx,
          tellCallback.bind(this),
          count,
          false,
          first
        );
      }
    }
    return count;
  }
  checkErrorHandler(
    parentCtx: ErrorHandlerContext,
    tellCallback: TellCallback,
    start: number | false,
    first: boolean
  ) {
    // Possible that part of the try block could execute then throw an error. Treating them as non-mutually exclusive.
    // Also have to account for more than one request.
    const tryStatementListCtx = parentCtx.statementList(0);
    let tryCount = [0, 0] as number[] | false;
    tryCount = this.checkIfStatement(
      tryStatementListCtx,
      tellCallback.bind(this),
      start,
      first
    );
    if (tryCount) {
      if (!tryCount.every((element) => !element)) {
        first = false;
      }
      const errorStatementListCtx = parentCtx.statementList(1);
      if (errorStatementListCtx) {
        const count = this.checkIfStatement(
          tryStatementListCtx,
          tellCallback.bind(this),
          start,
          first
        );
        if (count) {
          tryCount[0] += count[0];
          tryCount[1] += count[1];
        } else {
          return count;
        }
      }
    }
    return tryCount;
  }
}
