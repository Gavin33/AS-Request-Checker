"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkRequestInTell = void 0;
const checkRequestInIfStatement_1 = __importDefault(require("./checkRequestInIfStatement"));
const checkRequestListener_1 = require("./checkRequestListener");
// Thought of the day. What if there's more than one request in a tell block? Would we get expected behavior, or did we just forget about that whole thing?
class checkRequestInTell extends checkRequestInIfStatement_1.default {
    constructor() {
        super();
    }
    checkTell(ctx) {
        let requests = 0;
        // Is this for an app?
        const tellAppCtx = ctx.tellApp();
        if (tellAppCtx) {
            const tellArgCtx = tellAppCtx.tellArg();
            // Is it for process Google Chrome?
            if (tellAppCtx.appType().getText() === 'process' &&
                tellAppCtx.STRING().getText() === 'Google Chrome') {
                // Is it just one statement (toStatement)?
                if (this.checkToStatement(tellArgCtx, (statementCtx) => {
                    return statementCtx.keystroke();
                })) {
                    requests++;
                }
                // And if not?
                const statementListCtx = tellArgCtx.statementList();
                if (statementListCtx) {
                    requests += this.checkRequests(statementListCtx, (statementCtx) => {
                        return statementCtx.keystroke();
                    });
                }
            }
            if (tellAppCtx.appType().getText() === 'application') {
                // Specifically looking for setting the URL.
                this.checkToStatement(tellArgCtx, (statementCtx) => {
                    // Check if URL
                    if (this.checkUrl(statementCtx)) {
                        requests++;
                    }
                });
                // We're looking for open locations and set URL's
                const statementListCtx = tellArgCtx.statementList();
                if (statementListCtx) {
                    requests += this.checkRequests(statementListCtx, (statementCtx) => {
                        return this.checkUrl(statementCtx);
                    });
                }
                // to my knowledge there isn't such a thing as a tellApp inside a tellId.
            }
        }
        return requests;
    }
    checkToStatement(ctx, callback) {
        const toStatementCtx = ctx.toStatement();
        if (toStatementCtx) {
            const statementCtx = toStatementCtx.statement();
            return callback(statementCtx);
        }
    }
    checkRequests(ctx, requestObjectCallback) {
        // Handle cases where this.reqests would normally be incremented.
        let requests = 0;
        ctx.statement().forEach((statementCtx) => {
            // find all requests in statementList
            const requestCtx = requestObjectCallback(statementCtx);
            if (Array.isArray(requestCtx)) {
                for (let s of requestCtx) {
                    requests++;
                }
            }
            else if (requestCtx) {
                requests++;
            }
            // Loops
            // Will throw an error if it finds any requests.
            this.checkLoop(statementCtx, requestObjectCallback);
            // Function calls
            const functionCallCtx = statementCtx.functionCall();
            if (functionCallCtx) {
                (0, checkRequestListener_1.checkFunctionCall)(functionCallCtx, (func) => {
                    requests += func.requests + func.keystrokes;
                }, this.functions, this.knownFunctions);
            }
            // if blocks
            const ifBlockCtx = statementCtx.ifBlock();
            if (ifBlockCtx) {
                this.checkIfBlock(ifBlockCtx, this.checkTell.bind(this)).forEach((request) => (requests += request));
            }
        });
        return requests;
    }
    checkUrl(ctx) {
        const tellCtx = ctx.tell();
        if (tellCtx) {
            const tellIdCtx = tellCtx.tellId();
            // check to statement
            if (tellIdCtx) {
                // We'd need to get to the statements
                const tellArgCtx = tellIdCtx.tellArg();
                const toStatementCtx = this.checkToStatement(tellArgCtx, (statementCtx) => {
                    return this.checkSet(statementCtx);
                });
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
    checkSet(ctx) {
        const setCtx = ctx.set();
        if (setCtx) {
            // set URL or makeNew to be exact. checkStatements expects a callback function. Something that returns some form of the context object. It will take this, and for each item, it'll add one to this.requests.
            const variableCtx = setCtx.operation().value(0).variable();
            if (variableCtx) {
                const IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
                if ((IDENTIFIERCtx === null || IDENTIFIERCtx === void 0 ? void 0 : IDENTIFIERCtx.getText()) === 'URL') {
                    return IDENTIFIERCtx;
                }
                const propertyCtx = variableCtx.property(0).IDENTIFIER();
                if ((propertyCtx === null || propertyCtx === void 0 ? void 0 : propertyCtx.getText()) === 'URL') {
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
    checkMakeNew(ctx) {
        // Also need to return callback with context object
        const makeNewCtx = ctx.makeNew();
        if (makeNewCtx) {
            const recordCtx = makeNewCtx.record();
            if (recordCtx) {
                const variableArray = recordCtx.variable();
                for (let variableCtx of variableArray) {
                    const IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
                    if ((IDENTIFIERCtx === null || IDENTIFIERCtx === void 0 ? void 0 : IDENTIFIERCtx.getText()) === 'URL') {
                        return IDENTIFIERCtx;
                    }
                    const propertyCtx = variableCtx.property(0).IDENTIFIER();
                    if ((propertyCtx === null || propertyCtx === void 0 ? void 0 : propertyCtx.getText()) === 'URL') {
                        return propertyCtx;
                    }
                }
            }
        }
    }
    checkLoop(ctx, callback) {
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
    checkLoopStatements(ctx, callback) {
        ctx.statement().forEach((statementCtx) => {
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
                (0, checkRequestListener_1.checkFunctionCall)(functionCallCtx, () => {
                    error();
                }, this.functions, this.knownFunctions);
            }
            // Check for if statement
            const ifBlockCtx = statementCtx.ifBlock();
            if (ifBlockCtx) {
                if (this.checkIfBlock(ifBlockCtx, this.checkTell.bind(this)).every((element) => element)) {
                    error();
                }
            }
        });
    }
}
exports.checkRequestInTell = checkRequestInTell;
