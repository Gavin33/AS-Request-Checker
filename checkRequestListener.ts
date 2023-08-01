import { ParserRuleContext } from 'antlr4ts';
import { ASGrammarListener } from './ASGrammarListener';
import {
  FunctionCallContext,
  IfBlockContext,
  OpenLocationContext,
  StatementListContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
  FunctionDeclarationContext,
  TellAppContext,
  SetContext,
  ErrorHandlerContext,
  KeystrokeContext,
} from './ASGrammarParser';
import { checkRequestInTell } from './checkRequestInTell';

// Note: there are going to be a huge number of type errors on this file on your side most likely. antlr4ts is still in alpha, so there are quite a few errors. Main issues that come up are some misnamed properties/methods on some of the classes. I don't want to purposely use the wrong syntax just to make ts happy, so I made a few bug fixes to antlr4ts on my end instead.

// Also note antlr4ts generates ASGrammarListener as an interface, which is less than ideal to say the least. You have to extend the proper antlr4 subclass each time you transpile.

// Also since we're not extending a subclass, we can't call super without getting an error, so I just stuck it in as a comment.

// Possible feature improvement(s): calculate if blocks, recursive functions and loops instead of just throwing an error. Add variable support to functions arguments, loop expressions and if blocks. Add support for calling handlers before they're defined (which is valid AppleScript syntax believe it or not).

// Keystrokes cannot be generated from an enter method alone. Has to be logged as part of some kind of block (functionDeclaration, errorHandler, ifBlock, etc.)

// I could call it ParentProps, but that's just a fancy way of saying genes.
interface Genes {
  requests: number;
  keystrokes: number;
  inTell: boolean;
  start: number;
}
interface FunctionProperties {
  requests: number;
  keystrokes: number;
}

class checkRequestListener
  extends checkRequestInTell
  implements ASGrammarListener
{
  // extends ASGrammarListener
  requests: number;

  constructor(requests: number = 0) {
    super();
    this.requests = requests;
  }

  checkFunctionCall(
    ctx: FunctionCallContext,
    callback: (functionProperties: FunctionProperties) => void
  ) {
    const funcName = ctx.IDENTIFIER().getText();
    if (!this.knownFunctions.includes(funcName)) {
      throw new Error(
        'This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.'
      );
      // In all honesty, this "feature" would likely never make it into the final release, so I decided to have a little fun with this one :)
    }
    const func = this.functions[funcName];
    if (func) {
      callback(func);
    }
  }

  // Logic for tell block
  enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
    this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
  }

  enterKeystroke(ctx: KeystrokeContext) {
    if (ctx.expression()?.getText() === 'return') {
      const dna: Genes = {
        requests: 0,
        keystrokes: 1,
        inTell: false,
        start: ctx.start.start,
      };
      this.checkParentCtx(ctx, dna);
    }
  }

  enterSet(ctx: SetContext) {
    if (ctx.operation().value(0).getText() === 'URL') {
      const dna: Genes = {
        requests: 1,
        keystrokes: 0,
        inTell: false,
        start: ctx.start.start,
      };
      this.checkParentCtx(ctx, dna);
    }
  }

  enterOpenLocation(ctx: OpenLocationContext) {
    // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
    const dna: Genes = {
      requests: 1,
      keystrokes: 0,
      inTell: false,
      start: ctx.start.start,
    };
    this.checkParentCtx(ctx, dna);
  }

  enterFunctionCall(ctx: FunctionCallContext) {
    // access function info
    this.checkFunctionCall(ctx, (func) => {
      if (func) {
        const dna: Genes = {
          requests: func.requests,
          keystrokes: func.keystrokes,
          inTell: false,
          start: ctx.start.start,
        };
        this.checkParentCtx(ctx, dna);
      }
    });
  }

  checkParentCtx(ctx: ParserRuleContext, genes: Genes) {
    // Other than recursive calls, there's only 4 inputs that are going to be fed into this: set URL, keystroke return, open location and functionCall.
    const parentCtx = ctx.parentCtx;
    switch (parentCtx.constructor.name) {
      case 'ProgramContext': {
        this.requests += genes.requests;
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
        const count = this.checkIfBlock(
          ifBlockCtx,
          this.checkTell,
          this.checkFunctionCall,
          this.checkErrorHandler,
          genes.start,
          ifStatementCtx
        );
        if (count.every((element) => element === 0)) {
          return;
        }
        genes.requests = count[0];
        genes.keystrokes = count[1];
        break;
      }
      case 'tellApp': {
        const tellAppCtx = parentCtx as TellAppContext;
        if (
          tellAppCtx.appType().getText() === 'process' &&
          tellAppCtx.STRING().getText() === 'Google Chrome'
        ) {
          genes.inTell = true;
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
        this.functions[funcName].requests += genes.requests;
        if (genes.inTell) {
          this.functions[funcName].requests += genes.keystrokes;
        } else {
          this.functions[funcName].keystrokes += genes.keystrokes;
        }
        // According to AS syntax, function declarations are always at the top level. So only thing above this is statement => program. Safe to return here.
        return;
      }
      case 'ErrorHandlerContext': {
        // Something bad is happening in oz
        const errorHandlerCtx = parentCtx as ErrorHandlerContext;
        const errorHandlerChildCtx = ctx as StatementListContext;
        const [requests, keystrokes] = this.checkErrorHandler(
          errorHandlerCtx,
          errorHandlerChildCtx,
          genes.start
        );
        if (requests === 0 && keystrokes === 0) {
          return;
        }
        genes.requests += requests;
        genes.keystrokes += keystrokes;
      }
    }
    if (genes.inTell) {
      genes.requests += genes.keystrokes;
    }
    this.checkParentCtx(parentCtx, genes);
  }

  checkErrorHandler(
    parentCtx: ErrorHandlerContext,
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
        this.checkTell,
        this.checkFunctionCall,
        this.checkErrorHandler,
        start
      );
      const errorStatementListCtx = parentCtx.statementList(1);
      if (errorStatementListCtx) {
        const count = this.checkIfStatement(
          tryStatementListCtx,
          this.checkTell,
          this.checkFunctionCall,
          this.checkErrorHandler,
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

export default checkRequestListener;
