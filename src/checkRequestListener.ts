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
} from './ASGrammarParser';
import CheckBlock, { FunctionProperties } from './checkBlock';
import parentCtx from './parentCtx';

// const { default: ASGrammarListener } = require('./ASGrammarListener');

// Note: there are going to be a huge number of type errors on the typescript files on your side most likely. Antlr4ts is still in alpha, so there are quite a few errors. Main issues that come up are some misnamed properties/methods on some of the classes. I don't want to purposely use the wrong syntax just to make ts happy, so I made a few bug fixes to antlr4ts on my end instead.

// Also note antlr4ts generates ASGrammarListener as an interface, which is less than ideal to say the least. You have to extend the proper antlr4 subclass each time you transpile.

// Possible feature improvement(s): calculate if blocks, recursive functions and loops instead of just throwing an error. Add variable support to functions arguments, loop expressions and if blocks. Add support for calling handlers before they're defined (which is valid AppleScript syntax believe it or not).

// Keystrokes cannot be generated from an enter method alone. Has to be logged as part of some kind of block (functionDeclaration, errorHandler, ifBlock, etc.)

// I could call it ParentProps, but that's just a fancy way of saying genes.

type ContextCallback = (
  ctx: StatementContext
) => ParserRuleContext | TerminalNode | undefined;
type ArrayCallback = (
  ctx: StatementContext
) => ParserRuleContext[] | TerminalNode[] | undefined;
type VoidCallback = (ctx: StatementContext) => void;

export type Callback = ContextCallback | ArrayCallback | VoidCallback;

// checkFunctionCall function

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
      const parentCtxRequests = new parentCtx(
        1,
        false,
        ctx.start.start,
        ctx,
        this.functions,
        this.knownFunctions
      );
      this.requests += parentCtxRequests.requests
      this.functions = parentCtxRequests.functions
    }
  }

  enterSet(ctx: SetContext) {
    if (ctx.operation().value(0).getText() === 'URL') {
      const parentCtxRequests = new parentCtx(
        0,
        false,
        ctx.start.start,
        ctx,
        this.functions,
        this.knownFunctions,
        1
      );
      this.requests += parentCtxRequests.requests
      this.functions = parentCtxRequests.functions
    }
  }

  enterOpenLocation(ctx: OpenLocationContext) {
    // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
    const parentCtxRequests = new parentCtx(
      0,
      false,
      ctx.start.start,
      ctx,
      this.functions,
      this.knownFunctions,
      1
    );
    this.requests += parentCtxRequests.requests
    this.functions = parentCtxRequests.functions
  }

  enterFunctionCall(ctx: FunctionCallContext) {
    // access function info
    new CheckBlock({functions: this.functions, knownFunctions: this.knownFunctions, start: false, first: false, requests: 0, keystrokes: 0, dup: false}).checkFunctionCall(ctx, (func) => {
      const parentCtxRequests = new parentCtx(
        func.keystrokes,
        false,
        ctx.start.start,
        ctx,
        this.functions,
        this.knownFunctions,
        func.requests
      );
      this.requests += parentCtxRequests.requests
      this.functions = parentCtxRequests.functions
    });
  }
}

export default checkRequestListener;
