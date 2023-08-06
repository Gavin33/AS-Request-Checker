"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkRequestInIfStatement_1 = __importDefault(require("./checkRequestInIfStatement"));
const checkRequestInTell_1 = require("./checkRequestInTell");
// checkBlock
class CheckBlock {
    constructor(options) {
        // Destructure the options object to access individual properties
        const { requests, keystrokes, start, first, functions, knownFunctions, dup, } = options;
        this.requests = requests;
        this.keystrokes = keystrokes;
        this.start = start;
        this.first = first;
        this.functions = functions;
        this.knownFunctions = knownFunctions;
        this.dup = dup;
    }
    checkFunctionCall(ctx, callback) {
        const funcName = ctx.IDENTIFIER().getText();
        if (!this.knownFunctions.includes(funcName)) {
            throw new Error('This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.');
            // In all honesty, this "feature" would likely never make it into the final release, so I decided to have a little fun with this one :)
        }
        const func = this.functions[funcName];
        if (func) {
            callback(func);
        }
    }
    checkStart(ctx, areRequests) {
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
        this.dup = false;
        // return count;
    }
    updateProps(checkBlock) {
        this.requests = checkBlock.requests;
        this.keystrokes = checkBlock.keystrokes;
        this.dup = checkBlock.dup;
        this.first = checkBlock.dup;
    }
    checkStatement(ctx) {
        var _a, _b, _c;
        for (let statementCtx of ctx.statement()) {
            if (((_b = (_a = statementCtx.keystroke()) === null || _a === void 0 ? void 0 : _a.expression()) === null || _b === void 0 ? void 0 : _b.getText()) === 'return') {
                this.keystrokes++;
                this.first = false;
            }
            else if (((_c = statementCtx.set()) === null || _c === void 0 ? void 0 : _c.operation().value(0).getText()) === 'URL') {
                this.requests++;
                this.first = false;
            }
            else if (statementCtx.openLocation()) {
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
                const ifBlockRequests = new checkRequestInIfStatement_1.default(Object.assign({}, this), ifBlockCtx, false);
                this.updateProps(ifBlockRequests);
            }
            // handle statements. Specifically errorHandlers, tells
            // tell class.
            else if (tellCtx) {
                const tellRequests = new checkRequestInTell_1.checkRequestInTell(Object.assign({}, this), tellCtx);
                this.updateProps(tellRequests);
            }
            // error handler
            else if (errorHandlerCtx) {
                const count = this.checkErrorHandler(errorHandlerCtx);
            }
            // check start
            if (this.first) {
                const count = this.checkStart(statementCtx, !!(this.requests || this.keystrokes));
            }
        }
    }
    checkErrorHandler(parentCtx) {
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
exports.default = CheckBlock;
