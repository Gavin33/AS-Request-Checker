"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkBlock_1 = __importDefault(require("./checkBlock"));
var parentCtx_1 = __importDefault(require("./parentCtx"));
var _require = require('./ASGrammarListener'),
  ASGrammarListener = _require["default"];
// checkFunctionCall function
var checkRequestListener = /*#__PURE__*/function (_ASGrammarListener) {
  _inherits(checkRequestListener, _ASGrammarListener);
  var _super = _createSuper(checkRequestListener);
  function checkRequestListener() {
    var _this;
    var requests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var functions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var knownFunctions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    _classCallCheck(this, checkRequestListener);
    _this = _super.call(this);
    _this.requests = requests;
    _this.functions = functions;
    _this.knownFunctions = knownFunctions;
    return _this;
  }
  // enter methods
  _createClass(checkRequestListener, [{
    key: "enterFunctionDeclaration",
    value: function enterFunctionDeclaration(ctx) {
      this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
    }
  }, {
    key: "enterKeystroke",
    value: function enterKeystroke(ctx) {
      var _a;
      if (((_a = ctx.expression()) === null || _a === void 0 ? void 0 : _a.getText()) === 'return') {
        var parentCtxRequests = new parentCtx_1["default"](1, false, ctx.start.start, ctx, this.functions, this.knownFunctions);
        this.requests += parentCtxRequests.requests;
        this.functions = parentCtxRequests.functions;
      }
    }
  }, {
    key: "enterSet",
    value: function enterSet(ctx) {
      if (ctx.operation().value(0).getText() === 'URL') {
        var parentCtxRequests = new parentCtx_1["default"](0, false, ctx.start.start, ctx, this.functions, this.knownFunctions, 1);
        this.requests += parentCtxRequests.requests;
        this.functions = parentCtxRequests.functions;
      }
    }
  }, {
    key: "enterOpenLocation",
    value: function enterOpenLocation(ctx) {
      // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
      var parentCtxRequests = new parentCtx_1["default"](0, false, ctx.start.start, ctx, this.functions, this.knownFunctions, 1);
      this.requests += parentCtxRequests.requests;
      this.functions = parentCtxRequests.functions;
    }
  }, {
    key: "enterFunctionCall",
    value: function enterFunctionCall(ctx) {
      var _this2 = this;
      // access function info
      new checkBlock_1["default"]({
        functions: this.functions,
        knownFunctions: this.knownFunctions,
        start: false,
        first: false,
        requests: 0,
        keystrokes: 0,
        dup: false
      }).checkFunctionCall(ctx, function (func) {
        var parentCtxRequests = new parentCtx_1["default"](func.keystrokes, false, ctx.start.start, ctx, _this2.functions, _this2.knownFunctions, func.requests);
        _this2.requests += parentCtxRequests.requests;
        _this2.functions = parentCtxRequests.functions;
      });
    }
  }]);
  return checkRequestListener;
}(ASGrammarListener);
exports["default"] = checkRequestListener;