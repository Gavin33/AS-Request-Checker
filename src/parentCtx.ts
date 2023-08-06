import { TerminalNode } from 'antlr4';
import { ParserRuleContext } from 'antlr4ts';
import {
  IfBlockContext,
  StatementListContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
  FunctionDeclarationContext,
  TellAppContext,
  ErrorHandlerContext,
  StatementContext,
} from './ASGrammarParser';
import CheckBlock from './checkBlock';
import checkRequestInIfStatement from './checkRequestInIfStatement';

// Note: there are going to be a huge number of type errors on the typescript files on your side most likely. Antlr4ts is still in alpha, so there are quite a few errors. Main issues that come up are some misnamed properties/methods on some of the classes. I don't want to purposely use the wrong syntax just to make ts happy, so I made a few bug fixes to antlr4ts on my end instead.

// Also note antlr4ts generates ASGrammarListener as an interface, which is less than ideal to say the least. You have to extend the proper antlr4 subclass each time you transpile.

// Possible feature improvement(s): calculate if blocks, recursive functions and loops instead of just throwing an error. Add variable support to functions arguments, loop expressions and if blocks. Add support for calling handlers before they're defined (which is valid AppleScript syntax believe it or not).

// Keystrokes cannot be generated from an enter method alone. Has to be logged as part of some kind of block (functionDeclaration, errorHandler, ifBlock, etc.)

// I could call it ParentProps, but that's just a fancy way of saying genes.
interface Genes {
  requests: number;
  keystrokes: number;
  inTell: boolean;
  start: number;
}

type FunctionCallback = (functionProperties: FunctionProperties) => void;

type ContextCallback = (
  ctx: StatementContext
) => ParserRuleContext | TerminalNode | undefined;
type ArrayCallback = (
  ctx: StatementContext
) => ParserRuleContext[] | TerminalNode[] | undefined;
type VoidCallback = (ctx: StatementContext) => void;

export interface FunctionProperties {
  requests: number;
  keystrokes: number;
}

export type Callback = ContextCallback | ArrayCallback | VoidCallback;

export default class parentCtx {
  requests: number;
  keystrokes: number;
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];
  inTell: boolean;
  constructor(
    keystrokes: number,
    inTell: boolean,
    start: number,
    ctx: ParserRuleContext,
    functions: { [key: string]: FunctionProperties },
    knownFunctions: string[],
    requests: number = 0
  ) {
    this.requests = requests;
    this.keystrokes = keystrokes;
    this.inTell = inTell;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
    this.checkParentCtx(ctx, start);
  }
  checkParentCtx(ctx: ParserRuleContext, start: number) {
    // Other than recursive calls, there's only 4 inputs that are going to be fed into this: set URL, keystroke return, open location and functionCall.
    const parentCtx = ctx.parentCtx;
    switch (parentCtx.constructor.name) {
      case 'ProgramContext': {
        return;
      }
      case 'LoopStatementContext': {
        // why would we be checking a functionCall unless it had a request in it? just throw the error
        throw new Error('Request detected inside loop');
      }
      case 'IfBlockContext': {
        const ifBlockCtx = parentCtx as IfBlockContext;
        const ifStatementCtx = ctx as
          | IfStatementContext
          | ElseIfContext
          | ElseStatementContext;
        const ifBlockRequests = new checkRequestInIfStatement(
          {
            requests: this.requests,
            keystrokes: this.keystrokes,
            start: start,
            first: true,
            functions: this.functions,
            knownFunctions: this.knownFunctions,
            dup: false,
          },
          ifBlockCtx,
          ifStatementCtx
        );
        if (ifBlockRequests.dup) {
          this.requests = 0;
          return;
        }
        this.requests = ifBlockRequests.requests;
        this.keystrokes = ifBlockRequests.keystrokes;
        break;
      }
      case 'tellApp': {
        const tellAppCtx = parentCtx as TellAppContext;
        if (
          tellAppCtx.appType().getText() === 'process' &&
          tellAppCtx.STRING().getText() === 'Google Chrome'
        ) {
          this.inTell = true;
        }
        break;
      }
      case 'FunctionDeclarationContext': {
        // add the current requests and keystrokes to the count for the declaration. If there are more requests they'll also be calced and added to the count for the declaration.
        const functionDeclarationCtx = parentCtx as FunctionDeclarationContext;
        const funcName = functionDeclarationCtx.IDENTIFIER(0).getText();
        if (!(funcName in this.functions)) {
          this.functions[funcName] = { requests: 0, keystrokes: 0 };
        }
        this.functions[funcName].requests += this.requests;
        if (this.inTell) {
          this.functions[funcName].requests += this.keystrokes;
        } else {
          this.functions[funcName].keystrokes += this.keystrokes;
        }
        // According to AS syntax, function declarations are always at the top level. So only thing above this is statement => program. Safe to return here.
        return;
      }
      case 'ErrorHandlerContext': {
        const errorHandlerCtx = parentCtx as ErrorHandlerContext;
        const errorHandlerChildCtx = ctx as StatementListContext;
        // check error handler
        const errorRequests = new CheckBlock({
          requests: this.requests,
          keystrokes: this.keystrokes,
          start: start,
          first: true,
          functions: this.functions,
          knownFunctions: this.knownFunctions,
          dup: false,
        });
        this.requests = errorRequests.requests;
        this.keystrokes = errorRequests.keystrokes;
      }
    }
    if (this.inTell) {
      this.requests += this.keystrokes;
      this.keystrokes = 0;
    }
    this.checkParentCtx(parentCtx, start);
  }
}
