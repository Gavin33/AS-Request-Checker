import { TerminalNode } from 'antlr4';
import { ParserRuleContext } from 'antlr4ts';
import { ASGrammarListener } from './ASGrammarListener';
import {
  FunctionCallContext,
  OpenLocationContext,
  FunctionDeclarationContext,
  SetContext,
  KeystrokeContext,
  StatementContext,
  TellAppContext,
  ElseIfContext,
  ElseStatementContext,
  IfBlockContext,
  IfStatementContext,
} from './ASGrammarParser';
import checkRequestInIfStatement, {
  checkBlockOptions,
  CheckBlock,
} from './ifStatement';
import { checkRequestInTell } from './tell';

// const { default: ASGrammarListener } = require('./ASGrammarListener');

// Note: there are going to be a huge number of type errors on the typescript files on your side most likely. Antlr4ts is still in alpha, so there are quite a few errors. Main issues that come up are some misnamed properties/methods on some of the classes. I don't want to purposely use the wrong syntax just to make ts happy, so I made a few bug fixes to antlr4ts on my end instead.

// Also note antlr4ts generates ASGrammarListener as an interface, which is less than ideal to say the least. You have to extend the proper antlr4 subclass each time you transpile.

// Possible feature improvement(s): calculate if blocks, recursive functions and loops instead of just throwing an error. Add variable support to functions arguments, loop expressions and if blocks. Add support for calling handlers before they're defined (which is valid AppleScript syntax).

// Probably would do some optimizations next before anything else related to this project. The fact I have a handler for repeat checks says everything you need to know about the nature of these future optimizations.

// Keystrokes cannot be generated from an enter method alone. Has to be logged as part of some kind of block (functionDeclaration, errorHandler, ifBlock, etc.)

// types/interfaces

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

// This function is just to avoid a circular dependency on the checkBlock class. Gets passed down via the checkParentCtx class as a callback to a checkBlock class. Checks statement blocks in isolated instances.
function checkStatementBlock(sup: checkBlockOptions, ctx: StatementContext) {
  // ifBlock
  const ifBlockCtx = ctx.ifBlock();
  const tellCtx = ctx.tell();
  const errorHandlerCtx = ctx.errorHandler();
  if (ifBlockCtx) {
    return new checkRequestInIfStatement(sup, ifBlockCtx, false);
  }

  // tell class.
  else if (tellCtx) {
    return new checkRequestInTell(sup, ctx);
  }

  // error handler
  else if (errorHandlerCtx) {
    const errorHandlerRequests = new CheckBlock(sup);
    errorHandlerRequests.checkErrorHandler(errorHandlerCtx);
    return errorHandlerRequests;
  }
}

class ParentCtx {
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
            requests: 0,
            keystrokes: 0,
            start: start,
            first: true,
            functions: this.functions,
            knownFunctions: this.knownFunctions,
            dup: false,
            callback: checkStatementBlock,
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
      case 'TellAppContext': {
        const tellAppCtx = parentCtx as TellAppContext;
        if (
          tellAppCtx.appType().getText() === 'process' &&
          (tellAppCtx.STRING().getText() === '"Google Chrome"' ||
            tellAppCtx.STRING().getText() === "'Google Chrome'")
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
        this.requests = 0;
        return;
      }
    }
    if (this.inTell) {
      this.requests += this.keystrokes;
      this.keystrokes = 0;
    }
    this.checkParentCtx(parentCtx, start);
  }
}

class checkRequestListener implements ASGrammarListener {
  // extends ASGrammarListener
  requests: number;
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];

  constructor(
    requests: number = 0,
    functions: { [key: string]: FunctionProperties } = {},
    knownFunctions: string[] = []
  ) {
    // super();
    this.requests = requests;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
  }

  // enter methods

  enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
    this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
  }

  enterKeystroke(ctx: KeystrokeContext) {
    if (ctx.expression()?.getText() === 'return') {
      const parentCtxRequests = new ParentCtx(
        1,
        false,
        ctx.start.start,
        ctx,
        this.functions,
        this.knownFunctions
      );
      this.requests += parentCtxRequests.requests;
      this.functions = parentCtxRequests.functions;
    }
  }

  enterSet(ctx: SetContext) {
    if (ctx.operation().value(0).getText() === 'URL') {
      const parentCtxRequests = new ParentCtx(
        0,
        false,
        ctx.start.start,
        ctx,
        this.functions,
        this.knownFunctions,
        1
      );
      this.requests += parentCtxRequests.requests;
      this.functions = parentCtxRequests.functions;
    }
  }

  enterOpenLocation(ctx: OpenLocationContext) {
    // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
    const parentCtxRequests = new ParentCtx(
      0,
      false,
      ctx.start.start,
      ctx,
      this.functions,
      this.knownFunctions,
      1
    );
    this.requests += parentCtxRequests.requests;
    this.functions = parentCtxRequests.functions;
  }

  enterFunctionCall(ctx: FunctionCallContext) {
    // access function info
    new CheckBlock({
      functions: this.functions,
      knownFunctions: this.knownFunctions,
      start: false,
      first: false,
      requests: 0,
      keystrokes: 0,
      dup: false,
      callback: checkStatementBlock,
    }).checkFunctionCall(ctx, (func) => {
      const parentCtxRequests = new ParentCtx(
        func.keystrokes,
        false,
        ctx.start.start,
        ctx,
        this.functions,
        this.knownFunctions,
        func.requests
      );
      this.requests += parentCtxRequests.requests;
      this.functions = parentCtxRequests.functions;
    });
  }
}

export default checkRequestListener;
