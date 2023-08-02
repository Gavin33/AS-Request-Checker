"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkFunctionCall = void 0;
var checkRequestInTell_1 = require("./checkRequestInTell");
// checkFunctionCall function
var checkFunctionCall = function checkFunctionCall(ctx, callback, functions, knownFunctions) {
  var funcName = ctx.IDENTIFIER().getText();
  if (!knownFunctions.includes(funcName)) {
    throw new Error('This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.');
    // In all honesty, this "feature" would likely never make it into the final release, so I decided to have a little fun with this one :)
  }

  var func = functions[funcName];
  if (func) {
    callback(func);
  }
};
exports.checkFunctionCall = checkFunctionCall;
var checkRequestListener = /*#__PURE__*/function (_checkRequestInTell_) {
  _inherits(checkRequestListener, _checkRequestInTell_);
  var _super = _createSuper(checkRequestListener);
  function checkRequestListener() {
    var _this;
    var requests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _classCallCheck(this, checkRequestListener);
    _this = _super.call(this);
    _this.requests = requests;
    return _this;
  }
  // check function call method
  _createClass(checkRequestListener, [{
    key: "checkFunctionCall",
    value: function checkFunctionCall(ctx, callback) {
      (0, exports.checkFunctionCall)(ctx, callback, this.functions, this.knownFunctions);
    }
    // Check parent
  }, {
    key: "checkParentCtx",
    value: function checkParentCtx(ctx, genes) {
      // Other than recursive calls, there's only 4 inputs that are going to be fed into this: set URL, keystroke return, open location and functionCall.
      var parentCtx = ctx.parentCtx;
      switch (parentCtx.constructor.name) {
        case 'ProgramContext':
          {
            this.requests += genes.requests;
            return;
          }
        case 'LoopStatementContext':
          {
            // why would we be checking a functionCall unless it had a request in it? just throw the error
            throw new Error('Request detected inside loop');
          }
        case 'IfBlockContext':
          {
            var ifBlockCtx = parentCtx;
            var ifStatementCtx = ctx;
            var count = this.checkIfBlock(ifBlockCtx, this.checkTell, genes.start, ifStatementCtx);
            if (count.every(function (element) {
              return element === 0;
            })) {
              return;
            }
            genes.requests = count[0];
            genes.keystrokes = count[1];
            break;
          }
        case 'tellApp':
          {
            var tellAppCtx = parentCtx;
            if (tellAppCtx.appType().getText() === 'process' && tellAppCtx.STRING().getText() === 'Google Chrome') {
              genes.inTell = true;
            }
            break;
          }
        case 'FunctionDeclarationContext':
          {
            // add the current requests and keystrokes to the count for the declaration. If there are more requests they'll also be calced and added to the count for the declaration.
            var functionDeclarationCtx = parentCtx;
            var funcName = functionDeclarationCtx.IDENTIFIER(0).getText();
            if (!(funcName in this.functions)) {
              this.functions[funcName] = {
                requests: 0,
                keystrokes: 0
              };
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
        case 'ErrorHandlerContext':
          {
            var errorHandlerCtx = parentCtx;
            var errorHandlerChildCtx = ctx;
            var _this$checkErrorHandl = this.checkErrorHandler(errorHandlerCtx, this.checkTell, errorHandlerChildCtx, genes.start),
              _this$checkErrorHandl2 = _slicedToArray(_this$checkErrorHandl, 2),
              requests = _this$checkErrorHandl2[0],
              keystrokes = _this$checkErrorHandl2[1];
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
  }, {
    key: "enterFunctionDeclaration",
    value: function enterFunctionDeclaration(ctx) {
      this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
    }
  }, {
    key: "enterKeystroke",
    value: function enterKeystroke(ctx) {
      var _a;
      if (((_a = ctx.expression()) === null || _a === void 0 ? void 0 : _a.getText()) === 'return') {
        var dna = {
          requests: 0,
          keystrokes: 1,
          inTell: false,
          start: ctx.start.start
        };
        this.checkParentCtx(ctx, dna);
      }
    }
  }, {
    key: "enterSet",
    value: function enterSet(ctx) {
      if (ctx.operation().value(0).getText() === 'URL') {
        var dna = {
          requests: 1,
          keystrokes: 0,
          inTell: false,
          start: ctx.start.start
        };
        this.checkParentCtx(ctx, dna);
      }
    }
  }, {
    key: "enterOpenLocation",
    value: function enterOpenLocation(ctx) {
      // The only one that's 100% a request no matter what. Unless it's a syntax error of course.
      var dna = {
        requests: 1,
        keystrokes: 0,
        inTell: false,
        start: ctx.start.start
      };
      this.checkParentCtx(ctx, dna);
    }
  }, {
    key: "enterFunctionCall",
    value: function enterFunctionCall(ctx) {
      var _this2 = this;
      // access function info
      this.checkFunctionCall(ctx, function (func) {
        if (func) {
          var dna = {
            requests: func.requests,
            keystrokes: func.keystrokes,
            inTell: false,
            start: ctx.start.start
          };
          _this2.checkParentCtx(ctx, dna);
        }
      });
    }
  }]);
  return checkRequestListener;
}(checkRequestInTell_1.checkRequestInTell);
exports["default"] = checkRequestListener;