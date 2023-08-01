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
var ASGrammarParser = require('./ASGrammarParser');
var ASGrammarListener = require('./ASGrammarListener.js')["default"];
var checkRequestListener = /*#__PURE__*/function (_ASGrammarListener) {
  _inherits(checkRequestListener, _ASGrammarListener);
  var _super = _createSuper(checkRequestListener);
  function checkRequestListener() {
    var _this;
    var requests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var functions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var knownFunctions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var error = arguments.length > 3 ? arguments[3] : undefined;
    _classCallCheck(this, checkRequestListener);
    _this = _super.call(this);
    _this.requests = requests;
    _this.error = error;
    _this.functions = functions;
    _this.knownFunctions = knownFunctions;
    return _this;
  }
  // Logic for tell block
  _createClass(checkRequestListener, [{
    key: "enterFunctionDeclaration",
    value: function enterFunctionDeclaration(ctx) {
      this.knownFunctions.push(ctx.IDENTIFIER(0).getText());
    }
  }, {
    key: "checkStatements",
    value: function checkStatements(ctx, callback) {
      // Loop through ctx
      var statementArray = ctx.statement();
      ctx.statement().forEach(function (statementCtx) {
        return callback(statementCtx);
      });
    }
  }, {
    key: "checkTell",
    value: function checkTell(ctx) {
      var _this2 = this;
      // This logic holds as far as I can see. Check some of the method calls.
      //
      var requests = 0;
      // Is this for an app?
      var tellAppCtx = ctx.tellApp();
      if (tellAppCtx) {
        var tellArgCtx = tellAppCtx.tellArg();
        // Is it for process Google Chrome?
        if (tellAppCtx.appType().text === 'process' && tellAppCtx.STRING().text === 'Google Chrome') {
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
        if (tellAppCtx.appType().text === 'application') {
          // Specifically looking for setting the URL.
          this.checkToStatement(tellArgCtx, function (statementCtx) {
            // Check if URL
            if (_this2.checkUrl(statementCtx)) {
              requests++;
            }
          });
          // We're looking for open locations and set URL's
          var _statementListCtx = tellArgCtx.statementList();
          if (_statementListCtx) {
            requests += this.checkRequests(_statementListCtx, function (statementCtx) {
              return _this2.checkUrl(statementCtx);
            });
          }
          // to my knowledge there isn't such a thing as a tellApp inside a tellId.
        }
      }

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
    key: "checkMakeNew",
    value: function checkMakeNew(ctx) {
      // Also need to return callback with context object
      var makeNewCtx = ctx.makeNew();
      if (makeNewCtx) {
        var recordCtx = makeNewCtx.record();
        if (recordCtx) {
          var variableArray = recordCtx.variable();
          var _iterator = _createForOfIteratorHelper(variableArray),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var variableCtx = _step.value;
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
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }
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
    key: "checkRequests",
    value: function checkRequests(ctx, requestObjectCallback) {
      var _this4 = this;
      // Doesn't make sense. If a function call is in an if block, wouldn't it just add to this.request instead of maxIfRequests?
      // Handle cases where this.reqests would normally be incremented.
      var requests = 0;
      ctx.statement().forEach(function (statementCtx) {
        // find all requests in statementList
        var requestCtx = requestObjectCallback(statementCtx);
        if (Array.isArray(requestCtx)) {
          var _iterator2 = _createForOfIteratorHelper(requestCtx),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var s = _step2.value;
              requests++;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        } else if (requestCtx) {
          requests++;
        }
        // Loops
        // Will throw an error if it finds any requests.
        _this4.checkLoop(statementCtx, requestObjectCallback);
        // Function calls
        var functionCallCtx = statementCtx.functionCall();
        if (functionCallCtx) {
          _this4.checkFunctionCall(functionCallCtx, function (func) {
            requests += func.requests + func.keystrokes;
          });
        }
        // if blocks
        var ifBlockCtx = statementCtx.ifBlock();
        if (ifBlockCtx) {
          requests += _this4.checkTellIfBlock(ifBlockCtx, requestObjectCallback);
        }
      });
      return requests;
    }
    // checkToStatement
  }, {
    key: "checkToStatement",
    value: function checkToStatement(ctx, callback) {
      var toStatementCtx = ctx.toStatement();
      if (toStatementCtx) {
        var statementCtx = toStatementCtx.statement();
        return callback(statementCtx);
        /* const requestCtx = callback(statementCtx)
          if (requestCtx){
          requests++;}
        }
        return requests; */
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
      var _this5 = this;
      this.checkStatements(ctx, function (statementCtx) {
        var error = function error() {
          _this5.error = 'Request detected in loop.';
        };
        // Check for keystrokes
        if (callback(statementCtx)) {
          error();
        }
        // Check for more loops
        _this5.checkLoop(statementCtx, callback);
        // Check for a function
        // Passing an error object directly to checkFunctionCall may have unintended side effects (false negatives). Instead check if return is truthy.
        var functionCallCtx = statementCtx.functionCall();
        if (functionCallCtx) {
          // If it exists, it has a non-zero amount of requests
          _this5.checkFunctionCall(functionCallCtx, function () {
            error();
          });
        }
        // Check for if statement
        var ifBlockCtx = statementCtx.ifBlock();
        if (ifBlockCtx) {
          _this5.checkTellIfBlock(ifBlockCtx, function () {
            error();
          });
        }
      });
    }
  }, {
    key: "checkTellIfStatement",
    value: function checkTellIfStatement(ctx, requestObjectCallback) {
      var ifRequests = 0;
      var statementArray = ctx.statement();
      var _iterator3 = _createForOfIteratorHelper(statementArray),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var statementCtx = _step3.value;
          var functionCallCtx = statementCtx.functionCall();
          if (functionCallCtx) {
            this.checkFunctionCall(functionCallCtx, function (func) {
              ifRequests += func.requests + func.keystrokes;
            });
          }
          var ifBlockCtx = statementCtx.ifBlock();
          if (ifBlockCtx) {
            this.checkTellIfBlock(ifBlockCtx, requestObjectCallback);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return ifRequests;
    }
  }, {
    key: "checkTellIfRequests",
    value: function checkTellIfRequests(ctx, maxIfRequests, requestObjectCallback) {
      var elseIfRequests = this.checkTellIfStatement(ctx, requestObjectCallback);
      if (elseIfRequests > maxIfRequests) {
        maxIfRequests = elseIfRequests;
      }
      return maxIfRequests;
    }
  }, {
    key: "checkTellIfBlock",
    value: function checkTellIfBlock(ctx, requestObjectCallback) {
      var maxIfRequests = this.checkTellIfStatement(ctx.ifStatement().statementList(), requestObjectCallback);
      var elseIfArray = ctx.elseIf();
      if (elseIfArray) {
        var _iterator4 = _createForOfIteratorHelper(elseIfArray),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var elseIfCtx = _step4.value;
            maxIfRequests = this.checkTellIfRequests(elseIfCtx.ifStatement().statementList(), maxIfRequests, requestObjectCallback);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
      // Will need to handle elseStatements differently
      var elseStatementCtx = ctx.elseStatement();
      if (elseStatementCtx) {
        maxIfRequests = this.checkTellIfRequests(elseStatementCtx.statementList(), maxIfRequests, requestObjectCallback);
      }
      return maxIfRequests;
    }
  }, {
    key: "checkFunctionCall",
    value: function checkFunctionCall(ctx, callback) {
      var funcName = ctx.IDENTIFIER().getText();
      if (!this.knownFunctions.includes(funcName)) {
        this.error = "This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.";
        return;
      }
      var func = this.functions[funcName];
      if (func) {
        callback(func);
      }
    }
  }, {
    key: "checkIfStatement",
    value: function checkIfStatement(ctx, start) {
      var _a, _b, _c;
      var requests = 0;
      var keystrokes = 0;
      var _iterator5 = _createForOfIteratorHelper(ctx.statement()),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var statementCtx = _step5.value;
          if (((_b = (_a = statementCtx.keystroke()) === null || _a === void 0 ? void 0 : _a.expression()) === null || _b === void 0 ? void 0 : _b.getText()) === 'return') {
            keystrokes++;
          } else if (((_c = statementCtx.set()) === null || _c === void 0 ? void 0 : _c.operation().value(0).getText()) === 'URL') {
            requests++;
          } else if (statementCtx.openLocation()) {
            requests++;
          }
          var functionCallCtx = statementCtx.functionCall();
          if (functionCallCtx) {
            this.checkFunctionCall(functionCallCtx, function (func) {
              requests += func.requests;
              keystrokes += func.keystrokes;
            });
          }
          var ifBlockCtx = statementCtx.ifBlock();
          if (ifBlockCtx) {
            var count = this.checkIfBlock(ifBlockCtx);
            requests += count[0];
            keystrokes += count[1];
          }
          // handle statements. Specifically errorHandlers, tells
          var tellCtx = statementCtx.tell();
          if (tellCtx) {
            this.checkTell(tellCtx);
          }
          var errorHandlerCtx = statementCtx.errorHandler();
          if (errorHandlerCtx) {
            this.checkErrorHandler(errorHandlerCtx);
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
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
      return [requests, keystrokes];
    }
  }, {
    key: "checkElseRequests",
    value: function checkElseRequests(ctx, props, start) {
      // If multiple requests in else(if), will check each and every one of them in that particular else(if). And then ignore them. Potential performance loss. But still correct behavior. Also if there are so many requests in a single else(if) statement that the performance loss is noticable, you probably have bigger problems than this code.
      var elseProps = this.checkIfStatement(ctx, start);
      for (var i in elseProps) {
        if (elseProps[i] > props[i]) {
          props[i] = elseProps[i];
        }
      }
      return props;
    }
  }, {
    key: "checkElse",
    value: function checkElse(ctx, props, start) {
      if (ctx.constructor.name === 'ElseStatementContext') {
        var elseStatementCtx = ctx;
        props = this.checkElseRequests(elseStatementCtx.statementList(), props, start);
      } else {
        var elseIfCtx = ctx;
        props = this.checkElseRequests(elseIfCtx.ifStatement().statementList(), props, start);
      }
      return props;
    }
  }, {
    key: "checkIfBlock",
    value: function checkIfBlock(ifBlockCtx, start, ctx) {
      var _this6 = this;
      var _a, _b;
      var elseIfArray = ifBlockCtx.elseIf();
      // count keystrokes/requests in ifStatement
      var count = [0, 0];
      // calced is if I've already calculated keystrokes/requests for this ifBlock.
      var calced = false;
      if ((ctx === null || ctx === void 0 ? void 0 : ctx.constructor.name) === 'IfStatementContext' || !ctx) {
        // Handle various parts of the ifBlock (if, elseIf, else)
        count = this.checkIfStatement(ifBlockCtx.ifStatement().statementList(), start);
        // Only way this method can be triggered is if this is a request, keystroke or function call with a request or keystroke from inside an ifStatement. If both are 0, only reason is if this is a dup. No need to analyze further.
        if (count.every(function (element) {
          return !element;
        })) {
          return [0, 0];
        }
        // elseIf
        if (elseIfArray) {
          elseIfArray.forEach(function (elseIfCtx) {
            count = _this6.checkElse(elseIfCtx, count, start);
          });
        }
        // else
        var elseStatementCtx = ifBlockCtx.elseStatement();
        if (elseStatementCtx) {
          count = this.checkElse(elseStatementCtx, count, start);
        }
      }
      // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
      else {
        if (this.checkIfStatement(ifBlockCtx.ifStatement().statementList(), start).every(function (element) {
          return !element;
        })) {
          var afterCtx = false;
          if (elseIfArray) {
            var _iterator6 = _createForOfIteratorHelper(elseIfArray),
              _step6;
            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var elseIfCtx = _step6.value;
                if (elseIfCtx.start.start === ctx.start.start && ((_a = elseIfCtx.stop) === null || _a === void 0 ? void 0 : _a.stop) === ((_b = ctx.stop) === null || _b === void 0 ? void 0 : _b.stop)) {
                  afterCtx = true;
                } else {
                  count = this.checkElse(elseIfCtx, count);
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
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }
          }
          if (!calced) {
            var _elseStatementCtx = ctx;
            count = this.checkElse(_elseStatementCtx, count);
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
      var _this7 = this;
      // access function info
      this.checkFunctionCall(ctx, function (func) {
        if (func) {
          var dna = {
            requests: func.requests,
            keystrokes: func.keystrokes,
            inTell: false,
            start: ctx.start.start
          };
          _this7.checkParentCtx(ctx, dna);
        }
      });
    }
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
            this.error = 'request detected inside loop';
            return;
          }
        case 'IfBlockContext':
          {
            var ifBlockCtx = parentCtx;
            var ifStatementCtx = ctx;
            var count = this.checkIfBlock(ifBlockCtx, genes.start, ifStatementCtx);
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
            // Something bad is happening in oz
            var errorHandlerCtx = parentCtx;
            var errorHandlerChildCtx = ctx;
            var _this$checkErrorHandl = this.checkErrorHandler(errorHandlerCtx, errorHandlerChildCtx, genes.start),
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
  }, {
    key: "checkErrorHandler",
    value: function checkErrorHandler(parentCtx, ctx, start) {
      var _a, _b;
      // Can be handled like a conditional without the option for elseIf
      // Also have to account for more than one request.
      var tryStatementListCtx = parentCtx.statementList(0);
      if (tryStatementListCtx.start.start === (ctx === null || ctx === void 0 ? void 0 : ctx.start.start) && ((_a = tryStatementListCtx.stop) === null || _a === void 0 ? void 0 : _a.stop) === ((_b = ctx === null || ctx === void 0 ? void 0 : ctx.stop) === null || _b === void 0 ? void 0 : _b.stop) || !ctx) {
        var _this$checkIfStatemen = this.checkIfStatement(tryStatementListCtx, start),
          _this$checkIfStatemen2 = _slicedToArray(_this$checkIfStatemen, 2),
          requests = _this$checkIfStatemen2[0],
          keystrokes = _this$checkIfStatemen2[1];
        var errorStatementListCtx = parentCtx.statementList(1);
        if (errorStatementListCtx) {
          var count = this.checkIfStatement(errorStatementListCtx, start);
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
  return checkRequestListener;
}(ASGrammarListener);
exports["default"] = checkRequestListener;