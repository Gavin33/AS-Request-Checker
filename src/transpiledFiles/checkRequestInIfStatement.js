"use strict";

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
Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkRequestListener_1 = require("./checkRequestListener");
var ASGrammarListener = require('./ASGrammarListener')['default'];
// check other functions to see where requests are being logged. Make sure first is updated where appropriate.
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
    key: "checkStart",
    value: function checkStart(ctx, areRequests, count, start, first) {
      // If you just want to check if the context is found, just pass true to areRequests. Have to check if ctx is truthy anyway.
      // Problem. If we don't stop code execusion, there will be at least one extra request logged. More if we're dealing with a function call with multiple requests. Find a way to stop execution.
      // check to see if there's a request.
      if (first) {
        if (areRequests && start && ctx) {
          // If so, start. If it's original, then continue with the code. If not, stop it.
          if (start > ctx.start.start) {
            // Definitely return something that's NOT returning a 0, 0 array. Will also need to prevent the check after first successful execution.
            console.log('test');
            return false;
          }
        }
      }
      return count;
    }
  }, {
    key: "checkIfStatement",
    value: function checkIfStatement(ctx, tellCallback, start, first) {
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
            first = false;
          } else if (((_c = statementCtx.set()) === null || _c === void 0 ? void 0 : _c.operation().value(0).getText()) === 'URL') {
            requests++;
            first = false;
          } else if (statementCtx.openLocation()) {
            requests++;
            first = false;
          }
          // function calls are single statements. Can be processed like any other request in terms of checking dups.
          var functionCallCtx = statementCtx.functionCall();
          if (functionCallCtx) {
            (0, checkRequestListener_1.checkFunctionCall)(functionCallCtx, function (func) {
              if (func.requests || func.keystrokes) {
                first = false;
                requests += func.requests;
                keystrokes += func.keystrokes;
              }
            }, this.functions, this.knownFunctions);
          }
          var ifBlockCtx = statementCtx.ifBlock();
          var tellCtx = statementCtx.tell();
          var errorHandlerCtx = statementCtx.errorHandler();
          if (ifBlockCtx) {
            var count = this.checkIfBlock(ifBlockCtx, tellCallback.bind(this), false, false, first);
            if (count) {
              // check if 0, 0 and set first to false
              requests += count[0];
              keystrokes += count[1];
            } else {
              return false;
            }
          }
          // handle statements. Specifically errorHandlers, tells
          else if (tellCtx) {
            var tellRequests = tellCallback(tellCtx, start, first);
            // Not as simple as checking if it's falsy. Must be explicit.
            if (tellRequests !== false) {
              requests += tellRequests;
              first = false;
            } else {
              return false;
            }
          } else if (errorHandlerCtx) {
            var _count = this.checkErrorHandler(errorHandlerCtx, tellCallback.bind(this), false, first);
            if (_count) {
              if (_count.every(function (element) {
                return !element;
              })) {
                requests += _count[0];
                keystrokes += _count[1];
                first = false;
              }
            } else {
              return false;
            }
          } else if (first) {
            var _count2 = this.checkStart(statementCtx, !!(requests || keystrokes), [requests, keystrokes], start, first);
            // if this isn't a repeat.
            if (_count2) {
              var _count3 = _slicedToArray(_count2, 2);
              requests = _count3[0];
              keystrokes = _count3[1];
              first = false;
            } else {
              return false;
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
    value: function checkElseRequests(ctx, tellCallback, props, start, first) {
      // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
      var elseProps = this.checkIfStatement(ctx, tellCallback.bind(this), start, first);
      if (elseProps) {
        for (var i in elseProps) {
          if (elseProps[i] > props[i]) {
            props[i] = elseProps[i];
          }
        }
        return props;
      }
    }
  }, {
    key: "checkFalse",
    value: function checkFalse(count) {
      // set to count
      if (count) {
        return count;
      } else {
        return false;
      }
    }
  }, {
    key: "checkElse",
    value: function checkElse(ctx, tellCallback, props, start, first) {
      var elseRequests;
      if (props) {
        if (ctx.constructor.name === 'ElseStatementContext') {
          var elseStatementCtx = ctx;
          elseRequests = this.checkElseRequests(elseStatementCtx.statementList(), tellCallback.bind(this), props, start, first);
        } else {
          var elseIfCtx = ctx;
          elseRequests = this.checkElseRequests(elseIfCtx.ifStatement().statementList(), tellCallback.bind(this), props, start, first);
        }
      }
      return this.checkFalse(elseRequests);
    }
  }, {
    key: "checkIfBlock",
    value: function checkIfBlock(ifBlockCtx, tellCallback, start, ctx, first) {
      var _this2 = this;
      var elseIfArray = ifBlockCtx.elseIf();
      // count keystrokes/requests in ifStatement
      var count = [0, 0];
      if ((ctx === null || ctx === void 0 ? void 0 : ctx.constructor.name) === 'IfStatementContext' || !ctx) {
        // Handle various parts of the ifBlock (if, elseIf, else)
        count = this.checkIfStatement(ifBlockCtx.ifStatement().statementList(), tellCallback.bind(this), start, first);
        if (count) {
          // elseIf
          if (elseIfArray) {
            elseIfArray.forEach(function (elseIfCtx) {
              count = _this2.checkElse(elseIfCtx, tellCallback.bind(_this2), count, start, false);
            });
          }
          // else
          var elseStatementCtx = ifBlockCtx.elseStatement();
          if (elseStatementCtx) {
            count = this.checkElse(elseStatementCtx, tellCallback.bind(this), count, start, false);
          }
        }
      }
      // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
      else {
        var ifRequests = this.checkIfStatement(ifBlockCtx.ifStatement().statementList(), tellCallback.bind(this), start, first);
        if (ifRequests) {
          if (elseIfArray) {
            var _iterator2 = _createForOfIteratorHelper(elseIfArray),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var elseIfCtx = _step2.value;
                count = this.checkElse(elseIfCtx, tellCallback.bind(this), count, false, first);
                // If there are any requests/keystrokes, and not after context, it's calced. Can stop checking.
                if (!count) {
                  return count;
                }
                if (!count.every(function (element) {
                  !element;
                })) {
                  first = false;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          var _elseStatementCtx = ctx;
          count = this.checkElse(_elseStatementCtx, tellCallback.bind(this), count, false, first);
        }
      }
      return count;
    }
  }, {
    key: "checkErrorHandler",
    value: function checkErrorHandler(parentCtx, tellCallback, start, first) {
      // Possible that part of the try block could execute then throw an error. Treating them as non-mutually exclusive.
      // Also have to account for more than one request.
      var tryStatementListCtx = parentCtx.statementList(0);
      var tryCount = [0, 0];
      tryCount = this.checkIfStatement(tryStatementListCtx, tellCallback.bind(this), start, first);
      if (tryCount) {
        if (!tryCount.every(function (element) {
          return !element;
        })) {
          first = false;
        }
        var errorStatementListCtx = parentCtx.statementList(1);
        if (errorStatementListCtx) {
          var count = this.checkIfStatement(tryStatementListCtx, tellCallback.bind(this), start, first);
          if (count) {
            tryCount[0] += count[0];
            tryCount[1] += count[1];
          } else {
            return count;
          }
        }
      }
      return tryCount;
    }
  }]);
  return checkRequestInIfStatement;
}(ASGrammarListener);
exports["default"] = checkRequestInIfStatement;