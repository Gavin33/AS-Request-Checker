'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const ASGrammarListener = require('./ASGrammarListener.js').default;
class checkRequestListener extends ASGrammarListener {
  constructor(requests = 0, functions = {}, knownFunctions = [], error) {
    super();
    this.requests = requests;
    this.error = error;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
  }
  enterIfStatement(ctx) {
    console.log(ctx.expression().getText())
  }
}
exports.default = checkRequestListener;
