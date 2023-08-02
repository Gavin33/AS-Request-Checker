"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFunctionCall = void 0;
const checkRequestInTell_1 = require("./checkRequestInTell");
// checkFunctionCall function
const checkFunctionCall = (ctx, callback, functions, knownFunctions) => {
    const funcName = ctx.IDENTIFIER().getText();
    if (!knownFunctions.includes(funcName)) {
        throw new Error('This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.');
        // In all honesty, this "feature" would likely never make it into the final release, so I decided to have a little fun with this one :)
    }
    const func = functions[funcName];
    if (func) {
        callback(func);
    }
};
exports.checkFunctionCall = checkFunctionCall;
class checkRequestListener extends checkRequestInTell_1.checkRequestInTell {
    constructor(requests = 0) {
        super();
        this.requests = requests;
    }
    // check function call method
    checkFunctionCall(ctx, callback) {
        (0, exports.checkFunctionCall)(ctx, callback, this.functions, this.knownFunctions);
    }
    // Check parent
    checkParentCtx(ctx, genes) {
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
                const ifBlockCtx = parentCtx;
                const ifStatementCtx = ctx;
                const count = this.checkIfBlock(ifBlockCtx, this.checkTell, genes.start, ifStatementCtx);
                if (count.every((element) => element === 0)) {
                    return;
                }
                genes.requests = count[0];
                genes.keystrokes = count[1];
                break;
            }
            case 'tellApp': {
                const tellAppCtx = parentCtx;
                if (tellAppCtx.appType().getText() === 'process' &&
                    tellAppCtx.STRING().getText() === 'Google Chrome') {
                    genes.inTell = true;
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
                this.functions[funcName].requests += genes.requests;
                if (genes.inTell) {
                    this.functions[funcName].requests += genes.keystrokes;
                }
                else {
                    this.functions[funcName].keystrokes += genes.keystrokes;
                }
                // According to AS syntax, function declarations are always at the top level. So only thing above this is statement => program. Safe to return here.
                return;
            }
            case 'ErrorHandlerContext': {
                const errorHandlerCtx = parentCtx;
                const errorHandlerChildCtx = ctx;
                const [requests, keystrokes] = this.checkErrorHandler(errorHandlerCtx, this.checkTell, errorHandlerChildCtx, genes.start);
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
    // enter methods
    enterFunctionDeclaration(ctx) {
        this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
    }
    enterKeystroke(ctx) {
        var _a;
        if (((_a = ctx.expression()) === null || _a === void 0 ? void 0 : _a.getText()) === 'return') {
            const dna = {
                requests: 0,
                keystrokes: 1,
                inTell: false,
                start: ctx.start.start,
            };
            this.checkParentCtx(ctx, dna);
        }
    }
    enterSet(ctx) {
        if (ctx.operation().value(0).getText() === 'URL') {
            const dna = {
                requests: 1,
                keystrokes: 0,
                inTell: false,
                start: ctx.start.start,
            };
            this.checkParentCtx(ctx, dna);
        }
    }
    enterOpenLocation(ctx) {
        // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
        const dna = {
            requests: 1,
            keystrokes: 0,
            inTell: false,
            start: ctx.start.start,
        };
        this.checkParentCtx(ctx, dna);
    }
    enterFunctionCall(ctx) {
        // access function info
        this.checkFunctionCall(ctx, (func) => {
            if (func) {
                const dna = {
                    requests: func.requests,
                    keystrokes: func.keystrokes,
                    inTell: false,
                    start: ctx.start.start,
                };
                this.checkParentCtx(ctx, dna);
            }
        });
    }
}
exports.default = checkRequestListener;
