"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
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
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkRequestInTell = void 0;
var checkRequestInIfStatement_1 = __importDefault(require("./checkRequestInIfStatement"));
var checkRequestListener_1 = require("./checkRequestListener");
// Thought of the day. What if there's more than one request in a tell block? Would we get expected behavior, or did we just forget about that whole thing?
var checkRequestInTell = /*#__PURE__*/function (_checkRequestInIfStat) {
  _inherits(checkRequestInTell, _checkRequestInIfStat);
  var _super = _createSuper(checkRequestInTell);
  function checkRequestInTell() {
    _classCallCheck(this, checkRequestInTell);
    return _super.call(this);
  }
  _createClass(checkRequestInTell, [{
    key: "checkTell",
    value: function checkTell(ctx) {
      var _this = this;
      var requests = 0;
      // Is this for an app?
      var tellAppCtx = ctx.tellApp();
      if (tellAppCtx) {
        var tellArgCtx = tellAppCtx.tellArg();
        // Is it for process Google Chrome?
        if (tellAppCtx.appType().getText() === 'process' && tellAppCtx.STRING().getText() === 'Google Chrome') {
          // Is it just one statement (toStatement)?
          if (this.checkToStatement(tellArgCtx, function (statementCtx) {
            return statementCtx.keystroke();
          })) {
            requests++;
          }
          // And if not?
          var statementListCtx = tellArgCtx.statementList();
          if (statementListCtx) {
            requests += this.checkRequests(statementListCtx, function (statementCtx) {
              return statementCtx.keystroke();
            });
          }
        }
        if (tellAppCtx.appType().getText() === 'application') {
          // Specifically looking for setting the URL.
          this.checkToStatement(tellArgCtx, function (statementCtx) {
            // Check if URL
            if (_this.checkUrl(statementCtx)) {
              requests++;
            }
          });
          // We're looking for open locations and set URL's
          var _statementListCtx = tellArgCtx.statementList();
          if (_statementListCtx) {
            requests += this.checkRequests(_statementListCtx, function (statementCtx) {
              return _this.checkUrl(statementCtx);
            });
          }
          // to my knowledge there isn't such a thing as a tellApp inside a tellId.
        }
      }

      return requests;
    }
  }, {
    key: "checkToStatement",
    value: function checkToStatement(ctx, callback) {
      var toStatementCtx = ctx.toStatement();
      if (toStatementCtx) {
        var statementCtx = toStatementCtx.statement();
        return callback(statementCtx);
      }
    }
  }, {
    key: "checkRequests",
    value: function checkRequests(ctx, requestObjectCallback) {
      var _this2 = this;
      // Handle cases where this.reqests would normally be incremented.
      var requests = 0;
      ctx.statement().forEach(function (statementCtx) {
        // find all requests in statementList
        var requestCtx = requestObjectCallback(statementCtx);
        if (Array.isArray(requestCtx)) {
          var _iterator = _createForOfIteratorHelper(requestCtx),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var s = _step.value;
              requests++;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else if (requestCtx) {
          requests++;
        }
        // Loops
        // Will throw an error if it finds any requests.
        _this2.checkLoop(statementCtx, requestObjectCallback);
        // Function calls
        var functionCallCtx = statementCtx.functionCall();
        if (functionCallCtx) {
          (0, checkRequestListener_1.checkFunctionCall)(functionCallCtx, function (func) {
            requests += func.requests + func.keystrokes;
          }, _this2.functions, _this2.knownFunctions);
        }
        // if blocks
        var ifBlockCtx = statementCtx.ifBlock();
        if (ifBlockCtx) {
          _this2.checkIfBlock(ifBlockCtx, _this2.checkTell.bind(_this2)).forEach(function (request) {
            return requests += request;
          });
        }
      });
      return requests;
    }
  }, {
    key: "checkUrl",
    value: function checkUrl(ctx) {
      var _this3 = this;
      var tellCtx = ctx.tell();
      if (tellCtx) {
        var tellIdCtx = tellCtx.tellId();
        // check to statement
        if (tellIdCtx) {
          // We'd need to get to the statements
          var tellArgCtx = tellIdCtx.tellArg();
          var toStatementCtx = this.checkToStatement(tellArgCtx, function (statementCtx) {
            return _this3.checkSet(statementCtx);
          });
          if (toStatementCtx) {
            return toStatementCtx;
          }
          var statementListCtx = tellArgCtx.statementList();
          if (statementListCtx) {
            return statementListCtx.statement();
          }
        }
      }
      var setCtx = this.checkSet(ctx);
      if (setCtx) {
        return setCtx;
      }
      var makeNewCtx = ctx.makeNew();
      if (makeNewCtx) {
        return this.checkMakeNew(ctx);
      }
      return ctx.openLocation();
    }
  }, {
    key: "checkSet",
    value: function checkSet(ctx) {
      var setCtx = ctx.set();
      if (setCtx) {
        // set URL or makeNew to be exact. checkStatements expects a callback function. Something that returns some form of the context object. It will take this, and for each item, it'll add one to this.requests.
        var variableCtx = setCtx.operation().value(0).variable();
        if (variableCtx) {
          var IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
          if ((IDENTIFIERCtx === null || IDENTIFIERCtx === void 0 ? void 0 : IDENTIFIERCtx.getText()) === 'URL') {
            return IDENTIFIERCtx;
          }
          var propertyCtx = variableCtx.property(0).IDENTIFIER();
          if ((propertyCtx === null || propertyCtx === void 0 ? void 0 : propertyCtx.getText()) === 'URL') {
            return propertyCtx;
          }
        }
        var expressionCtx = setCtx.expression();
        var operationCtx = expressionCtx.operation();
        if (operationCtx) {
          var valueArray = operationCtx.value();
          for (var v in valueArray) {
            var valueCtx = valueArray[v];
            var makeNewCtx = this.checkMakeNew(valueCtx);
            if (makeNewCtx) {
              return makeNewCtx;
            }
          }
        }
      }
    }
  }, {
    key: "checkMakeNew",
    value: function checkMakeNew(ctx) {
      // Also need to return callback with context object
      var makeNewCtx = ctx.makeNew();
      if (makeNewCtx) {
        var recordCtx = makeNewCtx.record();
        if (recordCtx) {
          var variableArray = recordCtx.variable();
          var _iterator2 = _createForOfIteratorHelper(variableArray),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var variableCtx = _step2.value;
              var IDENTIFIERCtx = variableCtx.IDENTIFIER(0);
              if ((IDENTIFIERCtx === null || IDENTIFIERCtx === void 0 ? void 0 : IDENTIFIERCtx.getText()) === 'URL') {
                return IDENTIFIERCtx;
              }
              var propertyCtx = variableCtx.property(0).IDENTIFIER();
              if ((propertyCtx === null || propertyCtx === void 0 ? void 0 : propertyCtx.getText()) === 'URL') {
                return propertyCtx;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    }
  }, {
    key: "checkLoop",
    value: function checkLoop(ctx, callback) {
      // Loops don't return requests. They throw errors if they detect anything.
      var loopStatementCtx = ctx.loopStatement();
      if (loopStatementCtx) {
        var repeatLoopCtx = loopStatementCtx.repeatLoop();
        if (repeatLoopCtx) {
          this.checkLoopStatements(repeatLoopCtx.statementList(), callback);
        }
        var whileLoopCtx = loopStatementCtx.whileLoop();
        if (whileLoopCtx) {
          this.checkLoopStatements(whileLoopCtx.statementList(), callback);
        }
      }
    }
  }, {
    key: "checkLoopStatements",
    value: function checkLoopStatements(ctx, callback) {
      var _this4 = this;
      ctx.statement().forEach(function (statementCtx) {
        var error = function error() {
          throw new Error('Request detected in loop.');
        };
        // Check for keystrokes
        if (callback(statementCtx)) {
          error();
        }
        // Check for more loops
        _this4.checkLoop(statementCtx, callback);
        // Check for a function
        // Passing an error object directly to checkFunctionCall may have unintended side effects (false negatives). Instead check if return is truthy.
        var functionCallCtx = statementCtx.functionCall();
        if (functionCallCtx) {
          // If it exists, it has a non-zero amount of requests
          (0, checkRequestListener_1.checkFunctionCall)(functionCallCtx, function () {
            error();
          }, _this4.functions, _this4.knownFunctions);
        }
        // Check for if statement
        var ifBlockCtx = statementCtx.ifBlock();
        if (ifBlockCtx) {
          if (_this4.checkIfBlock(ifBlockCtx, _this4.checkTell.bind(_this4)).every(function (element) {
            return element;
          })) {
            error();
          }
        }
      });
    }
  }]);
  return checkRequestInTell;
}(checkRequestInIfStatement_1["default"]);
exports.checkRequestInTell = checkRequestInTell;