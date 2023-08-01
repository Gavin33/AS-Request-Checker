import { ParserRuleContext } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import {
  FunctionCallContext,
  IfBlockContext,
  StatementContext,
  StatementListContext,
  TellContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
  ErrorHandlerContext,
} from './ASGrammarParser';
import {checkFunctionCall, FunctionProperties} from './checkRequestListener'


type TellCallback = (
  ctx: TellContext,
) => number;



export default class checkRequestInIfStatement{
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];
  constructor(
    knownFunctions: string[] = [],
    functions: { [key: string]: FunctionProperties } = {}
  ) {
    this.knownFunctions = knownFunctions;
    this.functions = functions;
  }

  checkIfStatement(
    ctx: StatementListContext,
    tellCallback: TellCallback,
    start?: number
  ) {
    let requests = 0;
    let keystrokes = 0;
    for (let statementCtx of ctx.statement()) {
      if (statementCtx.keystroke()?.expression()?.getText() === 'return') {
        keystrokes++;
      } else if (statementCtx.set()?.operation().value(0).getText() === 'URL') {
        requests++;
      } else if (statementCtx.openLocation()) {
        requests++;
      }
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        checkFunctionCall(functionCallCtx, (func) => {
          requests += func.requests;
          keystrokes += func.keystrokes;
        }, this.functions, this.knownFunctions);
      }
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        const count = this.checkIfBlock(
          ifBlockCtx,
          tellCallback,
        );
        requests += count[0];
        keystrokes += count[1];
      }
      // handle statements. Specifically errorHandlers, tells
      const tellCtx = statementCtx.tell();
      if (tellCtx) {
        tellCallback(tellCtx);
      }
      const errorHandlerCtx = statementCtx.errorHandler();
      if (errorHandlerCtx) {
        this.checkErrorHandler(errorHandlerCtx, tellCallback);
      }
      if (start && (requests || keystrokes)) {
        // Prevent two requests from the same if block from being counted twice
        if (start > statementCtx.start.start) {
          // if there were requests in the ifStatement it wouldn't reach the else code.
          return [0, 0];
        }
      }
    }
    return [requests, keystrokes];
  }

  checkElseRequests(
    ctx: StatementListContext,
    tellCallback: TellCallback,
    props: number[],
    start?: number
  ) {
    // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
    const elseProps = this.checkIfStatement(
      ctx,
      tellCallback,
      start
    );
    for (let i in elseProps) {
      if (elseProps[i] > props[i]) {
        props[i] = elseProps[i];
      }
    }
    return props;
  }

  checkElse(
    ctx: ElseIfContext | ElseStatementContext,
    tellCallback: TellCallback,
    props: number[],
    start?: number
  ) {
    if (ctx.constructor.name === 'ElseStatementContext') {
      const elseStatementCtx = ctx as ElseStatementContext;
      props = this.checkElseRequests(
        elseStatementCtx.statementList(),
        tellCallback,
        props,
        start
      );
    } else {
      const elseIfCtx = ctx as ElseIfContext;
      props = this.checkElseRequests(
        elseIfCtx.ifStatement().statementList(),
        tellCallback,
        props,
        start
      );
    }
    return props;
  }

  checkIfBlock(
    ifBlockCtx: IfBlockContext,
    tellCallback: TellCallback,
    start?: number,
    ctx?: IfStatementContext | ElseIfContext | ElseStatementContext
  ) {
    const elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    let count = [0, 0];
    // calced is if I've already calculated keystrokes/requests for this ifBlock.
    let calced = false;
    if (ctx?.constructor.name === 'IfStatementContext' || !ctx) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      count = this.checkIfStatement(
        ifBlockCtx.ifStatement().statementList(),
        tellCallback,
        start
      );
      // Only way this method can be triggered is if this is a request, keystroke or function call with a request or keystroke from inside an ifStatement. If both are 0, only reason is if this is a dup. No need to analyze further.
      if (count.every((element) => !element)) {
        return [0, 0];
      }
      // elseIf
      if (elseIfArray) {
        elseIfArray.forEach((elseIfCtx) => {
          count = this.checkElse(
            elseIfCtx,
            tellCallback,
            count,
            start
          );
        });
      }
      // else
      const elseStatementCtx = ifBlockCtx.elseStatement();
      if (elseStatementCtx) {
        count = this.checkElse(
          elseStatementCtx,
          tellCallback,
          count,
          start
        );
      }
    }
    // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
    else {
      if (
        this.checkIfStatement(
          ifBlockCtx.ifStatement().statementList(),
          tellCallback,
          start
        ).every((element) => !element)
      ) {
        let afterCtx = false;
        if (elseIfArray) {
          for (let elseIfCtx of elseIfArray) {
            if (
              elseIfCtx.start.start === ctx.start.start &&
              elseIfCtx.stop?.stop === ctx.stop?.stop
            ) {
              afterCtx = true;
            } else {
              count = this.checkElse(
                elseIfCtx,
                tellCallback,
                count
              );
              // If there are any requests/keystrokes, and not after context, it's calced. Can stop checking.
              if (!count.every((element) => !element) && !afterCtx) {
                calced = true;
                break;
              }
            }
          }
        }
        if (!calced) {
          const elseStatementCtx = ctx as ElseStatementContext;
          count = this.checkElse(
            elseStatementCtx,
            tellCallback,
            count
          );
        }
      } else {
        calced = true;
      }
    }
    if (!calced) {
      return count;
    }
    return [0, 0];
  }
  checkErrorHandler(
    parentCtx: ErrorHandlerContext,
    tellCallback: TellCallback,
    ctx?: StatementListContext,
    start?: number
  ) {
    // Can be handled like a conditional without the option for elseIf
    // Also have to account for more than one request.
    const tryStatementListCtx = parentCtx.statementList(0);
    if (
      (tryStatementListCtx.start.start === ctx?.start.start &&
        tryStatementListCtx.stop?.stop === ctx?.stop?.stop) ||
      !ctx
    ) {
      let [requests, keystrokes] = this.checkIfStatement(
        tryStatementListCtx,
        tellCallback,
        start
      );
      const errorStatementListCtx = parentCtx.statementList(1);
      if (errorStatementListCtx) {
        const count = this.checkIfStatement(
          tryStatementListCtx,
          tellCallback,
          start
        );
        if (count[0] > requests) {
          requests = count[0];
        }
        if (count[1] > keystrokes) {
          keystrokes = count[1];
        }
      }
      return [requests, keystrokes];
    }
    return [0, 0];
  }
}
