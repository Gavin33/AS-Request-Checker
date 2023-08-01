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

interface functionProperties {
  requests: number;
  keystrokes: number;
}

type ContextCallback = (
  ctx: StatementContext
) => ParserRuleContext | TerminalNode | undefined;
type ArrayCallback = (
  ctx: StatementContext
) => ParserRuleContext[] | TerminalNode[] | undefined;
type VoidCallback = (ctx: StatementContext) => void;
type TellCallback = (
  ctx: TellContext,
  functionCallCallback: FunctionCallCallback,
  errorCallback: ErrorCallback
) => number;
export type ErrorCallback = (
  parentCtx: ErrorHandlerContext,
  ctx?: StatementListContext,
  start?: number
) => number[];
type FunctionCallback = (functionProperties: functionProperties) => void;
export type FunctionCallCallback = (
  ctx: FunctionCallContext,
  callback: FunctionCallback
) => void;
export type Callback = ContextCallback | ArrayCallback | VoidCallback;

export class checkRequestInIfStatement{
  functions: { [key: string]: functionProperties };
  knownFunctions: string[];
  constructor(
    knownFunctions: string[] = [],
    functions: { [key: string]: functionProperties } = {}
  ) {
    this.knownFunctions = knownFunctions;
    this.functions = functions;
  }

  checkIfStatement(
    ctx: StatementListContext,
    tellCallback: TellCallback,
    functionCallCallback: FunctionCallCallback,
    errorCallback: ErrorCallback,
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
        functionCallCallback(functionCallCtx, (func) => {
          requests += func.requests;
          keystrokes += func.keystrokes;
        });
      }
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        const count = this.checkIfBlock(
          ifBlockCtx,
          tellCallback,
          functionCallCallback,
          errorCallback
        );
        requests += count[0];
        keystrokes += count[1];
      }
      // handle statements. Specifically errorHandlers, tells
      const tellCtx = statementCtx.tell();
      if (tellCtx) {
        tellCallback(tellCtx, functionCallCallback, errorCallback);
      }
      const errorHandlerCtx = statementCtx.errorHandler();
      if (errorHandlerCtx) {
        errorCallback(errorHandlerCtx);
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
    functionCallCallback: FunctionCallCallback,
    errorCallback: ErrorCallback,
    props: number[],
    start?: number
  ) {
    // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
    const elseProps = this.checkIfStatement(
      ctx,
      tellCallback,
      functionCallCallback,
      errorCallback,
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
    functionCallCallback: FunctionCallCallback,
    errorCallback: ErrorCallback,
    props: number[],
    start?: number
  ) {
    if (ctx.constructor.name === 'ElseStatementContext') {
      const elseStatementCtx = ctx as ElseStatementContext;
      props = this.checkElseRequests(
        elseStatementCtx.statementList(),
        tellCallback,
        functionCallCallback,
        errorCallback,
        props,
        start
      );
    } else {
      const elseIfCtx = ctx as ElseIfContext;
      props = this.checkElseRequests(
        elseIfCtx.ifStatement().statementList(),
        tellCallback,
        functionCallCallback,
        errorCallback,
        props,
        start
      );
    }
    return props;
  }

  checkIfBlock(
    ifBlockCtx: IfBlockContext,
    tellCallback: TellCallback,
    functionCallCallback: FunctionCallCallback,
    errorCallback: ErrorCallback,
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
        functionCallCallback,
        errorCallback,
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
            functionCallCallback,
            errorCallback,
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
          functionCallCallback,
          errorCallback,
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
          functionCallCallback,
          errorCallback,
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
                functionCallCallback,
                errorCallback,
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
            functionCallCallback,
            errorCallback,
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
}
