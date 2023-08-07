import { ParserRuleContext } from 'antlr4ts';
import {
  IfBlockContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
  ErrorHandlerContext,
  FunctionCallContext,
  StatementContext,
  StatementListContext,
} from './ASGrammarParser';
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
  callback: propsCallback;
}

type propsCallback = (
  props: checkBlockOptions,
  ctx: StatementContext
) => CheckBlock | undefined;

// checkBlock
export class CheckBlock {
  requests: number;
  keystrokes: number;
  start: number | false;
  first: boolean;
  functions: { [key: string]: FunctionProperties };
  knownFunctions: string[];
  dup: boolean;
  callback: propsCallback;

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
      callback,
    } = options;

    this.requests = requests;
    this.keystrokes = keystrokes;
    this.start = start;
    this.first = first;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
    this.dup = dup;
    this.callback = callback;
  }
  createNewBlockProps(): checkBlockOptions {
    return {
      functions: this.functions,
      knownFunctions: this.knownFunctions,
      start: this.start,
      first: this.first,
      requests: this.requests,
      keystrokes: this.keystrokes,
      dup: this.dup,
      callback: this.callback,
    };
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
    // return count;
  }
  updateProps(checkBlock: checkBlockOptions) {
    this.requests = checkBlock.requests;
    this.keystrokes = checkBlock.keystrokes;
    this.dup = checkBlock.dup;
    this.first = checkBlock.dup;
  }
  checkStatementBlock(ctx: StatementContext) {
    const checkBlock = this.callback(this.createNewBlockProps(), ctx);
    if (checkBlock) {
      this.updateProps(checkBlock);
    }
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
      if (
        statementCtx.ifBlock() ||
        statementCtx.tell() ||
        statementCtx.errorHandler()
      ) {
        this.checkStatementBlock(statementCtx);
      }
      // check start
      else if (this.first) {
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


class checkElse extends CheckBlock {
  constructor(
    options: checkBlockOptions,
    ctx: ElseIfContext | ElseStatementContext
  ) {
    super(options);
    if (ctx.constructor.name === 'ElseStatementContext') {
      const elseStatementCtx = ctx as ElseStatementContext;
      this.checkStatement(elseStatementCtx.statementList());
    } else {
      const elseIfCtx = ctx as ElseIfContext;
      this.checkStatement(elseIfCtx.ifStatement().statementList());
    }
  }
}

export default class checkRequestInIfStatement extends CheckBlock {
  constructor(
    options: checkBlockOptions,
    ifBlockCtx: IfBlockContext,
    ctx: IfStatementContext | ElseIfContext | ElseStatementContext | false
  ) {
    super(options);
    const elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    if (ctx?.constructor.name === 'IfStatementContext' || !ctx) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      this.checkStatement(ifBlockCtx.ifStatement().statementList());
      // elseIf
      if (elseIfArray) {
        elseIfArray.forEach((elseIfCtx) => {
          this.evalElse(elseIfCtx);
        });
      }
      // else
      const elseStatementCtx = ifBlockCtx.elseStatement();
      if (elseStatementCtx) {
        this.evalElse(elseStatementCtx);
      }
    }
    // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
    else {
      this.checkStatement(ifBlockCtx.ifStatement().statementList());
      if (elseIfArray) {
        for (let elseIfCtx of elseIfArray) {
          this.evalElse(elseIfCtx);
        }
      }
      const elseStatementCtx = ctx as ElseStatementContext;
      this.evalElse(elseStatementCtx);
    }
  }
  evalElse(ctx: ElseIfContext | ElseStatementContext) {
    const elseRequests = new checkElse(
      {
        functions: this.functions,
        knownFunctions: this.knownFunctions,
        start: this.start,
        first: this.first,
        requests: 0,
        keystrokes: 0,
        dup: this.dup,
        callback: this.callback,
      },
      ctx
    );
    if (elseRequests.requests > this.requests) {
      this.requests = elseRequests.requests;
    }
    if (elseRequests.keystrokes > this.keystrokes) {
      this.keystrokes = elseRequests.keystrokes;
    }
  }
}
