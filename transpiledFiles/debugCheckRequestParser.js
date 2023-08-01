"use strict";

var _antlr = _interopRequireDefault(require("antlr4"));
var _ASGrammarLexer = _interopRequireDefault(require("./ASGrammarLexer.js"));
var _ASGrammarParser = _interopRequireDefault(require("./ASGrammarParser.js"));
var _debugCheckRequestListener = _interopRequireDefault(require("./debugCheckRequestListener.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// This parser is optimized for debugging. Can't take inputs or output log files, but will tell you what the parser is having trouble with and fully execute any console logs.

var scriptPath = '../CoverLetters/Scripts/pasteSnippets.scpt';

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
var parser = new _ASGrammarParser["default"](tokens);

// Start the parsing from the root rule 'program'
var tree = parser.program();

// Create a new listener instance
var listener = new _debugCheckRequestListener["default"]();
// Walk the parse tree and trigger the listener events
_antlr["default"].tree.ParseTreeWalker.DEFAULT.walk(listener, tree);