"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkBlock_1 = __importDefault(require("./checkBlock"));
const parentCtx_1 = __importDefault(require("./parentCtx"));
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
            const parentCtxRequests = new parentCtx_1.default(1, false, ctx.start.start, ctx, this.functions, this.knownFunctions);
            this.requests += parentCtxRequests.requests;
            this.functions = parentCtxRequests.functions;
        }
    }
    enterSet(ctx) {
        if (ctx.operation().value(0).getText() === 'URL') {
            const parentCtxRequests = new parentCtx_1.default(0, false, ctx.start.start, ctx, this.functions, this.knownFunctions, 1);
            this.requests += parentCtxRequests.requests;
            this.functions = parentCtxRequests.functions;
        }
    }
    enterOpenLocation(ctx) {
        // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
        const parentCtxRequests = new parentCtx_1.default(0, false, ctx.start.start, ctx, this.functions, this.knownFunctions, 1);
        this.requests += parentCtxRequests.requests;
        this.functions = parentCtxRequests.functions;
    }
    enterFunctionCall(ctx) {
        // access function info
        new checkBlock_1.default({ functions: this.functions, knownFunctions: this.knownFunctions, start: false, first: false, requests: 0, keystrokes: 0, dup: false }).checkFunctionCall(ctx, (func) => {
            const parentCtxRequests = new parentCtx_1.default(func.keystrokes, false, ctx.start.start, ctx, this.functions, this.knownFunctions, func.requests);
            this.requests += parentCtxRequests.requests;
            this.functions = parentCtxRequests.functions;
        });
    }
}
exports.default = checkRequestListener;
