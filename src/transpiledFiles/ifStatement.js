"use strict";

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckBlock = void 0;
// checkBlock
var CheckBlock = /*#__PURE__*/function () {
  function CheckBlock(options) {
    _classCallCheck(this, CheckBlock);
    // Destructure the options object to access individual properties
    var requests = options.requests,
      keystrokes = options.keystrokes,
      start = options.start,
      first = options.first,
      functions = options.functions,
      knownFunctions = options.knownFunctions,
      dup = options.dup,
      callback = options.callback;
    this.requests = requests;
    this.keystrokes = keystrokes;
    this.start = start;
    this.first = first;
    this.functions = functions;
    this.knownFunctions = knownFunctions;
    this.dup = dup;
    this.callback = callback;
  }
  _createClass(CheckBlock, [{
    key: "createNewBlockProps",
    value: function createNewBlockProps() {
      return {
        functions: this.functions,
        knownFunctions: this.knownFunctions,
        start: this.start,
        first: this.first,
        requests: this.requests,
        keystrokes: this.keystrokes,
        dup: this.dup,
        callback: this.callback
      };
    }
  }, {
    key: "checkFunctionCall",
    value: function checkFunctionCall(ctx, callback) {
      var funcName = ctx.IDENTIFIER().getText();
      if (!this.knownFunctions.includes(funcName)) {
        throw new Error('This new and improved AppleScript parser has the feature of throwing a syntax error every time you have a handler call before its declaration. I assure you, this is not a bug. Trust me bro.');
        // In all honesty, this "feature" would likely never make it into the final release, so I decided to have a little fun with this one :)
      }

      var func = this.functions[funcName];
      if (func) {
        callback(func);
      }
    }
  }, {
    key: "checkStart",
    value: function checkStart(ctx, areRequests) {
      // check to see if there's a request.
      if (this.first) {
        if (areRequests && this.start && ctx) {
          // If so, start. If it's original, then continue with the code. If not, stop it.
          if (this.start > ctx.start.start) {
            // Definitely return something that's NOT returning a 0, 0 array. Will also need to prevent the check after first successful execution.
            this.dup = true;
            //   return false;
          }
        }
      }
      // return count;
    }
  }, {
    key: "updateProps",
    value: function updateProps(checkBlock) {
      this.requests = checkBlock.requests;
      this.keystrokes = checkBlock.keystrokes;
      this.dup = checkBlock.dup;
      this.first = checkBlock.dup;
    }
  }, {
    key: "checkStatementBlock",
    value: function checkStatementBlock(ctx) {
      var checkBlock = this.callback(this.createNewBlockProps(), ctx);
      if (checkBlock) {
        this.updateProps(checkBlock);
      }
    }
  }, {
    key: "checkStatement",
    value: function checkStatement(ctx) {
      var _this = this;
      var _a, _b, _c;
      var _iterator = _createForOfIteratorHelper(ctx.statement()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var statementCtx = _step.value;
          if (((_b = (_a = statementCtx.keystroke()) === null || _a === void 0 ? void 0 : _a.expression()) === null || _b === void 0 ? void 0 : _b.getText()) === 'return') {
            this.keystrokes++;
            this.first = false;
          } else if (((_c = statementCtx.set()) === null || _c === void 0 ? void 0 : _c.operation().value(0).getText()) === 'URL') {
            this.requests++;
            this.first = false;
          } else if (statementCtx.openLocation()) {
            this.requests++;
            this.first = false;
          }
          // function calls are single statements. Can be processed like any other request in terms of checking dups.
          var functionCallCtx = statementCtx.functionCall();
          if (functionCallCtx) {
            this.checkFunctionCall(functionCallCtx, function (func) {
              if (func.requests || func.keystrokes) {
                _this.first = false;
                _this.requests += func.requests;
                _this.keystrokes += func.keystrokes;
              }
            });
          }
          if (statementCtx.ifBlock() || statementCtx.tell() || statementCtx.errorHandler()) {
            this.checkStatementBlock(statementCtx);
          }
          // check start
          else if (this.first) {
            var count = this.checkStart(statementCtx, !!(this.requests || this.keystrokes));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "checkErrorHandler",
    value: function checkErrorHandler(parentCtx) {
      // Possible that part of the try block could execute then throw an error. Treating them as non-mutually exclusive.
      // Also have to account for more than one request.
      var tryStatementListCtx = parentCtx.statementList(0);
      this.checkStatement(tryStatementListCtx);
      var errorStatementListCtx = parentCtx.statementList(1);
      if (errorStatementListCtx) {
        this.checkStatement(errorStatementListCtx);
      }
    }
  }]);
  return CheckBlock;
}();
exports.CheckBlock = CheckBlock;
var checkElse = /*#__PURE__*/function (_CheckBlock) {
  _inherits(checkElse, _CheckBlock);
  var _super = _createSuper(checkElse);
  function checkElse(options, ctx) {
    var _this2;
    _classCallCheck(this, checkElse);
    _this2 = _super.call(this, options);
    if (ctx.constructor.name === 'ElseStatementContext') {
      var elseStatementCtx = ctx;
      _this2.checkStatement(elseStatementCtx.statementList());
    } else {
      var elseIfCtx = ctx;
      _this2.checkStatement(elseIfCtx.ifStatement().statementList());
    }
    return _this2;
  }
  return _createClass(checkElse);
}(CheckBlock);
var checkRequestInIfStatement = /*#__PURE__*/function (_CheckBlock2) {
  _inherits(checkRequestInIfStatement, _CheckBlock2);
  var _super2 = _createSuper(checkRequestInIfStatement);
  function checkRequestInIfStatement(options, ifBlockCtx, ctx) {
    var _this3;
    _classCallCheck(this, checkRequestInIfStatement);
    _this3 = _super2.call(this, options);
    var elseIfArray = ifBlockCtx.elseIf();
    // count keystrokes/requests in ifStatement
    if ((ctx === null || ctx === void 0 ? void 0 : ctx.constructor.name) === 'IfStatementContext' || !ctx) {
      // Handle various parts of the ifBlock (if, elseIf, else)
      _this3.checkStatement(ifBlockCtx.ifStatement().statementList());
      // elseIf
      if (elseIfArray) {
        elseIfArray.forEach(function (elseIfCtx) {
          _this3.evalElse(elseIfCtx);
        });
      }
      // else
      var elseStatementCtx = ifBlockCtx.elseStatement();
      if (elseStatementCtx) {
        _this3.evalElse(elseStatementCtx);
      }
    }
    // For others, check if the ifBlock has already been processed (if request in ifStatement/preceeding elseIfStatment)
    else {
      _this3.checkStatement(ifBlockCtx.ifStatement().statementList());
      if (elseIfArray) {
        var _iterator2 = _createForOfIteratorHelper(elseIfArray),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var elseIfCtx = _step2.value;
            _this3.evalElse(elseIfCtx);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
      var _elseStatementCtx = ctx;
      _this3.evalElse(_elseStatementCtx);
    }
    return _this3;
  }
  _createClass(checkRequestInIfStatement, [{
    key: "evalElse",
    value: function evalElse(ctx) {
      var elseRequests = new checkElse({
        functions: this.functions,
        knownFunctions: this.knownFunctions,
        start: this.start,
        first: this.first,
        requests: 0,
        keystrokes: 0,
        dup: this.dup,
        callback: this.callback
      }, ctx);
      if (elseRequests.requests > this.requests) {
        this.requests = elseRequests.requests;
      }
      if (elseRequests.keystrokes > this.keystrokes) {
        this.keystrokes = elseRequests.keystrokes;
      }
    }
  }]);
  return checkRequestInIfStatement;
}(CheckBlock);
exports["default"] = checkRequestInIfStatement;