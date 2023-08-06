"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkBlock_1 = __importDefault(require("./checkBlock"));
const checkRequestInIfStatement_1 = __importDefault(require("./checkRequestInIfStatement"));
class parentCtx {
    constructor(keystrokes, inTell, start, ctx, functions, knownFunctions, requests = 0) {
        this.requests = requests;
        this.keystrokes = keystrokes;
        this.inTell = inTell;
        this.functions = functions;
        this.knownFunctions = knownFunctions;
        this.checkParentCtx(ctx, start);
    }
    checkParentCtx(ctx, start) {
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
                const ifBlockCtx = parentCtx;
                const ifStatementCtx = ctx;
                const ifBlockRequests = new checkRequestInIfStatement_1.default({
                    requests: this.requests,
                    keystrokes: this.keystrokes,
                    start: start,
                    first: true,
                    functions: this.functions,
                    knownFunctions: this.knownFunctions,
                    dup: false,
                }, ifBlockCtx, ifStatementCtx);
                if (ifBlockRequests.dup) {
                    this.requests = 0;
                    return;
                }
                this.requests = ifBlockRequests.requests;
                this.keystrokes = ifBlockRequests.keystrokes;
                break;
            }
            case 'tellApp': {
                const tellAppCtx = parentCtx;
                if (tellAppCtx.appType().getText() === 'process' &&
                    tellAppCtx.STRING().getText() === 'Google Chrome') {
                    this.inTell = true;
                }
                break;
            }
            case 'FunctionDeclarationContext': {
                // add the current requests and keystrokes to the count for the declaration. If there are more requests they'll also be calced and added to the count for the declaration.
                const functionDeclarationCtx = parentCtx;
                const funcName = functionDeclarationCtx.IDENTIFIER(0).getText();
                if (!(funcName in this.functions)) {
                    this.functions[funcName] = { requests: 0, keystrokes: 0 };
                }
                this.functions[funcName].requests += this.requests;
                if (this.inTell) {
                    this.functions[funcName].requests += this.keystrokes;
                }
                else {
                    this.functions[funcName].keystrokes += this.keystrokes;
                }
                // According to AS syntax, function declarations are always at the top level. So only thing above this is statement => program. Safe to return here.
                return;
            }
            case 'ErrorHandlerContext': {
                const errorHandlerCtx = parentCtx;
                const errorHandlerChildCtx = ctx;
                // check error handler
                const errorRequests = new checkBlock_1.default({
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
exports.default = parentCtx;
