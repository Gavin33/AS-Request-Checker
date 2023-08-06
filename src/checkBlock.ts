import { ParserRuleContext } from 'antlr4ts';
import { ErrorHandlerContext, FunctionCallContext, StatementListContext } from './ASGrammarParser';
import checkRequestInIfStatement from './checkRequestInIfStatement';
import { checkRequestInTell } from './checkRequestInTell';

// types
export interface FunctionProperties {
  requests: number;
  keystrokes: number;
}

type FunctionCallback = (functionProperties: FunctionProperties) => void;

export interface checkBlockOptions {
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];
  start: number | false;
  first: boolean;
  requests: number;
  keystrokes: number;
  dup: boolean;
}

// checkBlock
export default class CheckBlock {
  // Define class properties
  requests: number;
  keystrokes: number;
  start: number | false;
  first: boolean;
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];
  dup: boolean;

  constructor(options: checkBlockOptions) {
    // Destructure the options object to access individual properties
    const {
      requests,
      keystrokes,
      start,
      first,
      functions,
      knownFunctions,
      dup,
    } = options;

    this.requests = requests;
    this.keystrokes = keystrokes;
    this.start = start;
    this.first = first;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
    this.dup = dup;
  }

  checkFunctionCall(ctx: FunctionCallContext, callback: FunctionCallback) {
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
  checkStart(ctx: ParserRuleContext | undefined, areRequests: boolean) {
    // check to see if there's a request.
    if (this.first) {
      if (areRequests && this.start && ctx) {
        // If so, start. If it's original, then continue with the code. If not, stop it.
        if (this.start > ctx.start.start) {
          // Definitely return something that's NOT returning a 0, 0 array. Will also need to prevent the check after first successful execution.
          this.dup = true;
          //   return false;
        }
      }
    }
    this.dup = false
    // return count;
  }
  updateProps(checkBlock: CheckBlock) {
    this.requests = checkBlock.requests;
    this.keystrokes = checkBlock.keystrokes;
    this.dup = checkBlock.dup
    this.first = checkBlock.dup
  }
  checkStatement(ctx: StatementListContext) {
    for (let statementCtx of ctx.statement()) {
      if (statementCtx.keystroke()?.expression()?.getText() === 'return') {
        this.keystrokes++;
        this.first = false;
      } else if (statementCtx.set()?.operation().value(0).getText() === 'URL') {
        this.requests++;
        this.first = false;
      } else if (statementCtx.openLocation()) {
        this.requests++;
        this.first = false;
      }
      // function calls are single statements. Can be processed like any other request in terms of checking dups.
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        this.checkFunctionCall(functionCallCtx, (func) => {
          if (func.requests || func.keystrokes) {
            this.first = false;
            this.requests += func.requests;
            this.keystrokes += func.keystrokes;
          }
        });
      }
      const ifBlockCtx = statementCtx.ifBlock();
      const tellCtx = statementCtx.tell();
      const errorHandlerCtx = statementCtx.errorHandler();
      if (ifBlockCtx) {
        const ifBlockRequests = new checkRequestInIfStatement({ ...this }, ifBlockCtx, false);
        this.updateProps(ifBlockRequests);
      }
      // handle statements. Specifically errorHandlers, tells

      // tell class.
             else if (tellCtx) {
        const tellRequests = new checkRequestInTell({...this}, tellCtx)
        this.updateProps(tellRequests)
      }  
      // error handler
      else if (errorHandlerCtx) {
        const count = this.checkErrorHandler(errorHandlerCtx);
      }
      // check start
      if (this.first) {
        const count = this.checkStart(
          statementCtx,
          !!(this.requests || this.keystrokes)
        );
      }
    }
  }
  checkErrorHandler(parentCtx: ErrorHandlerContext) {
    // Possible that part of the try block could execute then throw an error. Treating them as non-mutually exclusive.
    // Also have to account for more than one request.
    const tryStatementListCtx = parentCtx.statementList(0);
    this.checkStatement(tryStatementListCtx);
    const errorStatementListCtx = parentCtx.statementList(1);
    if (errorStatementListCtx) {
      this.checkStatement(errorStatementListCtx);
    }
  }
}
