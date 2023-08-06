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
var checkBlock_1 = __importDefault(require("./checkBlock"));
var checkRequestInIfStatement_1 = __importDefault(require("./checkRequestInIfStatement"));
// Thought of the day. What if there's more than one request in a tell block? Would we get expected behavior, or did we just forget about that whole thing?
// Only accessable through if block checks.
// So far we only check dups per statement of an if block. If it's a tell block or error handler, it would just see that the block starts before the request and say "ok". We need to check start of statements inside these blocks.
// Also no error handling for miles.
var checkRequestInTell = /*#__PURE__*/function (_checkBlock_1$default) {
  _inherits(checkRequestInTell, _checkBlock_1$default);
  var _super = _createSuper(checkRequestInTell);
  function checkRequestInTell(options, ctx) {
    var _this;
    _classCallCheck(this, checkRequestInTell);
    _this = _super.call(this, options);
    _this.ctx = ctx;
    // Is this for an app?
    var tellAppCtx = ctx.tellApp();
    if (tellAppCtx) {
      var tellArgCtx = tellAppCtx.tellArg();
      var statementListCtx = tellArgCtx.statementList();
      // Is it for process Google Chrome?
      if (tellAppCtx.appType().getText() === 'process' && tellAppCtx.STRING().getText() === 'Google Chrome') {
        // Is it just one statement (toStatement)?
        // check to see if there's a request.
        if (_this.checkToStatement(tellArgCtx, function (statementCtx) {
          var keystrokeCtx = statementCtx.keystroke();
          _this.checkStart(keystrokeCtx, true);
          return keystrokeCtx;
        })) {
          _this.first = false;
          _this.requests++;
        }
        // And if not?
        else if (statementListCtx) {
          // update check requests to set state.
          _this.checkRequests(statementListCtx, function (statementCtx) {
            var keystrokeCtx = statementCtx.keystroke();
            if (keystrokeCtx) {
              _this.checkStart(keystrokeCtx, !!keystrokeCtx);
              _this.first = false;
              _this.requests++;
            }
          });
        }
      }
      if (tellAppCtx.appType().getText() === 'application') {
        // Specifically looking for setting the URL.
        _this.checkToStatement(tellArgCtx, function (statementCtx) {
          // Check if URL
          if (_this.checkUrl(statementCtx)) {
            {
              _this.checkStart(statementCtx, true);
              _this.requests++;
            }
          }
        });
        // We're looking for open locations and set URL's
        var _statementListCtx = tellArgCtx.statementList();
        if (_statementListCtx) {
          _this.checkRequests(_statementListCtx, function (statementCtx) {
            if (_this.checkUrl(statementCtx)) {
              _this.requests++;
              _this.checkStart(statementCtx, true);
              _this.first = false;
            }
          });
        }
        // to my knowledge there isn't such a thing as a tellApp inside a tellId.
      }
    }
    return _this;
  }
  _createClass(checkRequestInTell, [{
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
    value: function checkRequests(ctx, requestObjectCallback, start, first) {
      var _this2 = this;
      // Handle cases where this.reqests would normally be incremented.
      var _iterator = _createForOfIteratorHelper(ctx.statement()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var statementCtx = _step.value;
          requestObjectCallback(statementCtx);
          // Loops
          // Will throw an error if it finds any requests.
          this.checkLoop(statementCtx, requestObjectCallback);
          // Function calls
          var functionCallCtx = statementCtx.functionCall();
          if (functionCallCtx) {
            this.checkFunctionCall(functionCallCtx, function (func) {
              _this2.requests += func.requests + func.keystrokes;
            });
          }
          // if blocks
          var ifBlockCtx = statementCtx.ifBlock();
          if (ifBlockCtx) {
            var ifBlockRequests = new checkRequestInIfStatement_1["default"](Object.assign({}, this), ifBlockCtx, false);
            this.updateProps(ifBlockRequests);
          }
          var errorHandlerCtx = statementCtx.errorHandler();
          if (errorHandlerCtx) {
            this.checkErrorHandler(errorHandlerCtx);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    // From here on, going to avoid optionals when refactoring and explicitly requiring me to type "false". Leads to less mistakes.
  }, {
    key: "checkUrl",
    value: function checkUrl(ctx, start, first) {
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
            return this.checkRequests(statementListCtx, function (statementCtx) {
              var URLRequests = _this3.checkUrl(statementCtx, start, first);
              if (_this3.checkStart(statementCtx, !!URLRequests, [0, 0], start, first)) {
                start = false;
                return statementCtx;
              }
            }, start, first);
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
          _this4.checkFunctionCall(functionCallCtx, function () {
            error();
          });
        }
        // Check for if statement
        var ifBlockCtx = statementCtx.ifBlock();
        if (ifBlockCtx) {
          var ifBlockRequests = new checkRequestInIfStatement_1["default"]({
            functions: _this4.functions,
            knownFunctions: _this4.knownFunctions,
            start: false,
            first: false,
            requests: 0,
            keystrokes: 0,
            dup: false
          }, ifBlockCtx, false);
          if (ifBlockRequests.requests || ifBlockRequests.keystrokes) {
            error();
          }
        }
      });
    }
  }]);
  return checkRequestInTell;
}(checkBlock_1["default"]);
exports.checkRequestInTell = checkRequestInTell;