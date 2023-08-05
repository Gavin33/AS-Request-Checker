'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const checkRequestListener_1 = require('./checkRequestListener');
const { default: ASGrammarListener } = require('./ASGrammarListener');
class checkRequestInIfStatement extends ASGrammarListener {
  constructor(knownFunctions = [], functions = {}) {
    super();
    this.knownFunctions = knownFunctions;
    this.functions = functions;
  }
  checkIfStatement(ctx, tellCallback, start) {
    var _a, _b, _c;
    let requests = 0;
    let keystrokes = 0;
    for (let statementCtx of ctx.statement()) {
      if (
        ((_b =
          (_a = statementCtx.keystroke()) === null || _a === void 0
            ? void 0
            : _a.expression()) === null || _b === void 0
          ? void 0
          : _b.getText()) === 'return'
      ) {
        keystrokes++;
      } else if (
        ((_c = statementCtx.set()) === null || _c === void 0
          ? void 0
          : _c.operation().value(0).getText()) === 'URL'
      ) {
        requests++;
      } else if (statementCtx.openLocation()) {
        requests++;
      }
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        (0, checkRequestListener_1.checkFunctionCall)(
          functionCallCtx,
          (func) => {
            requests += func.requests;
            keystrokes += func.keystrokes;
          },
          this.functions,
          this.knownFunctions
        );
      }
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        const count = this.checkIfBlock(ifBlockCtx, tellCallback.bind(this));
        requests += count[0];
        keystrokes += count[1];
      }
      // handle statements. Specifically errorHandlers, tells
      const tellCtx = statementCtx.tell();
      if (tellCtx) {
        requests += tellCallback(tellCtx);
      }
      const errorHandlerCtx = statementCtx.errorHandler();
      if (errorHandlerCtx) {
        const count = this.checkErrorHandler(
          errorHandlerCtx,
          tellCallback.bind(this)
        );
        requests += count[0];
        keystrokes += count[1];
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
  checkElseRequests(ctx, tellCallback, props, start) {
    // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
    const elseProps = this.checkIfStatement(
      ctx,
      tellCallback.bind(this),
      start
    );
    for (let i in elseProps) {
      if (elseProps[i] > props[i]) {
        props[i] = elseProps[i];
      }
    }
    return props;
  }
  checkElse(ctx, tellCallback, props, start) {
    if (ctx.constructor.name === 'ElseStatementContext') {
      const elseStatementCtx = ctx;
      props = this.checkElseRequests(
        elseStatementCtx.statementList(),
        tellCallback.bind(this),
        props,
        start
      );
    } else {
      const elseIfCtx = ctx;
      props = this.checkElseRequests(
        elseIfCtx.ifStatement().statementList(),
        tellCallback.bind(this),
        props,
        start
      );
    }
    return props;
  }
  checkIfBlock(ifBlockCtx, tellCallback, start, ctx) {
    var _a, _b;
    const elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    let count = [0, 0];
    // calced is if I've already calculated keystrokes/requests for this ifBlock.
    let calced = false;
    if (
      (ctx === null || ctx === void 0 ? void 0 : ctx.constructor.name) ===
        'IfStatementContext' ||
      !ctx
    ) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      count = this.checkIfStatement(
        ifBlockCtx.ifStatement().statementList(),
        tellCallback.bind(this),
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
            tellCallback.bind(this),
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
          tellCallback.bind(this),
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
          tellCallback.bind(this),
          start
        ).every((element) => !element)
      ) {
        let afterCtx = false;
        if (elseIfArray) {
          for (let elseIfCtx of elseIfArray) {
            if (
              elseIfCtx.start.start === ctx.start.start &&
              ((_a = elseIfCtx.stop) === null || _a === void 0
                ? void 0
                : _a.stop) ===
                ((_b = ctx.stop) === null || _b === void 0 ? void 0 : _b.stop)
            ) {
              afterCtx = true;
            } else {
              count = this.checkElse(elseIfCtx, tellCallback.bind(this), count);
              // If there are any requests/keystrokes, and not after context, it's calced. Can stop checking.
              if (!count.every((element) => !element) && !afterCtx) {
                calced = true;
                break;
              }
            }
          }
        }
        if (!calced) {
          const elseStatementCtx = ctx;
          count = this.checkElse(
            elseStatementCtx,
            tellCallback.bind(this),
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
  checkErrorHandler(parentCtx, tellCallback, ctx, start) {
    var _a, _b;
    // Can be handled like a conditional without the option for elseIf
    // Also have to account for more than one request.
    const tryStatementListCtx = parentCtx.statementList(0);
    if (
      (tryStatementListCtx.start.start ===
        (ctx === null || ctx === void 0 ? void 0 : ctx.start.start) &&
        ((_a = tryStatementListCtx.stop) === null || _a === void 0
          ? void 0
          : _a.stop) ===
          ((_b = ctx === null || ctx === void 0 ? void 0 : ctx.stop) === null ||
          _b === void 0
            ? void 0
            : _b.stop)) ||
      !ctx
    ) {
      let [requests, keystrokes] = this.checkIfStatement(
        tryStatementListCtx,
        tellCallback.bind(this),
        start
      );
      const errorStatementListCtx = parentCtx.statementList(1);
      if (errorStatementListCtx) {
        const count = this.checkIfStatement(
          tryStatementListCtx,
          tellCallback.bind(this),
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
exports.default = checkRequestInIfStatement;
