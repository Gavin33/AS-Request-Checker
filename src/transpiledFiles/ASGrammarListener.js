"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _antlr = _interopRequireDefault(require("antlr4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
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
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); } // Generated from ASGrammar.g4 by ANTLR 4.13.0
// jshint ignore: start
// This class defines a complete listener for a parse tree produced by ASGrammarParser.
var ASGrammarListener = /*#__PURE__*/function (_antlr4$tree$ParseTre) {
  _inherits(ASGrammarListener, _antlr4$tree$ParseTre);
  var _super = _createSuper(ASGrammarListener);
  function ASGrammarListener() {
    _classCallCheck(this, ASGrammarListener);
    return _super.apply(this, arguments);
  }
  _createClass(ASGrammarListener, [{
    key: "enterProgram",
    value:
    // Enter a parse tree produced by ASGrammarParser#program.
    function enterProgram(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#program.
  }, {
    key: "exitProgram",
    value: function exitProgram(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#delay.
  }, {
    key: "enterDelay",
    value: function enterDelay(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#delay.
  }, {
    key: "exitDelay",
    value: function exitDelay(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#count.
  }, {
    key: "enterCount",
    value: function enterCount(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#count.
  }, {
    key: "exitCount",
    value: function exitCount(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#copy.
  }, {
    key: "enterCopy",
    value: function enterCopy(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#copy.
  }, {
    key: "exitCopy",
    value: function exitCopy(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#error.
  }, {
    key: "enterError",
    value: function enterError(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#error.
  }, {
    key: "exitError",
    value: function exitError(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#click.
  }, {
    key: "enterClick",
    value: function enterClick(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#click.
  }, {
    key: "exitClick",
    value: function exitClick(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#openLocation.
  }, {
    key: "enterOpenLocation",
    value: function enterOpenLocation(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#openLocation.
  }, {
    key: "exitOpenLocation",
    value: function exitOpenLocation(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#activate.
  }, {
    key: "enterActivate",
    value: function enterActivate(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#activate.
  }, {
    key: "exitActivate",
    value: function exitActivate(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#openFile.
  }, {
    key: "enterOpenFile",
    value: function enterOpenFile(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#openFile.
  }, {
    key: "exitOpenFile",
    value: function exitOpenFile(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#save.
  }, {
    key: "enterSave",
    value: function enterSave(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#save.
  }, {
    key: "exitSave",
    value: function exitSave(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#keystroke.
  }, {
    key: "enterKeystroke",
    value: function enterKeystroke(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#keystroke.
  }, {
    key: "exitKeystroke",
    value: function exitKeystroke(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#using.
  }, {
    key: "enterUsing",
    value: function enterUsing(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#using.
  }, {
    key: "exitUsing",
    value: function exitUsing(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#loopStatement.
  }, {
    key: "enterLoopStatement",
    value: function enterLoopStatement(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#loopStatement.
  }, {
    key: "exitLoopStatement",
    value: function exitLoopStatement(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#repeatLoop.
  }, {
    key: "enterRepeatLoop",
    value: function enterRepeatLoop(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#repeatLoop.
  }, {
    key: "exitRepeatLoop",
    value: function exitRepeatLoop(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#whileLoop.
  }, {
    key: "enterWhileLoop",
    value: function enterWhileLoop(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#whileLoop.
  }, {
    key: "exitWhileLoop",
    value: function exitWhileLoop(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#exit.
  }, {
    key: "enterExit",
    value: function enterExit(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#exit.
  }, {
    key: "exitExit",
    value: function exitExit(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#tell.
  }, {
    key: "enterTell",
    value: function enterTell(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#tell.
  }, {
    key: "exitTell",
    value: function exitTell(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#tellApp.
  }, {
    key: "enterTellApp",
    value: function enterTellApp(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#tellApp.
  }, {
    key: "exitTellApp",
    value: function exitTellApp(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#tellArg.
  }, {
    key: "enterTellArg",
    value: function enterTellArg(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#tellArg.
  }, {
    key: "exitTellArg",
    value: function exitTellArg(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#appType.
  }, {
    key: "enterAppType",
    value: function enterAppType(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#appType.
  }, {
    key: "exitAppType",
    value: function exitAppType(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#tellId.
  }, {
    key: "enterTellId",
    value: function enterTellId(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#tellId.
  }, {
    key: "exitTellId",
    value: function exitTellId(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#exists.
  }, {
    key: "enterExists",
    value: function enterExists(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#exists.
  }, {
    key: "exitExists",
    value: function exitExists(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#ifBlock.
  }, {
    key: "enterIfBlock",
    value: function enterIfBlock(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#ifBlock.
  }, {
    key: "exitIfBlock",
    value: function exitIfBlock(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#elseIf.
  }, {
    key: "enterElseIf",
    value: function enterElseIf(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#elseIf.
  }, {
    key: "exitElseIf",
    value: function exitElseIf(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#elseStatement.
  }, {
    key: "enterElseStatement",
    value: function enterElseStatement(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#elseStatement.
  }, {
    key: "exitElseStatement",
    value: function exitElseStatement(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#ifStatement.
  }, {
    key: "enterIfStatement",
    value: function enterIfStatement(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#ifStatement.
  }, {
    key: "exitIfStatement",
    value: function exitIfStatement(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#toStatement.
  }, {
    key: "enterToStatement",
    value: function enterToStatement(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#toStatement.
  }, {
    key: "exitToStatement",
    value: function exitToStatement(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#statementList.
  }, {
    key: "enterStatementList",
    value: function enterStatementList(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#statementList.
  }, {
    key: "exitStatementList",
    value: function exitStatementList(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#returnStatement.
  }, {
    key: "enterReturnStatement",
    value: function enterReturnStatement(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#returnStatement.
  }, {
    key: "exitReturnStatement",
    value: function exitReturnStatement(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#statement.
  }, {
    key: "enterStatement",
    value: function enterStatement(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#statement.
  }, {
    key: "exitStatement",
    value: function exitStatement(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#parameterList.
  }, {
    key: "enterParameterList",
    value: function enterParameterList(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#parameterList.
  }, {
    key: "exitParameterList",
    value: function exitParameterList(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#onRun.
  }, {
    key: "enterOnRun",
    value: function enterOnRun(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#onRun.
  }, {
    key: "exitOnRun",
    value: function exitOnRun(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#functionDeclaration.
  }, {
    key: "enterFunctionDeclaration",
    value: function enterFunctionDeclaration(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#functionDeclaration.
  }, {
    key: "exitFunctionDeclaration",
    value: function exitFunctionDeclaration(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#functionBody.
  }, {
    key: "enterFunctionBody",
    value: function enterFunctionBody(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#functionBody.
  }, {
    key: "exitFunctionBody",
    value: function exitFunctionBody(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#functionCall.
  }, {
    key: "enterFunctionCall",
    value: function enterFunctionCall(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#functionCall.
  }, {
    key: "exitFunctionCall",
    value: function exitFunctionCall(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#arguments.
  }, {
    key: "enterArguments",
    value: function enterArguments(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#arguments.
  }, {
    key: "exitArguments",
    value: function exitArguments(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#range.
  }, {
    key: "enterRange",
    value: function enterRange(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#range.
  }, {
    key: "exitRange",
    value: function exitRange(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#add.
  }, {
    key: "enterAdd",
    value: function enterAdd(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#add.
  }, {
    key: "exitAdd",
    value: function exitAdd(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#subtract.
  }, {
    key: "enterSubtract",
    value: function enterSubtract(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#subtract.
  }, {
    key: "exitSubtract",
    value: function exitSubtract(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#multiply.
  }, {
    key: "enterMultiply",
    value: function enterMultiply(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#multiply.
  }, {
    key: "exitMultiply",
    value: function exitMultiply(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#divide.
  }, {
    key: "enterDivide",
    value: function enterDivide(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#divide.
  }, {
    key: "exitDivide",
    value: function exitDivide(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#modulo.
  }, {
    key: "enterModulo",
    value: function enterModulo(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#modulo.
  }, {
    key: "exitModulo",
    value: function exitModulo(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#exponent.
  }, {
    key: "enterExponent",
    value: function enterExponent(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#exponent.
  }, {
    key: "exitExponent",
    value: function exitExponent(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#unequal.
  }, {
    key: "enterUnequal",
    value: function enterUnequal(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#unequal.
  }, {
    key: "exitUnequal",
    value: function exitUnequal(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#equals.
  }, {
    key: "enterEquals",
    value: function enterEquals(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#equals.
  }, {
    key: "exitEquals",
    value: function exitEquals(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#greaterThan.
  }, {
    key: "enterGreaterThan",
    value: function enterGreaterThan(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#greaterThan.
  }, {
    key: "exitGreaterThan",
    value: function exitGreaterThan(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#lessThan.
  }, {
    key: "enterLessThan",
    value: function enterLessThan(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#lessThan.
  }, {
    key: "exitLessThan",
    value: function exitLessThan(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#greaterThanEqual.
  }, {
    key: "enterGreaterThanEqual",
    value: function enterGreaterThanEqual(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#greaterThanEqual.
  }, {
    key: "exitGreaterThanEqual",
    value: function exitGreaterThanEqual(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#lessThanEqual.
  }, {
    key: "enterLessThanEqual",
    value: function enterLessThanEqual(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#lessThanEqual.
  }, {
    key: "exitLessThanEqual",
    value: function exitLessThanEqual(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#concat.
  }, {
    key: "enterConcat",
    value: function enterConcat(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#concat.
  }, {
    key: "exitConcat",
    value: function exitConcat(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#and.
  }, {
    key: "enterAnd",
    value: function enterAnd(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#and.
  }, {
    key: "exitAnd",
    value: function exitAnd(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#or.
  }, {
    key: "enterOr",
    value: function enterOr(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#or.
  }, {
    key: "exitOr",
    value: function exitOr(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#not.
  }, {
    key: "enterNot",
    value: function enterNot(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#not.
  }, {
    key: "exitNot",
    value: function exitNot(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#contains.
  }, {
    key: "enterContains",
    value: function enterContains(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#contains.
  }, {
    key: "exitContains",
    value: function exitContains(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#whose.
  }, {
    key: "enterWhose",
    value: function enterWhose(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#whose.
  }, {
    key: "exitWhose",
    value: function exitWhose(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#of.
  }, {
    key: "enterOf",
    value: function enterOf(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#of.
  }, {
    key: "exitOf",
    value: function exitOf(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#in.
  }, {
    key: "enterIn",
    value: function enterIn(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#in.
  }, {
    key: "exitIn",
    value: function exitIn(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#set.
  }, {
    key: "enterSet",
    value: function enterSet(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#set.
  }, {
    key: "exitSet",
    value: function exitSet(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#setProperty.
  }, {
    key: "enterSetProperty",
    value: function enterSetProperty(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#setProperty.
  }, {
    key: "exitSetProperty",
    value: function exitSetProperty(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#listener.
  }, {
    key: "enterListener",
    value: function enterListener(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#listener.
  }, {
    key: "exitListener",
    value: function exitListener(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#errorHandler.
  }, {
    key: "enterErrorHandler",
    value: function enterErrorHandler(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#errorHandler.
  }, {
    key: "exitErrorHandler",
    value: function exitErrorHandler(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#operation.
  }, {
    key: "enterOperation",
    value: function enterOperation(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#operation.
  }, {
    key: "exitOperation",
    value: function exitOperation(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#expression.
  }, {
    key: "enterExpression",
    value: function enterExpression(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#expression.
  }, {
    key: "exitExpression",
    value: function exitExpression(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#value.
  }, {
    key: "enterValue",
    value: function enterValue(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#value.
  }, {
    key: "exitValue",
    value: function exitValue(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#withProperties.
  }, {
    key: "enterWithProperties",
    value: function enterWithProperties(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#withProperties.
  }, {
    key: "exitWithProperties",
    value: function exitWithProperties(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#makeNew.
  }, {
    key: "enterMakeNew",
    value: function enterMakeNew(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#makeNew.
  }, {
    key: "exitMakeNew",
    value: function exitMakeNew(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#variable.
  }, {
    key: "enterVariable",
    value: function enterVariable(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#variable.
  }, {
    key: "exitVariable",
    value: function exitVariable(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#modifier.
  }, {
    key: "enterModifier",
    value: function enterModifier(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#modifier.
  }, {
    key: "exitModifier",
    value: function exitModifier(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#property.
  }, {
    key: "enterProperty",
    value: function enterProperty(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#property.
  }, {
    key: "exitProperty",
    value: function exitProperty(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#record.
  }, {
    key: "enterRecord",
    value: function enterRecord(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#record.
  }, {
    key: "exitRecord",
    value: function exitRecord(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#list.
  }, {
    key: "enterList",
    value: function enterList(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#list.
  }, {
    key: "exitList",
    value: function exitList(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#basicData.
  }, {
    key: "enterBasicData",
    value: function enterBasicData(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#basicData.
  }, {
    key: "exitBasicData",
    value: function exitBasicData(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#missingValue.
  }, {
    key: "enterMissingValue",
    value: function enterMissingValue(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#missingValue.
  }, {
    key: "exitMissingValue",
    value: function exitMissingValue(ctx) {}

    // Enter a parse tree produced by ASGrammarParser#displayDialog.
  }, {
    key: "enterDisplayDialog",
    value: function enterDisplayDialog(ctx) {}

    // Exit a parse tree produced by ASGrammarParser#displayDialog.
  }, {
    key: "exitDisplayDialog",
    value: function exitDisplayDialog(ctx) {}
  }]);
  return ASGrammarListener;
}(_antlr["default"].tree.ParseTreeListener);
exports["default"] = ASGrammarListener;