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
exports.checkRequestInTell = void 0;
const ifStatement_1 = __importStar(require("./ifStatement"));
// Only accessable through if block checks.
class checkRequestInTell extends ifStatement_1.CheckBlock {
    constructor(options, ctx) {
        super(options);
        this.checkTell(ctx);
    }
    checkTell(ctx) {
        // Is this a tell?
        const tellCtx = ctx.tell();
        if (tellCtx) {
            // Is this for an app?
            const tellAppCtx = tellCtx.tellApp();
            if (tellAppCtx) {
                const tellArgCtx = tellAppCtx.tellArg();
                const statementListCtx = tellArgCtx.statementList();
                // Is it for process Google Chrome?
                if (tellAppCtx.appType().getText() === 'process' &&
                    (tellAppCtx.STRING().getText() === '"Google Chrome"' ||
                        tellAppCtx.STRING().getText() === "'Google Chrome'")) {
                    // Is it just one statement (toStatement)?
                    // check to see if there's a request.
                    if (this.checkToStatement(tellArgCtx, (statementCtx) => {
                        const keystrokeCtx = statementCtx.keystroke();
                        this.checkStart(keystrokeCtx, true);
                        return keystrokeCtx;
                    })) {
                        this.first = false;
                        this.requests++;
                    }
                    // And if not?
                    if (statementListCtx) {
                        // update check requests to set state.
                        this.checkRequests(statementListCtx, (statementCtx) => {
                            const keystrokeCtx = statementCtx.keystroke();
                            if (keystrokeCtx) {
                                this.checkStart(keystrokeCtx, !!keystrokeCtx);
                                this.first = false;
                                this.requests++;
                            }
                        });
                    }
                }
                if (tellAppCtx.appType().getText() === 'application') {
                    // Specifically looking for setting the URL.
                    this.checkToStatement(tellArgCtx, (statementCtx) => {
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
                        this.checkRequests(statementListCtx, (statementCtx) => {
                            if (this.checkUrl(statementCtx)) {
                                this.requests++;
                                this.checkStart(statementCtx, true);
                                this.first = false;
                            }
                        });
                    }
                    // to my knowledge there isn't such a thing as a tellApp inside a tellId.
                }
            }
        }
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
        for (let statementCtx of ctx.statement()) {
            requestObjectCallback(statementCtx);
            // tells
            this.checkTell(statementCtx);
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
                const ifBlockRequests = new ifStatement_1.default(Object.assign({}, this), ifBlockCtx, false);
                this.updateProps(ifBlockRequests);
            }
            const errorHandlerCtx = statementCtx.errorHandler();
            if (errorHandlerCtx) {
                this.checkErrorHandler(errorHandlerCtx);
            }
        }
    }
    // From here on, going to avoid optionals when refactoring and explicitly requiring me to type "false". Leads to less mistakes.
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
                this.checkFunctionCall(functionCallCtx, () => {
                    error();
                });
            }
            // Check for if statement
            const ifBlockCtx = statementCtx.ifBlock();
            if (ifBlockCtx) {
                const ifBlockRequests = new ifStatement_1.default({
                    functions: this.functions,
                    knownFunctions: this.knownFunctions,
                    start: false,
                    first: false,
                    requests: 0,
                    keystrokes: 0,
                    dup: false,
                    callback: this.callback,
                }, ifBlockCtx, false);
                if (ifBlockRequests.requests || ifBlockRequests.keystrokes) {
                    error();
                }
            }
        });
    }
}
exports.checkRequestInTell = checkRequestInTell;
