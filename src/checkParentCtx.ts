import { checkRequestInTell } from "./checkRequestInTell";

class checkParentCtx extends checkRequestInTell {
    requests: number
    constructor(requests: number = 0) {
        super()
        this.requests = requests
    }
}


/* (ctx: ParserRuleContext, genes: Genes) {
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
        const ifBlockCtx = parentCtx as IfBlockContext;
        const ifStatementCtx = ctx as
          | IfStatementContext
          | ElseIfContext
          | ElseStatementContext;
        const count = this.checkIfBlock(
          ifBlockCtx,
          this.checkTell.bind(this),
          genes.start,
          ifStatementCtx,
          true
        );
        if (count) {
          if (count.every((element) => element === 0)) {
            return;
          }
          genes.requests = count[0];
          genes.keystrokes = count[1];
          break;
        }
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
        const errorHandlerCtx = parentCtx as ErrorHandlerContext;
        const errorRequests = this.checkErrorHandler(
          errorHandlerCtx,
          this.checkTell.bind(this),
          genes.start,
          true
        );
        if (errorRequests) {
          genes.requests += errorRequests[0];
          genes.keystrokes += errorRequests[1];
        }
      }
    }
    if (genes.inTell) {
      genes.requests += genes.keystrokes;
    }
    this.checkParentCtx(parentCtx, genes);
  } */