'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
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
Object.defineProperty(exports, '__esModule', {
  value: true
});
var checkRequestListener_1 = require('./checkRequestListener');
var _require = require('./ASGrammarListener'),
  ASGrammarListener = _require["default"];
var checkRequestInIfStatement = /*#__PURE__*/function (_ASGrammarListener) {
  _inherits(checkRequestInIfStatement, _ASGrammarListener);
  var _super = _createSuper(checkRequestInIfStatement);
  function checkRequestInIfStatement() {
    var _this;
    var knownFunctions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var functions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, checkRequestInIfStatement);
    _this = _super.call(this);
    _this.knownFunctions = knownFunctions;
    _this.functions = functions;
    return _this;
  }
  _createClass(checkRequestInIfStatement, [{
    key: "checkIfStatement",
    value: function checkIfStatement(ctx, tellCallback, start) {
      var _a, _b, _c;
      var requests = 0;
      var keystrokes = 0;
      var _iterator = _createForOfIteratorHelper(ctx.statement()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var statementCtx = _step.value;
          if (((_b = (_a = statementCtx.keystroke()) === null || _a === void 0 ? void 0 : _a.expression()) === null || _b === void 0 ? void 0 : _b.getText()) === 'return') {
            keystrokes++;
          } else if (((_c = statementCtx.set()) === null || _c === void 0 ? void 0 : _c.operation().value(0).getText()) === 'URL') {
            requests++;
          } else if (statementCtx.openLocation()) {
            requests++;
          }
          var functionCallCtx = statementCtx.functionCall();
          if (functionCallCtx) {
            (0, checkRequestListener_1.checkFunctionCall)(functionCallCtx, function (func) {
              requests += func.requests;
              keystrokes += func.keystrokes;
            }, this.functions, this.knownFunctions);
          }
          var ifBlockCtx = statementCtx.ifBlock();
          if (ifBlockCtx) {
            var count = this.checkIfBlock(ifBlockCtx, tellCallback.bind(this));
            requests += count[0];
            keystrokes += count[1];
          }
          // handle statements. Specifically errorHandlers, tells
          var tellCtx = statementCtx.tell();
          if (tellCtx) {
            requests += tellCallback(tellCtx);
          }
          var errorHandlerCtx = statementCtx.errorHandler();
          if (errorHandlerCtx) {
            var _count = this.checkErrorHandler(errorHandlerCtx, tellCallback.bind(this));
            requests += _count[0];
            keystrokes += _count[1];
          }
          if (start && (requests || keystrokes)) {
            // Prevent two requests from the same if block from being counted twice
            if (start > statementCtx.start.start) {
              // if there were requests in the ifStatement it wouldn't reach the else code.
              return [0, 0];
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return [requests, keystrokes];
    }
  }, {
    key: "checkElseRequests",
    value: function checkElseRequests(ctx, tellCallback, props, start) {
      // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
      var elseProps = this.checkIfStatement(ctx, tellCallback.bind(this), start);
      for (var i in elseProps) {
        if (elseProps[i] > props[i]) {
          props[i] = elseProps[i];
        }
      }
      return props;
    }
  }, {
    key: "checkElse",
    value: function checkElse(ctx, tellCallback, props, start) {
      if (ctx.constructor.name === 'ElseStatementContext') {
        var elseStatementCtx = ctx;
        props = this.checkElseRequests(elseStatementCtx.statementList(), tellCallback.bind(this), props, start);
      } else {
        var elseIfCtx = ctx;
        props = this.checkElseRequests(elseIfCtx.ifStatement().statementList(), tellCallback.bind(this), props, start);
      }
      return props;
    }
  }, {
    key: "checkIfBlock",
    value: function checkIfBlock(ifBlockCtx, tellCallback, start, ctx) {
      var _this2 = this;
      var _a, _b;
      var elseIfArray = ifBlockCtx.elseIf();
      // count keystrokes/requests in ifStatement
      var count = [0, 0];
      // calced is if I've already calculated keystrokes/requests for this ifBlock.
      var calced = false;
      if ((ctx === null || ctx === void 0 ? void 0 : ctx.constructor.name) === 'IfStatementContext' || !ctx) {
        // Handle various parts of the ifBlock (if, elseIf, else)
        count = this.checkIfStatement(ifBlockCtx.ifStatement().statementList(), tellCallback.bind(this), start);
        // Only way this method can be triggered is if this is a request, keystroke or function call with a request or keystroke from inside an ifStatement. If both are 0, only reason is if this is a dup. No need to analyze further.
        if (count.every(function (element) {
          return !element;
        })) {
          return [0, 0];
        }
        // elseIf
        if (elseIfArray) {
          elseIfArray.forEach(function (elseIfCtx) {
            count = _this2.checkElse(elseIfCtx, tellCallback.bind(_this2), count, start);
          });
        }
        // else
        var elseStatementCtx = ifBlockCtx.elseStatement();
        if (elseStatementCtx) {
          count = this.checkElse(elseStatementCtx, tellCallback.bind(this), count, start);
        }
      }
      // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
      else {
        if (this.checkIfStatement(ifBlockCtx.ifStatement().statementList(), tellCallback.bind(this), start).every(function (element) {
          return !element;
        })) {
          var afterCtx = false;
          if (elseIfArray) {
            var _iterator2 = _createForOfIteratorHelper(elseIfArray),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var elseIfCtx = _step2.value;
                if (elseIfCtx.start.start === ctx.start.start && ((_a = elseIfCtx.stop) === null || _a === void 0 ? void 0 : _a.stop) === ((_b = ctx.stop) === null || _b === void 0 ? void 0 : _b.stop)) {
                  afterCtx = true;
                } else {
                  count = this.checkElse(elseIfCtx, tellCallback.bind(this), count);
                  // If there are any requests/keystrokes, and not after context, it's calced. Can stop checking.
                  if (!count.every(function (element) {
                    return !element;
                  }) && !afterCtx) {
                    calced = true;
                    break;
                  }
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (!calced) {
            var _elseStatementCtx = ctx;
            count = this.checkElse(_elseStatementCtx, tellCallback.bind(this), count);
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
  }, {
    key: "checkErrorHandler",
    value: function checkErrorHandler(parentCtx, tellCallback, ctx, start) {
      var _a, _b;
      // Can be handled like a conditional without the option for elseIf
      // Also have to account for more than one request.
      var tryStatementListCtx = parentCtx.statementList(0);
      if (tryStatementListCtx.start.start === (ctx === null || ctx === void 0 ? void 0 : ctx.start.start) && ((_a = tryStatementListCtx.stop) === null || _a === void 0 ? void 0 : _a.stop) === ((_b = ctx === null || ctx === void 0 ? void 0 : ctx.stop) === null || _b === void 0 ? void 0 : _b.stop) || !ctx) {
        var _this$checkIfStatemen = this.checkIfStatement(tryStatementListCtx, tellCallback.bind(this), start),
          _this$checkIfStatemen2 = _slicedToArray(_this$checkIfStatemen, 2),
          requests = _this$checkIfStatemen2[0],
          keystrokes = _this$checkIfStatemen2[1];
        var errorStatementListCtx = parentCtx.statementList(1);
        if (errorStatementListCtx) {
          var count = this.checkIfStatement(tryStatementListCtx, tellCallback.bind(this), start);
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
  }]);
  return checkRequestInIfStatement;
}(ASGrammarListener);
exports["default"] = checkRequestInIfStatement;