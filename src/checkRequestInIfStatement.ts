import {
  IfBlockContext,
  ElseIfContext,
  ElseStatementContext,
  IfStatementContext,
} from './ASGrammarParser';
import CheckBlock, { checkBlockOptions } from './checkBlock';

// check other functions to see where requests are being logged. Make sure first is updated where appropriate.

export default class checkRequestInIfStatement extends CheckBlock {
  constructor(
    options: checkBlockOptions,
    ifBlockCtx: IfBlockContext,
    ctx: IfStatementContext | ElseIfContext | ElseStatementContext | false
  ) {
    super(options);
    const elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    if (ctx?.constructor.name === 'IfStatementContext' || !ctx) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      this.checkStatement(ifBlockCtx.ifStatement().statementList());
      // elseIf
      if (elseIfArray) {
        elseIfArray.forEach((elseIfCtx) => {
          this.checkElse(elseIfCtx);
        });
      }
      // else
      const elseStatementCtx = ifBlockCtx.elseStatement();
      if (elseStatementCtx) {
        this.checkElse(elseStatementCtx);
      }
    }
    // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
    else {
      this.checkStatement(ifBlockCtx.ifStatement().statementList());
      if (elseIfArray) {
        for (let elseIfCtx of elseIfArray) {
          this.checkElse(elseIfCtx);
        }
      }
      const elseStatementCtx = ctx as ElseStatementContext;
      this.checkElse(elseStatementCtx);
    }
  }

  checkElse(ctx: ElseIfContext | ElseStatementContext) {
    if (ctx.constructor.name === 'ElseStatementContext') {
      const elseStatementCtx = ctx as ElseStatementContext;
      this.checkStatement(elseStatementCtx.statementList());
    } else {
      const elseIfCtx = ctx as ElseIfContext;
      this.checkStatement(elseIfCtx.ifStatement().statementList());
    }
  }
}
