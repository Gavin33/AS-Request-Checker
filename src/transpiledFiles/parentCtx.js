"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkBlock_1 = __importDefault(require("./checkBlock"));
var checkRequestInIfStatement_1 = __importDefault(require("./checkRequestInIfStatement"));
var parentCtx = /*#__PURE__*/function () {
  function parentCtx(keystrokes, inTell, start, ctx, functions, knownFunctions) {
    var requests = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
    _classCallCheck(this, parentCtx);
    this.requests = requests;
    this.keystrokes = keystrokes;
    this.inTell = inTell;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
    this.checkParentCtx(ctx, start);
  }
  _createClass(parentCtx, [{
    key: "checkParentCtx",
    value: function checkParentCtx(ctx, start) {
      // Other than recursive calls, there's only 4 inputs that are going to be fed into this: set URL, keystroke return, open location and functionCall.
      var _parentCtx = ctx.parentCtx;
      switch (_parentCtx.constructor.name) {
        case 'ProgramContext':
          {
            return;
          }
        case 'LoopStatementContext':
          {
            // why would we be checking a functionCall unless it had a request in it? just throw the error
            throw new Error('Request detected inside loop');
          }
        case 'IfBlockContext':
          {
            var ifBlockCtx = _parentCtx;
            var ifStatementCtx = ctx;
            var ifBlockRequests = new checkRequestInIfStatement_1["default"]({
              requests: this.requests,
              keystrokes: this.keystrokes,
              start: start,
              first: true,
              functions: this.functions,
              knownFunctions: this.knownFunctions,
              dup: false
            }, ifBlockCtx, ifStatementCtx);
            if (ifBlockRequests.dup) {
              this.requests = 0;
              return;
            }
            this.requests = ifBlockRequests.requests;
            this.keystrokes = ifBlockRequests.keystrokes;
            break;
          }
        case 'tellApp':
          {
            var tellAppCtx = _parentCtx;
            if (tellAppCtx.appType().getText() === 'process' && tellAppCtx.STRING().getText() === 'Google Chrome') {
              this.inTell = true;
            }
            break;
          }
        case 'FunctionDeclarationContext':
          {
            // add the current requests and keystrokes to the count for the declaration. If there are more requests they'll also be calced and added to the count for the declaration.
            var functionDeclarationCtx = _parentCtx;
            var funcName = functionDeclarationCtx.IDENTIFIER(0).getText();
            if (!(funcName in this.functions)) {
              this.functions[funcName] = {
                requests: 0,
                keystrokes: 0
              };
            }
            this.functions[funcName].requests += this.requests;
            if (this.inTell) {
              this.functions[funcName].requests += this.keystrokes;
            } else {
              this.functions[funcName].keystrokes += this.keystrokes;
            }
            // According to AS syntax, function declarations are always at the top level. So only thing above this is statement => program. Safe to return here.
            return;
          }
        case 'ErrorHandlerContext':
          {
            var errorHandlerCtx = _parentCtx;
            var errorHandlerChildCtx = ctx;
            // check error handler
            var errorRequests = new checkBlock_1["default"]({
              requests: this.requests,
              keystrokes: this.keystrokes,
              start: start,
              first: true,
              functions: this.functions,
              knownFunctions: this.knownFunctions,
              dup: false
            });
            this.requests = errorRequests.requests;
            this.keystrokes = errorRequests.keystrokes;
          }
      }
      if (this.inTell) {
        this.requests += this.keystrokes;
        this.keystrokes = 0;
      }
      this.checkParentCtx(_parentCtx, start);
    }
  }]);
  return parentCtx;
}();
exports["default"] = parentCtx;