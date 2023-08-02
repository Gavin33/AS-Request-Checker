"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _antlr = _interopRequireDefault(require("antlr4"));
var _ASGrammarLexer = _interopRequireDefault(require("./ASGrammarLexer.js"));
var _ASGrammarParser2 = _interopRequireDefault(require("./ASGrammarParser.js"));
var _checkRequestListener = _interopRequireDefault(require("./checkRequestListener"));
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
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
// In a more feature complete grammar file, I would probably just use ASGrammarParser. This is just me recognizing that my grammar file is far from perfect and preventing misinterpreted code from executing. Use the debug parser for default behavior; it's easier to debug with.
var checkRequestParser = /*#__PURE__*/function (_ASGrammarParser) {
  _inherits(checkRequestParser, _ASGrammarParser);
  var _super = _createSuper(checkRequestParser);
  function checkRequestParser(tokens) {
    _classCallCheck(this, checkRequestParser);
    return _super.call(this, tokens);
  }
  _createClass(checkRequestParser, [{
    key: "notifyErrorListeners",
    value: function notifyErrorListeners(msg, offendingToken, err) {
      // msg is exactly what you think it is.
      offendingToken = offendingToken || null;
      err = err || null;
      if (offendingToken === null) {
        offendingToken = this.getCurrentToken();
      }
      this._syntaxErrors += 1;
      var line = offendingToken.line;
      var column = offendingToken.column;
      // creates a new proxy error listener with delegates [ ConsoleErrorListener.INSTANCE ], which is to say an array with one instance of the ConsoleErrorListener class.
      var listener = this.getErrorListenerDispatch();
      // Default behavior of super class is to iterate through the one item of the array and call the syntaxError method on it. Which does this: console.error("line " + line + ":" + column + " " + msg);

      // listener.syntaxError(this, offendingToken, line, column, msg, err);

      // Instead, we're going to stop the whole program and throw an error!
      throw new Error('line ' + line + ':' + column + ' ' + msg);
    }
  }]);
  return checkRequestParser;
}(_ASGrammarParser2["default"]);
var scriptPath = process.argv[2];
// Domains is the number of expected requests. Naming it like this as a reminder there should usually be only one request per domain per user interaction.
var domains = process.argv[3];
// Read the .scpt file contents
var fs = require('fs');
// const inputFile = '../CoverLetters/Scripts/FindAndReplace.scpt'; // Replace with the path to your .scpt file
var input = fs.readFileSync(scriptPath, 'utf8');

// Create an input stream
var chars = new _antlr["default"].InputStream(input);

// Create a lexer that feeds off of the input stream
var lexer = new _ASGrammarLexer["default"](chars);

// Create a buffer of tokens pulled from the lexer
var tokens = new _antlr["default"].CommonTokenStream(lexer);

// Create a parser that feeds off the tokens buffer
var parser = new checkRequestParser(tokens);

// Start the parsing from the root rule 'program'
var tree;
try {
  tree = parser.program();
} catch (error) {
  process.stdout.write('Parsing error: ' + error.message);
}
if (tree) {
  // Create a new listener instance
  var listener = new _checkRequestListener["default"]();
  // Walk the parse tree and trigger the listener events
  _antlr["default"].tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  if (listener.requests > domains) {
    process.stdout.write('Error: Number of detected requests exceeds number of specified domains. Number of requests: ' + listener.requests.toString());
  } else if (listener.error) {
    process.stdout.write(listener.error);
  } else {
    process.stdout.write('true');
  }
}