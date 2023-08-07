"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ifStatement_1 = __importStar(require("./ifStatement"));
const tell_1 = require("./tell");
// This function is just to avoid a circular dependency on the checkBlock class. Gets passed down via the checkParentCtx class as a callback to a checkBlock class. Checks statement blocks in isolated instances.
function checkStatementBlock(sup, ctx) {
    // ifBlock
    const ifBlockCtx = ctx.ifBlock();
    const tellCtx = ctx.tell();
    const errorHandlerCtx = ctx.errorHandler();
    if (ifBlockCtx) {
        return new ifStatement_1.default(sup, ifBlockCtx, false);
    }
    // tell class.
    else if (tellCtx) {
        return new tell_1.checkRequestInTell(sup, ctx);
    }
    // error handler
    else if (errorHandlerCtx) {
        const errorHandlerRequests = new ifStatement_1.CheckBlock(sup);
        errorHandlerRequests.checkErrorHandler(errorHandlerCtx);
        return errorHandlerRequests;
    }
}
class ParentCtx {
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
                const ifBlockRequests = new ifStatement_1.default({
                    requests: 0,
                    keystrokes: 0,
                    start: start,
                    first: true,
                    functions: this.functions,
                    knownFunctions: this.knownFunctions,
                    dup: false,
                    callback: checkStatementBlock,
                }, ifBlockCtx, ifStatementCtx);
                if (ifBlockRequests.dup) {
                    this.requests = 0;
                    return;
                }
                this.requests = ifBlockRequests.requests;
                this.keystrokes = ifBlockRequests.keystrokes;
                break;
            }
            case 'TellAppContext': {
                const tellAppCtx = parentCtx;
                if (tellAppCtx.appType().getText() === 'process' &&
                    (tellAppCtx.STRING().getText() === '"Google Chrome"' ||
                        tellAppCtx.STRING().getText() === "'Google Chrome'")) {
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
const { default: ASGrammarListener } = require('./ASGrammarListener');
// checkFunctionCall function
class checkRequestListener extends ASGrammarListener{
    constructor(requests = 0, functions = {}, knownFunctions = []) {
        super();
        this.requests = requests;
        this.functions = functions;
        this.knownFunctions = knownFunctions;
    }
    // enter methods
    enterFunctionDeclaration(ctx) {
        this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
    }
    enterKeystroke(ctx) {
        var _a;
        if (((_a = ctx.expression()) === null || _a === void 0 ? void 0 : _a.getText()) === 'return') {
            const parentCtxRequests = new ParentCtx(1, false, ctx.start.start, ctx, this.functions, this.knownFunctions);
            this.requests += parentCtxRequests.requests;
            this.functions = parentCtxRequests.functions;
        }
    }
    enterSet(ctx) {
        if (ctx.operation().value(0).getText() === 'URL') {
            const parentCtxRequests = new ParentCtx(0, false, ctx.start.start, ctx, this.functions, this.knownFunctions, 1);
            this.requests += parentCtxRequests.requests;
            this.functions = parentCtxRequests.functions;
        }
    }
    enterOpenLocation(ctx) {
        // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
        const parentCtxRequests = new ParentCtx(0, false, ctx.start.start, ctx, this.functions, this.knownFunctions, 1);
        this.requests += parentCtxRequests.requests;
        this.functions = parentCtxRequests.functions;
    }
    enterFunctionCall(ctx) {
        // access function info
        new ifStatement_1.CheckBlock({
            functions: this.functions,
            knownFunctions: this.knownFunctions,
            start: false,
            first: false,
            requests: 0,
            keystrokes: 0,
            dup: false,
            callback: checkStatementBlock,
        }).checkFunctionCall(ctx, (func) => {
            const parentCtxRequests = new ParentCtx(func.keystrokes, false, ctx.start.start, ctx, this.functions, this.knownFunctions, func.requests);
            this.requests += parentCtxRequests.requests;
            this.functions = parentCtxRequests.functions;
        });
    }
}
exports.default = checkRequestListener;
