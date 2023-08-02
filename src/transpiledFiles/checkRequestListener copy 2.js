'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ASGrammarParser = require('./ASGrammarParser');
const ASGrammarListener = require('./ASGrammarListener.js').default;
class checkRequestListener extends ASGrammarListener {
  constructor(requests = 0, error, functions = {}) {
    super();
    this.requests = requests;
    this.error = error;
    this.functions = functions;
  }
  // // Logic for open location
  // enterOpenLocation() {
  //     this.requests++;
  // }
  // // Logic for tell block
  // checkStatements(ctx, callback) {
  //     // Loop through ctx
  //     const statementArray = ctx.statement();
  //     ctx.statement().forEach((statementCtx) => {
  //         return callback(statementCtx);
  //     });
  // }
  // checkTell(ctx) {
  //     let requests = 0;
  //     // Is this for an app?
  //     const tellAppCtx = ctx.tellApp();
  //     if (tellAppCtx) {
  //         const tellArgCtx = tellAppCtx.tellArg();
  //         // Is it for process Google Chrome?
  //         if (tellAppCtx.appType().text === 'process' &&
  //             tellAppCtx.STRING().text === 'Google Chrome') {
  //             // Is it just one statement (toStatement)?
  //             if (this.checkToStatement(tellArgCtx, (statementCtx) => {
  //                 return statementCtx.keystroke();
  //             })) {
  //                 requests++;
  //             }
  //             // And if not?
  //             const statementListCtx = tellArgCtx.statementList();
  //             if (statementListCtx) {
  //                 requests += this.checkRequests(statementListCtx, (statementCtx) => {
  //                     return statementCtx.keystroke();
  //                 });
  //             }
  //         }
  //         if (tellAppCtx.appType().text === 'application') {
  //             // Specifically looking for setting the URL.
  //             // expecting context object
  //             this.checkToStatement(tellArgCtx, (statementCtx) => {
  //                 // Check if URL
  //                 if (this.checkUrl(statementCtx)) {
  //                     requests++;
  //                 }
  //             });
  //             // We're looking for open locations and set URL's
  //             const statementListCtx = tellArgCtx.statementList();
  //             if (statementListCtx) {
  //                 requests += this.checkRequests(statementListCtx, (statementCtx) => {
  //                     return this.checkUrl(statementCtx);
  //                 });
  //             }
  //             // to my knowledge there isn't such a thing as a tellApp inside a tellId.
  //         }
  //     }
  //     return requests;
  // }
  // checkUrl(ctx) {
  //     const tellCtx = ctx.tell();
  //     if (tellCtx) {
  //         const tellIdCtx = tellCtx.tellId();
  //         // check to statement
  //         if (tellIdCtx) {
  //             // Why are we checking set here?
  //             // We'd need to get to the statements
  //             const tellArgCtx = tellIdCtx.tellArg();
  //             // where is checkUrl used?
  //             // Why is it a number?
  //             /* tell application string
  //                 tell variable tellArg
  //                 */
  //             const toStatementCtx = this.checkToStatement(tellArgCtx, (statementCtx) => {
  //                 return this.checkSet(statementCtx);
  //             });
  //             if (toStatementCtx) {
  //                 return toStatementCtx;
  //             }
  //             const statementListCtx = tellArgCtx.statementList();
  //             if (statementListCtx) {
  //                 return statementListCtx.statement();
  //             }
  //         }
  //     }
  //     const setCtx = this.checkSet(ctx);
  //     if (setCtx) {
  //         return setCtx;
  //     }
  //     const makeNewCtx = ctx.makeNew();
  //     // this.checkMakeNew(ctx);
  //     if (makeNewCtx) {
  //         return makeNewCtx;
  //     }
  //     return ctx.openLocation();
  // }
  // checkMakeNew(ctx) {
  //     // Also need to return callback with context object
  //     const makeNewCtx = ctx.makeNew();
  //     if (makeNewCtx) {
  //         const recordCtx = makeNewCtx.record();
  //         if (recordCtx) {
  //             const variableArray = recordCtx.variable();
  //             for (let variableCtx of variableArray) {
  //                 const IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
  //                 if ((IDENTIFIERCtx === null || IDENTIFIERCtx === void 0 ? void 0 : IDENTIFIERCtx.getText()) === 'URL') {
  //                     return IDENTIFIERCtx;
  //                 }
  //                 const propertyCtx = variableCtx.property(0).IDENTIFIER();
  //                 if ((propertyCtx === null || propertyCtx === void 0 ? void 0 : propertyCtx.getText()) === 'URL') {
  //                     return propertyCtx;
  //                 }
  //             }
  //         }
  //     }
  // }
  // checkSet(ctx) {
  //     const setCtx = ctx.set();
  //     if (setCtx) {
  //         // set URL or makeNew to be exact. checkStatements expects a callback function. Something that returns some form of the context object. It will take this, and for each item, it'll add one to this.requests.
  //         const variableCtx = setCtx.operation().value(0).variable();
  //         if (variableCtx) {
  //             const IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
  //             if ((IDENTIFIERCtx === null || IDENTIFIERCtx === void 0 ? void 0 : IDENTIFIERCtx.getText()) === 'URL') {
  //                 return IDENTIFIERCtx;
  //             }
  //             const propertyCtx = variableCtx.property(0).IDENTIFIER();
  //             if ((propertyCtx === null || propertyCtx === void 0 ? void 0 : propertyCtx.getText()) === 'URL') {
  //                 return propertyCtx;
  //             }
  //         }
  //         const expressionCtx = setCtx.expression();
  //         const operationCtx = expressionCtx.operation();
  //         if (operationCtx) {
  //             const valueArray = operationCtx.value();
  //             for (let v in valueArray) {
  //                 const valueCtx = valueArray[v];
  //                 const makeNewCtx = this.checkMakeNew(valueCtx);
  //                 if (makeNewCtx) {
  //                     return makeNewCtx;
  //                 }
  //             }
  //         }
  //     }
  // }
  // enterTell(ctx) {
  //     this.requests += this.checkTell(ctx);
  // }
  // checkRequests(ctx, requestObjectCallback) {
  //     // Doesn't make sense. If a function call is in an if block, wouldn't it just add to this.request instead of maxIfRequests?
  //     // Handle cases where this.reqests would normally be incremented.
  //     let requests = 0;
  //     ctx.statement().forEach((statementCtx) => {
  //         // find all requests in statementList
  //         const requestCtx = requestObjectCallback(statementCtx);
  //         if (Array.isArray(requestCtx)) {
  //             for (let s of requestCtx) {
  //                 requests++;
  //             }
  //         }
  //         else if (requestCtx) {
  //             requests++;
  //         }
  //         // Loops
  //         // Will throw an error if it finds any requests.
  //         this.checkLoop(statementCtx, requestObjectCallback);
  //         // Function calls
  //         const functionCallCtx = statementCtx.functionCall();
  //         if (functionCallCtx) {
  //             requests += this.checkFunctionCall(functionCallCtx, requestObjectCallback);
  //         }
  //         // if blocks
  //         const ifBlockCtx = statementCtx.ifBlock();
  //         if (ifBlockCtx) {
  //             requests += this.checkIfBlockOld(ifBlockCtx, requestObjectCallback);
  //         }
  //     });
  //     return requests;
  // }
  // // checkToStatement
  // checkToStatement(ctx, callback) {
  //     const toStatementCtx = ctx.toStatement();
  //     if (toStatementCtx) {
  //         const statementCtx = toStatementCtx.statement();
  //         return callback(statementCtx);
  //         /* const requestCtx = callback(statementCtx)
  //           if (requestCtx){
  //           requests++;}
  //       }
  //       return requests; */
  //     }
  // }
  // checkLoop(ctx, callback) {
  //     // Loops don't return requests. They throw errors if they detect anything.
  //     const loopStatementCtx = ctx.loopStatement();
  //     if (loopStatementCtx) {
  //         const repeatLoopCtx = loopStatementCtx.repeatLoop();
  //         if (repeatLoopCtx) {
  //             this.checkLoopStatements(repeatLoopCtx.statementList(), callback);
  //         }
  //         const whileLoopCtx = loopStatementCtx.whileLoop();
  //         if (whileLoopCtx) {
  //             this.checkLoopStatements(whileLoopCtx.statementList(), callback);
  //         }
  //     }
  // }
  // checkLoopStatements(ctx, callback) {
  //     this.checkStatements(ctx, (statementCtx) => {
  //         const error = () => {
  //             this.error = 'Request detected in loop.';
  //         };
  //         // Check for keystrokes
  //         if (callback(statementCtx)) {
  //             error();
  //         }
  //         // Check for more loops
  //         this.checkLoop(statementCtx, callback);
  //         // Check for a function
  //         // Passing an error object directly to checkFunctionCall may have unintended side effects (false negatives). Instead check if return is truthy.
  //         const functionCallCtx = statementCtx.functionCall();
  //         if (functionCallCtx) {
  //             this.checkFunctionCall(functionCallCtx, () => error());
  //         }
  //         // Check for if statement
  //         const ifBlockCtx = statementCtx.ifBlock();
  //         if (ifBlockCtx) {
  //             this.checkIfBlockOld(ifBlockCtx, () => {
  //                 error();
  //             });
  //         }
  //     });
  // }
  // // Function call
  // checkFunctionCall(ctx, requestObjectCallback) {
  //     let requests = 0;
  //     const currentFunc = ctx.IDENTIFIER().text;
  //     // if (currentFunc in this.functions) {
  //     //   this.checkStatements(
  //     //     this.functions[currentFunc],
  //     //     (statementCtx: StatementContext) => {
  //     //       // First add each request to the requests
  //     //       const requestCtx = requestObjectCallback(statementCtx);
  //     //       if (Array.isArray(requestCtx)) {
  //     //         for (let s of requestCtx) {
  //     //           requests++;
  //     //         }
  //     //       } else if (requestCtx) {
  //     //         requests++;
  //     //       }
  //     //       if (requests > 0) {
  //     //         // Now we have to deal with addRequests, or rather removing it.
  //     //         // Also we're not adding to this.requests nearly as much anymore. It'll just be to the local request object. Totals will be added to this.requests in enter methods exclusively
  //     //         const recursiveCallCtx = statementCtx.functionCall();
  //     //         if (recursiveCallCtx) {
  //     //           if (recursiveCallCtx.IDENTIFIER().text === currentFunc) {
  //     //             this.error = 'Request detected in recursive function.';
  //     //           }
  //     //           return requests;
  //     //         }
  //     //         // Check if
  //     //         const ifBlockCtx = statementCtx.ifBlock();
  //     //         if (ifBlockCtx) {
  //     //           this.checkIfBlockOld(ifBlockCtx, requestObjectCallback);
  //     //         }
  //     //       }
  //     //     }
  //     //   );
  //     // }
  //     return 0;
  // }
  // enterOnRun(ctx) {
  //     // Could be anything. Tell, function call, if statement...
  //     // Well we start by going through the statement list.
  //     for (let statementCtx of ctx.statementList().statement()) {
  //         // check if tell
  //         const tellCtx = statementCtx.tell();
  //         if (tellCtx) {
  //             this.requests += this.checkTell(tellCtx);
  //         }
  //         // Function call
  //         const functionCallCtx = statementCtx.functionCall();
  //         // Reusable code here. If you keep reusing this thing, make a function. Make your life easier.
  //         if (functionCallCtx) {
  //             this.requests += this.checkFunctionCall(functionCallCtx, (statementCtx) => {
  //                 const tellCtx = statementCtx.tell();
  //                 if (tellCtx) {
  //                     return this.checkTell(tellCtx);
  //                 }
  //             });
  //         }
  //         // if statement
  //         const ifBlockCtx = statementCtx.ifBlock();
  //         if (ifBlockCtx) {
  //             this.requests += this.checkIfBlockOld(ifBlockCtx, (statementCtx) => {
  //                 const tellCtx = statementCtx.tell();
  //                 if (tellCtx) {
  //                     return this.checkTell(tellCtx);
  //                 }
  //             });
  //         }
  //     }
  // }
  // enterFunctionCall(ctx) {
  //     // Don't worry about past. Just write it as if it's for the first time.
  //     // So first step is checking the parent nodes to see if we're in some kind of statement
  //     // Account for when we're keystroke returning from inside tell process "Google Chrome"
  //     // Could go to top level and check the function declaration from there, or store keystroke returns when reading function declaration. Latter is probably less resources.
  //     this.requests += this.checkFunctionCall(ctx, (statementCtx) => {
  //         const tellCtx = statementCtx.tell();
  //         if (tellCtx) {
  //             return this.checkTell(tellCtx);
  //         }
  //     });
  // }
  // checkIfStatementOld(ctx, requestObjectCallback) {
  //     let ifRequests = 0;
  //     const statementArray = ctx.statement();
  //     for (let statementCtx of statementArray) {
  //         const functionCallCtx = statementCtx.functionCall();
  //         if (functionCallCtx) {
  //             ifRequests += this.checkFunctionCall(functionCallCtx, requestObjectCallback);
  //         }
  //         const ifBlockCtx = statementCtx.ifBlock();
  //         if (ifBlockCtx) {
  //             this.checkIfBlockOld(ifBlockCtx, requestObjectCallback);
  //         }
  //     }
  //     return ifRequests;
  // }
  // enterIfBlock(ctx) {
  //     this.requests = this.checkIfBlockOld(ctx, (statementCtx) => {
  //         const tellCtx = statementCtx.tell();
  //         if (tellCtx) {
  //             return this.checkTell(tellCtx);
  //         }
  //     });
  // }
  // checkIfRequestsOld(ctx, maxIfRequests, requestObjectCallback) {
  //     const elseIfRequests = this.checkIfStatementOld(ctx, requestObjectCallback);
  //     if (elseIfRequests > maxIfRequests) {
  //         maxIfRequests = elseIfRequests;
  //     }
  //     return maxIfRequests;
  // }
  // checkIfBlockOld(ctx, requestObjectCallback) {
  //     let maxIfRequests = this.checkIfStatementOld(ctx.ifStatement().statementList(), requestObjectCallback);
  //     const elseIfArray = ctx.elseIf();
  //     if (elseIfArray) {
  //         for (let elseIfCtx of elseIfArray) {
  //             maxIfRequests = this.checkIfRequestsOld(elseIfCtx.ifStatement().statementList(), maxIfRequests, requestObjectCallback);
  //         }
  //     }
  //     // Will need to handle elseStatements differently
  //     const elseStatementCtx = ctx.elseStatement();
  //     if (elseStatementCtx) {
  //         maxIfRequests = this.checkIfRequestsOld(elseStatementCtx.statementList(), maxIfRequests, requestObjectCallback);
  //     }
  //     return maxIfRequests;
  // }
  // checkIfStatement(ctx) {
  //     let requests = 0;
  //     let keystrokes = 0;
  //     ctx.statement().forEach((statementCtx) => {
  //         var _a, _b, _c;
  //         if (((_b = (_a = statementCtx.keystroke()) === null || _a === void 0 ? void 0 : _a.expression()) === null || _b === void 0 ? void 0 : _b.getText()) === 'return') {
  //             keystrokes++;
  //         }
  //         else if (((_c = statementCtx.set()) === null || _c === void 0 ? void 0 : _c.operation().value(0).getText()) === 'URL') {
  //             requests++;
  //         }
  //         else if (statementCtx.openLocation()) {
  //             requests++;
  //         }
  //         const functionCallCtx = statementCtx.functionCall();
  //         if (functionCallCtx) {
  //             // handle functionCall
  //             const funcName = functionCallCtx.IDENTIFIER().getText();
  //             const func = this.functions[funcName];
  //             requests += func.requests;
  //             keystrokes += func.keystrokes;
  //         }
  //     });
  //     return [requests, keystrokes];
  // }
  // checkElseRequests(ctx, ifStatementProps) {
  //     const elseProps = this.checkIfStatement(ctx);
  //     for (let i in elseProps) {
  //         if (elseProps[i] > ifStatementProps[i]) {
  //             ifStatementProps[i] = elseProps[i];
  //         }
  //     }
  //     return ifStatementProps;
  // }
  // checkElse(ctx, ifStatementProps) {
  //     if (ctx instanceof ASGrammarParser_1.ElseStatementContext) {
  //         ifStatementProps = this.checkElseRequests(ctx.statementList(), ifStatementProps);
  //     }
  //     else {
  //         ifStatementProps = this.checkElseRequests(ctx.ifStatement().statementList(), ifStatementProps);
  //     }
  //     return ifStatementProps;
  // }
  // checkParentCtx(ctx, callback, genes) {
  //     // making the result a ParserRuleContext because a request inside a loop is very different than a function call in a loop
  //     // Speaking of which, encountering a loop might be tricky. If it's a function call we're looking at we can probably just take the return, save it to variable and feed it back to this function by calling it again.
  //     // Other than recursive calls, there's only 4 inputs that are going to be fed into this: set URL, keystroke return, open location and functionCall.
  //     const parentCtx = ctx.parentCtx;
  //     if (parentCtx instanceof ASGrammarParser_1.ProgramContext) {
  //         return genes;
  //     }
  //     if (parentCtx instanceof ASGrammarParser_1.LoopStatementContext) {
  //         // Most calls, when receiving a LoopStatementContext object, will simply throw an error, with the exception of the initial context being a FunctionCallContext object, in which further testing would have to be done.
  //         return parentCtx;
  //     }
  //     if (parentCtx instanceof ASGrammarParser_1.IfBlockContext) {
  //         const elseIfArray = parentCtx.elseIf();
  //         // count keystrokes/requests in ifStatement
  //         if (ctx instanceof ASGrammarParser_1.IfStatementContext) {
  //             // Handle various parts of the ifBlock (if, elseIf, else)
  //             let ifStatementProps = this.checkIfStatement(ctx.statementList());
  //             // elseIf
  //             if (elseIfArray) {
  //                 elseIfArray.forEach((elseIfCtx) => {
  //                     ifStatementProps = this.checkElse(elseIfCtx, ifStatementProps);
  //                 });
  //             }
  //             // else
  //             const elseStatementCtx = parentCtx.elseStatement();
  //             if (elseStatementCtx) {
  //                 ifStatementProps = this.checkElse(elseStatementCtx, ifStatementProps);
  //             }
  //         }
  //         // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
  //         else {
  //             if (this.checkIfStatement(parentCtx.ifStatement().statementList()).every((element) => element === 0)) {
  //                 if (elseIfArray) {
  //                     elseIfArray.forEach((elseIfCtx) => {
  //                         // if (elseIfCtx.start.startIndex === ctx.start.startIndex && elseIfCtx.stop.stopIndex)
  //                     });
  //                 }
  //             }
  //         }
  //     }
  // }
  // // Tell context
  // // Logic for function declarations
  // enterFunctionDeclaration(ctx) {
  //     // Again, don't worry about the stuff below. Code as if there was nothing.
  //     // first check parent nodes
  //     // Record function in function property
  //     const funcName = ctx.IDENTIFIER(0).text;
  //     const funcBody = ctx.functionBody().statementList();
  //     const requestObjectCallback = (statementCtx) => {
  //         const tellCtx = statementCtx.tell();
  //         if (tellCtx) {
  //             return this.checkTell(tellCtx);
  //         }
  //         else {
  //             // We're not returning anything here. Only thing we can do is manipulate state.
  //         }
  //     };
  //     let requests = 0;
  //     this.checkStatements(funcBody, (statementCtx) => {
  //         // First add each request to the requests
  //         const requestCtx = requestObjectCallback(statementCtx);
  //         if (Array.isArray(requestCtx)) {
  //             for (let s of requestCtx) {
  //                 requests++;
  //             }
  //         }
  //         const recursiveCallCtx = statementCtx.functionCall();
  //         if (requests > 0) {
  //             if (recursiveCallCtx) {
  //                 if (recursiveCallCtx.IDENTIFIER().text === funcName) {
  //                     this.error = 'Request detected in recursive function.';
  //                 }
  //             }
  //             // Check if
  //         }
  //         const ifBlockCtx = statementCtx.ifBlock();
  //         if (ifBlockCtx) {
  //             requests += this.checkIfBlockOld(ifBlockCtx, requestObjectCallback);
  //         }
  //         if (recursiveCallCtx) {
  //             requests +=
  //                 this.functions[recursiveCallCtx.IDENTIFIER().getText()].requests;
  //         }
  //     });
  //     this.requests += requests;
  // }
  enterIfBlock(ctx) {
    if (
      ctx.ifStatement().expression().getText() === 'templateUsed=templateName'
    ) {
      console.log(
        ctx.parentCtx.ifBlock().start.startIndex
      );
      console.log(ctx.start.startIndex)
      console.log(ctx.parentCtx.ifBlock().stop.stopIndex)
      console.log(ctx.stop.stopIndex)
    }
  }
}
exports.default = checkRequestListener;
