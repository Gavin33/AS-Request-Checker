import {
  StatementContext,
  StatementListContext,
  TellArgContext,
  TellContext,
  ValueContext,
} from './ASGrammarParser';
import CheckBlock, { checkBlockOptions } from './checkBlock';
import checkRequestInIfStatement from './checkRequestInIfStatement';
import { Callback } from './checkRequestListener';

// Thought of the day. What if there's more than one request in a tell block? Would we get expected behavior, or did we just forget about that whole thing?

// Only accessable through if block checks.

// So far we only check dups per statement of an if block. If it's a tell block or error handler, it would just see that the block starts before the request and say "ok". We need to check start of statements inside these blocks.

// Also no error handling for miles.

export class checkRequestInTell extends CheckBlock {
  ctx: TellContext;
  constructor(options: checkBlockOptions, ctx: TellContext) {
    super(options);
    this.ctx = ctx;
    // Is this for an app?
    const tellAppCtx = ctx.tellApp();
    if (tellAppCtx) {
      const tellArgCtx = tellAppCtx.tellArg();
      const statementListCtx = tellArgCtx.statementList();
      // Is it for process Google Chrome?
      if (
        tellAppCtx.appType().getText() === 'process' &&
        tellAppCtx.STRING().getText() === 'Google Chrome'
      ) {
        // Is it just one statement (toStatement)?
        // check to see if there's a request.
        if (
          this.checkToStatement(
            tellArgCtx,
            (statementCtx: StatementContext) => {
              const keystrokeCtx = statementCtx.keystroke();
              this.checkStart(keystrokeCtx, true);
              return keystrokeCtx;
            }
          )
        ) {
          this.first = false;
          this.requests++;
        }
        // And if not?
        else if (statementListCtx) {
          // update check requests to set state.
          this.checkRequests(
            statementListCtx,
            (statementCtx: StatementContext) => {
              const keystrokeCtx = statementCtx.keystroke();
              if (keystrokeCtx) {
                this.checkStart(keystrokeCtx, !!keystrokeCtx);
                this.first = false;
                this.requests++;
              }
            }
          );
        }
      }
      if (tellAppCtx.appType().getText() === 'application') {
        // Specifically looking for setting the URL.
        this.checkToStatement(tellArgCtx, (statementCtx: StatementContext) => {
          // Check if URL
          if (this.checkUrl(statementCtx)) {
            {
              this.checkStart(statementCtx, true);
              this.requests++;
            }
          }
        });
        // We're looking for open locations and set URL's
        const statementListCtx = tellArgCtx.statementList();
        if (statementListCtx) {
          this.checkRequests(
            statementListCtx,
            (statementCtx: StatementContext) => {
              if (this.checkUrl(statementCtx)) {
                this.requests++;
                this.checkStart(statementCtx, true);
                this.first = false;
              }
            }
          );
        }
        // to my knowledge there isn't such a thing as a tellApp inside a tellId.
      }
    }
  }

  checkToStatement(ctx: TellArgContext, callback: Callback) {
    const toStatementCtx = ctx.toStatement();
    if (toStatementCtx) {
      const statementCtx = toStatementCtx.statement();
      return callback(statementCtx);
    }
  }

  checkRequests(ctx: StatementListContext, requestObjectCallback: Callback) {
    // Handle cases where this.reqests would normally be incremented.
    for (let statementCtx of ctx.statement()) {
      requestObjectCallback(statementCtx);

      // Loops
      // Will throw an error if it finds any requests.
      this.checkLoop(statementCtx, requestObjectCallback);

      // Function calls
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        this.checkFunctionCall(functionCallCtx, (func) => {
          this.requests += func.requests + func.keystrokes;
        });
      }

      // if blocks
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        const ifBlockRequests = new checkRequestInIfStatement(
          { ...this },
          ifBlockCtx,
          false
        );
        this.updateProps(ifBlockRequests);
      }
      const errorHandlerCtx = statementCtx.errorHandler()
      if (errorHandlerCtx) {
        this.checkErrorHandler(errorHandlerCtx)
      }
    }
  }
  // From here on, going to avoid optionals when refactoring and explicitly requiring me to type "false". Leads to less mistakes.

  checkUrl(ctx: StatementContext) {
    const tellCtx = ctx.tell();
    if (tellCtx) {
      const tellIdCtx = tellCtx.tellId();
      // check to statement
      if (tellIdCtx) {
        // We'd need to get to the statements
        const tellArgCtx = tellIdCtx.tellArg();
        const toStatementCtx = this.checkToStatement(
          tellArgCtx,
          (statementCtx: StatementContext) => {
            return this.checkSet(statementCtx);
          }
        );
        if (toStatementCtx) {
          return toStatementCtx;
        }
        const statementListCtx = tellArgCtx.statementList();
        if (statementListCtx) {
          return statementListCtx.statement();
        }
      }
    }
    const setCtx = this.checkSet(ctx);
    if (setCtx) {
      return setCtx;
    }
    const makeNewCtx = ctx.makeNew();
    if (makeNewCtx) {
      return this.checkMakeNew(ctx);
    }
    return ctx.openLocation();
  }
  checkSet(ctx: StatementContext) {
    const setCtx = ctx.set();
    if (setCtx) {
      // set URL or makeNew to be exact. checkStatements expects a callback function. Something that returns some form of the context object. It will take this, and for each item, it'll add one to this.requests.
      const variableCtx = setCtx.operation().value(0).variable();
      if (variableCtx) {
        const IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
        if (IDENTIFIERCtx?.getText() === 'URL') {
          return IDENTIFIERCtx;
        }
        const propertyCtx = variableCtx.property(0).IDENTIFIER();
        if (propertyCtx?.getText() === 'URL') {
          return propertyCtx;
        }
      }
      const expressionCtx = setCtx.expression();
      const operationCtx = expressionCtx.operation();
      if (operationCtx) {
        const valueArray = operationCtx.value();
        for (let v in valueArray) {
          const valueCtx = valueArray[v];
          const makeNewCtx = this.checkMakeNew(valueCtx);
          if (makeNewCtx) {
            return makeNewCtx;
          }
        }
      }
    }
  }
  checkMakeNew(ctx: ValueContext | StatementContext) {
    // Also need to return callback with context object
    const makeNewCtx = ctx.makeNew();
    if (makeNewCtx) {
      const recordCtx = makeNewCtx.record();
      if (recordCtx) {
        const variableArray = recordCtx.variable();
        for (let variableCtx of variableArray) {
          const IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
          if (IDENTIFIERCtx?.getText() === 'URL') {
            return IDENTIFIERCtx;
          }
          const propertyCtx = variableCtx.property(0).IDENTIFIER();
          if (propertyCtx?.getText() === 'URL') {
            return propertyCtx;
          }
        }
      }
    }
  }
  checkLoop(ctx: StatementContext, callback: Callback) {
    // Loops don't return requests. They throw errors if they detect anything.
    const loopStatementCtx = ctx.loopStatement();
    if (loopStatementCtx) {
      const repeatLoopCtx = loopStatementCtx.repeatLoop();
      if (repeatLoopCtx) {
        this.checkLoopStatements(repeatLoopCtx.statementList(), callback);
      }
      const whileLoopCtx = loopStatementCtx.whileLoop();
      if (whileLoopCtx) {
        this.checkLoopStatements(whileLoopCtx.statementList(), callback);
      }
    }
  }

  checkLoopStatements(ctx: StatementListContext, callback: Callback) {
    ctx.statement().forEach((statementCtx: StatementContext) => {
      const error = () => {
        throw new Error('Request detected in loop.');
      };
      // Check for keystrokes
      if (callback(statementCtx)) {
        error();
      }

      // Check for more loops
      this.checkLoop(statementCtx, callback);

      // Check for a function
      // Passing an error object directly to checkFunctionCall may have unintended side effects (false negatives). Instead check if return is truthy.
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        // If it exists, it has a non-zero amount of requests
        this.checkFunctionCall(functionCallCtx, () => {
          error();
        });
      }
      // Check for if statement
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        const ifBlockRequests = new checkRequestInIfStatement(
          {
            functions: this.functions,
            knownFunctions: this.knownFunctions,
            start: false,
            first: false,
            requests: 0,
            keystrokes: 0,
            dup: false,
          },
          ifBlockCtx,
          false
        );
        if (ifBlockRequests.requests || ifBlockRequests.keystrokes) {
          error();
        }
      }
    });
  }
}
