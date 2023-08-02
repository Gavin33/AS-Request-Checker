import antlr4 from 'antlr4';
import ASGrammarLexer from './ASGrammarLexer.js';
import ASGrammarParser from './ASGrammarParser.js';
import checkRequestListener from './debugCheckRequestListener.js';

// This parser is optimized for debugging. Can't take inputs or output log files, but will tell you what the parser is having trouble with and fully execute any console logs.

const scriptPath = './test.scpt';

// Read the .scpt file contents
const fs = require('fs');
// const inputFile = '../CoverLetters/Scripts/FindAndReplace.scpt'; // Replace with the path to your .scpt file
const input = fs.readFileSync(scriptPath, 'utf8');

// Create an input stream
const chars = new antlr4.InputStream(input);

// Create a lexer that feeds off of the input stream
const lexer = new ASGrammarLexer(chars);

// Create a buffer of tokens pulled from the lexer
const tokens = new antlr4.CommonTokenStream(lexer);

// Create a parser that feeds off the tokens buffer
const parser = new ASGrammarParser(tokens);

// Start the parsing from the root rule 'program'
let tree = parser.program();

// Create a new listener instance
const listener = new checkRequestListener();
// Walk the parse tree and trigger the listener events
antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);

console.log('Requests:', listener.requests);
console.log('Error:', listener.error);
