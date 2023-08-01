import { ParserRuleContext } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { ASGrammarListener } from './ASGrammarListener';
import {
  FunctionCallContext,
  IfBlockContext,
  OpenLocationContext,
  StatementContext,
  StatementListContext,
  TellArgContext,
  TellContext,
  ValueContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
  FunctionDeclarationContext,
  TellAppContext,
  SetContext,
  ErrorHandlerContext,
  KeystrokeContext,
} from './ASGrammarParser';

// Note: there are going to be a huge number of type errors on this file on your side most likely. antlr4ts is still in alpha, so there are quite a few errors. Main issues that come up are some misnamed properties/methods on some of the classes. I don't want to purposely use the wrong syntax just to make ts happy, so I made a few bug fixes to antlr4ts on my end instead.

// Also note antlr4ts generates ASGrammarListener as an interface, which is less than ideal to say the least. You have to extend the proper antlr4 subclass each time you transpile.

// Also since we're not extending a subclass, we can't call super without getting an error, so I just stuck it in as a comment.

// If I ever do anything else with this listener, I think first step is creating a subclass that just handles tell blocks. File is too cluttered.

// Possible feature improvement(s): calculate if blocks, recursive functions and loops instead of just throwing an error. Add variable support to functions arguments, loop expressions and if blocks. Add support for calling handlers before they're defined (which is valid AppleScript syntax believe it or not).

type ContextCallback = (
  ctx: StatementContext
) => ParserRuleContext | TerminalNode | undefined;
type ArrayCallback = (
  ctx: StatementContext
) => ParserRuleContext[] | TerminalNode[] | undefined;
type VoidCallback = (ctx: StatementContext) => void;
type FunctionCallback = (functionProperties: functionProperties) => void;
type Callback = ContextCallback | ArrayCallback | VoidCallback;
// Keystrokes cannot be generated from an enter method alone. Has to be logged as part of some kind of block (functionDeclaration, errorHandler, ifBlock, etc.)
interface functionProperties {
  requests: number;
  keystrokes: number;
}
// I could call it ParentProps, but that's just a fancy way of saying genes.
interface Genes {
  requests: number;
  keystrokes: number;
  inTell: boolean;
  start: number;
}

class checkRequestListener implements ASGrammarListener {
  // extends ASGrammarListener
  requests: number;
  error?: string;
  functions: { [key: string]: functionProperties };
  knownFunctions: string[];

  constructor(
    requests: number = 0,
    functions: { [key: string]: functionProperties } = {},
    knownFunctions: string[] = [],
    error?: string
  ) {
    // super()
    this.requests = requests;
    this.error = error;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
  }

  // Logic for tell block
  enterFunctionDeclaration(ctx: FunctionDeclarationContext) {
    this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
  }
  checkStatements(ctx: StatementListContext, callback: Callback) {
    // Loop through ctx
    const statementArray = ctx.statement();
    ctx.statement().forEach((statementCtx: StatementContext) => {
      return callback(statementCtx);
    });
  }
  checkTell(ctx: TellContext) {
    let requests = 0;
    // Is this for an app?
    const tellAppCtx = ctx.tellApp();
    if (tellAppCtx) {
      const tellArgCtx = tellAppCtx.tellArg();
      // Is it for process Google Chrome?
      if (
        tellAppCtx.appType().text === 'process' &&
        tellAppCtx.STRING().text === 'Google Chrome'
      ) {
        // Is it just one statement (toStatement)?
        if (
          this.checkToStatement(
            tellArgCtx,
            (statementCtx: StatementContext) => {
              return statementCtx.keystroke();
            }
          )
        ) {
          requests++;
        }
        // And if not?
        const statementListCtx = tellArgCtx.statementList();
        if (statementListCtx) {
          requests += this.checkRequests(
            statementListCtx,
            (statementCtx: StatementContext) => {
              return statementCtx.keystroke();
            }
          );
        }
      }
      if (tellAppCtx.appType().text === 'application') {
        // Specifically looking for setting the URL.
        this.checkToStatement(tellArgCtx, (statementCtx: StatementContext) => {
          // Check if URL
          if (this.checkUrl(statementCtx)) {
            requests++;
          }
        });
        // We're looking for open locations and set URL's
        const statementListCtx = tellArgCtx.statementList();
        if (statementListCtx) {
          requests += this.checkRequests(
            statementListCtx,
            (statementCtx: StatementContext) => {
              return this.checkUrl(statementCtx);
            }
          );
        }
        // to my knowledge there isn't such a thing as a tellApp inside a tellId.
      }
    }
    return requests;
  }

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

  checkRequests(ctx: StatementListContext, requestObjectCallback: Callback) {
    // Doesn't make sense. If a function call is in an if block, wouldn't it just add to this.request instead of maxIfRequests?
    // Handle cases where this.reqests would normally be incremented.
    let requests = 0;
    ctx.statement().forEach((statementCtx) => {
      // find all requests in statementList
      const requestCtx = requestObjectCallback(statementCtx);
      if (Array.isArray(requestCtx)) {
        for (let s of requestCtx) {
          requests++;
        }
      } else if (requestCtx) {
        requests++;
      }

      // Loops
      // Will throw an error if it finds any requests.
      this.checkLoop(statementCtx, requestObjectCallback);

      // Function calls
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        this.checkFunctionCall(functionCallCtx, (func) => {
          requests += func.requests + func.keystrokes;
        });
      }

      // if blocks
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        requests += this.checkTellIfBlock(ifBlockCtx, requestObjectCallback);
      }
    });
    return requests;
  }

  // checkToStatement
  checkToStatement(ctx: TellArgContext, callback: Callback) {
    const toStatementCtx = ctx.toStatement();
    if (toStatementCtx) {
      const statementCtx = toStatementCtx.statement();
      return callback(statementCtx);
      /* const requestCtx = callback(statementCtx)
        if (requestCtx){
        requests++;}
    }
    return requests; */
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
    this.checkStatements(ctx, (statementCtx: StatementContext) => {
      const error = () => {
        this.error = 'Request detected in loop.';
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
        this.checkTellIfBlock(ifBlockCtx, () => {
          error();
        });
      }
    });
  }

  checkTellIfStatement(
    ctx: StatementListContext,
    requestObjectCallback: Callback
  ) {
    let ifRequests = 0;
    const statementArray = ctx.statement();
    for (let statementCtx of statementArray) {
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        this.checkFunctionCall(functionCallCtx, (func) => {
          ifRequests += func.requests + func.keystrokes;
        });
      }
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        this.checkTellIfBlock(ifBlockCtx, requestObjectCallback);
      }
    }
    return ifRequests;
  }

  checkTellIfRequests(
    ctx: StatementListContext,
    maxIfRequests: number,
    requestObjectCallback: Callback
  ) {
    const elseIfRequests = this.checkTellIfStatement(
      ctx,
      requestObjectCallback
    );
    if (elseIfRequests > maxIfRequests) {
      maxIfRequests = elseIfRequests;
    }
    return maxIfRequests;
  }

  checkTellIfBlock(ctx: IfBlockContext, requestObjectCallback: Callback) {
    let maxIfRequests = this.checkTellIfStatement(
      ctx.ifStatement().statementList(),
      requestObjectCallback
    );
    const elseIfArray = ctx.elseIf();
    if (elseIfArray) {
      for (let elseIfCtx of elseIfArray) {
        maxIfRequests = this.checkTellIfRequests(
          elseIfCtx.ifStatement().statementList(),
          maxIfRequests,
          requestObjectCallback
        );
      }
    }
    // Will need to handle elseStatements differently
    const elseStatementCtx = ctx.elseStatement();
    if (elseStatementCtx) {
      maxIfRequests = this.checkTellIfRequests(
        elseStatementCtx.statementList(),
        maxIfRequests,
        requestObjectCallback
      );
    }
    return maxIfRequests;
  }

  checkFunctionCall(ctx: FunctionCallContext, callback: FunctionCallback) {
    const funcName = ctx.IDENTIFIER().getText();
    if (!(this.knownFunctions.includes(funcName))) {
      this.error = `This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.`;
      // In all honesty, this "feature" would likely never make it into the final release, so I decided to have a little fun with this one :)
      return;
    }
    const func = this.functions[funcName];
    if (func) {
      callback(func);
    }
  }

  checkIfStatement(ctx: StatementListContext, start?: number) {
    let requests = 0;
    let keystrokes = 0;
    for (let statementCtx of ctx.statement()) {
      if (statementCtx.keystroke()?.expression()?.getText() === 'return') {
        keystrokes++;
      } else if (statementCtx.set()?.operation().value(0).getText() === 'URL') {
        requests++;
      } else if (statementCtx.openLocation()) {
        requests++;
      }
      const functionCallCtx = statementCtx.functionCall();
      if (functionCallCtx) {
        this.checkFunctionCall(functionCallCtx, (func) => {
          requests += func.requests;
          keystrokes += func.keystrokes;
        });
      }
      const ifBlockCtx = statementCtx.ifBlock();
      if (ifBlockCtx) {
        const count = this.checkIfBlock(ifBlockCtx);
        requests += count[0];
        keystrokes += count[1];
      }
      // handle statements. Specifically errorHandlers, tells
      const tellCtx = statementCtx.tell();
      if (tellCtx) {
        this.checkTell(tellCtx);
      }
      const errorHandlerCtx = statementCtx.errorHandler();
      if (errorHandlerCtx) {
        this.checkErrorHandler(errorHandlerCtx);
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

  checkElseRequests(
    ctx: StatementListContext,
    props: number[],
    start?: number
  ) {
    // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
    const elseProps = this.checkIfStatement(ctx, start);
    for (let i in elseProps) {
      if (elseProps[i] > props[i]) {
        props[i] = elseProps[i];
      }
    }
    return props;
  }

  checkElse(
    ctx: ElseIfContext | ElseStatementContext,
    props: number[],
    start?: number
  ) {
    if (ctx.constructor.name === 'ElseStatementContext') {
      const elseStatementCtx = ctx as ElseStatementContext;
      props = this.checkElseRequests(
        elseStatementCtx.statementList(),
        props,
        start
      );
    } else {
      const elseIfCtx = ctx as ElseIfContext;
      props = this.checkElseRequests(
        elseIfCtx.ifStatement().statementList(),
        props,
        start
      );
    }
    return props;
  }

  checkIfBlock(
    ifBlockCtx: IfBlockContext,
    start?: number,
    ctx?: IfStatementContext | ElseIfContext | ElseStatementContext
  ) {
    const elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    let count = [0, 0];
    // calced is if I've already calculated keystrokes/requests for this ifBlock.
    let calced = false;
    if (ctx?.constructor.name === 'IfStatementContext' || !ctx) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      count = this.checkIfStatement(
        ifBlockCtx.ifStatement().statementList(),
        start
      );
      // Only way this method can be triggered is if this is a request, keystroke or function call with a request or keystroke from inside an ifStatement. If both are 0, only reason is if this is a dup. No need to analyze further.
      if (count.every((element) => !element)) {
        return [0, 0];
      }
      // elseIf
      if (elseIfArray) {
        elseIfArray.forEach((elseIfCtx) => {
          count = this.checkElse(elseIfCtx, count, start);
        });
      }
      // else
      const elseStatementCtx = ifBlockCtx.elseStatement();
      if (elseStatementCtx) {
        count = this.checkElse(elseStatementCtx, count, start);
      }
    }
    // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
    else {
      if (
        this.checkIfStatement(
          ifBlockCtx.ifStatement().statementList(),
          start
        ).every((element) => !element)
      ) {
        let afterCtx = false;
        if (elseIfArray) {
          for (let elseIfCtx of elseIfArray) {
            if (
              elseIfCtx.start.start === ctx.start.start &&
              elseIfCtx.stop?.stop === ctx.stop?.stop
            ) {
              afterCtx = true;
            } else {
              count = this.checkElse(elseIfCtx, count);
              // If there are any requests/keystrokes, and not after context, it's calced. Can stop checking.
              if (!count.every((element) => !element) && !afterCtx) {
                calced = true;
                break;
              }
            }
          }
        }
        if (!calced) {
          const elseStatementCtx = ctx as ElseStatementContext;
          count = this.checkElse(elseStatementCtx, count);
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
  enterKeystroke(ctx: KeystrokeContext) {
    if (ctx.expression()?.getText() === 'return') {
      const dna: Genes = {
        requests: 0,
        keystrokes: 1,
        inTell: false,
        start: ctx.start.start,
      };
      this.checkParentCtx(ctx, dna);
    }
  }

  enterSet(ctx: SetContext) {
    if (ctx.operation().value(0).getText() === 'URL') {
      const dna: Genes = {
        requests: 1,
        keystrokes: 0,
        inTell: false,
        start: ctx.start.start,
      };
      this.checkParentCtx(ctx, dna);
    }
  }

  enterOpenLocation(ctx: OpenLocationContext) {
    // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
    const dna: Genes = {
      requests: 1,
      keystrokes: 0,
      inTell: false,
      start: ctx.start.start,
    };
    this.checkParentCtx(ctx, dna);
  }

  enterFunctionCall(ctx: FunctionCallContext) {
    // access function info
    this.checkFunctionCall(ctx, (func) => {
      if (func) {
        const dna: Genes = {
          requests: func.requests,
          keystrokes: func.keystrokes,
          inTell: false,
          start: ctx.start.start,
        };
        this.checkParentCtx(ctx, dna);
      }
    });
  }

  checkParentCtx(ctx: ParserRuleContext, genes: Genes) {
    // Other than recursive calls, there's only 4 inputs that are going to be fed into this: set URL, keystroke return, open location and functionCall.
    const parentCtx = ctx.parentCtx;
    switch (parentCtx.constructor.name) {
      case 'ProgramContext': {
        this.requests += genes.requests;
        return;
      }
      case 'LoopStatementContext': {
        // why would we be checking a functionCall unless it had a request in it? just throw the error
        this.error = 'request detected inside loop';
        return;
      }
      case 'IfBlockContext': {
        const ifBlockCtx = parentCtx as IfBlockContext;
        const ifStatementCtx = ctx as
          | IfStatementContext
          | ElseIfContext
          | ElseStatementContext;
        const count = this.checkIfBlock(
          ifBlockCtx,
          genes.start,
          ifStatementCtx
        );
        if (count.every((element) => element === 0)) {
          return;
        }
        genes.requests = count[0];
        genes.keystrokes = count[1];
        break;
      }
      case 'tellApp': {
        const tellAppCtx = parentCtx as TellAppContext;
        if (
          tellAppCtx.appType().getText() === 'process' &&
          tellAppCtx.STRING().getText() === 'Google Chrome'
        ) {
          genes.inTell = true;
        }
        break;
      }
      case 'FunctionDeclarationContext': {
        // add the current requests and keystrokes to the count for the declaration. If there are more requests they'll also be calced and added to the count for the declaration.
        const functionDeclarationCtx = parentCtx as FunctionDeclarationContext;
        const funcName = functionDeclarationCtx.IDENTIFIER(0).getText();
        if (!(funcName in this.functions)) {
          this.functions[funcName] = { requests: 0, keystrokes: 0 };
        }
        this.functions[funcName].requests += genes.requests;
        if (genes.inTell) {
          this.functions[funcName].requests += genes.keystrokes;
        } else {
          this.functions[funcName].keystrokes += genes.keystrokes;
        }
        // According to AS syntax, function declarations are always at the top level. So only thing above this is statement => program. Safe to return here.
        return;
      }
      case 'ErrorHandlerContext': {
        // Something bad is happening in oz
        const errorHandlerCtx = parentCtx as ErrorHandlerContext;
        const errorHandlerChildCtx = ctx as StatementListContext;
        const [requests, keystrokes] = this.checkErrorHandler(
          errorHandlerCtx,
          errorHandlerChildCtx,
          genes.start
        );
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

  checkErrorHandler(
    parentCtx: ErrorHandlerContext,
    ctx?: StatementListContext,
    start?: number
  ) {
    // Can be handled like a conditional without the option for elseIf
    // Also have to account for more than one request.
    const tryStatementListCtx = parentCtx.statementList(0);
    if (
      (tryStatementListCtx.start.start === ctx?.start.start &&
        tryStatementListCtx.stop?.stop === ctx?.stop?.stop) ||
      !ctx
    ) {
      let [requests, keystrokes] = this.checkIfStatement(
        tryStatementListCtx,
        start
      );
      const errorStatementListCtx = parentCtx.statementList(1);
      if (errorStatementListCtx) {
        const count = this.checkIfStatement(errorStatementListCtx, start);
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

export default checkRequestListener;
