import antlr4 from 'antlr4';
import ASGrammarLexer from './ASGrammarLexer.js';
import ASGrammarParser from './ASGrammarParser.js';
import checkRequestListener from './checkRequestListener';

// In a more feature complete grammar file, I would probably just use ASGrammarParser. This is just me recognizing that my grammar file is far from perfect and preventing misinterpreted code from executing. Use the debug parser for default behavior; it's easier to debug with.

class checkRequestParser extends ASGrammarParser {
  constructor(tokens) {
    super(tokens);
  }

  notifyErrorListeners(msg, offendingToken, err) {
    // msg is exactly what you think it is.
    offendingToken = offendingToken || null;
    err = err || null;
    if (offendingToken === null) {
      offendingToken = this.getCurrentToken();
    }
    this._syntaxErrors += 1;
    const line = offendingToken.line;
    const column = offendingToken.column;
    // creates a new proxy error listener with delegates [ ConsoleErrorListener.INSTANCE ], which is to say an array with one instance of the ConsoleErrorListener class.
    const listener = this.getErrorListenerDispatch();
    // Default behavior of super class is to iterate through the one item of the array and call the syntaxError method on it. Which does this: console.error("line " + line + ":" + column + " " + msg);
    // listener.syntaxError(this, offendingToken, line, column, msg, err);
    // Instead, we're going to stop the whole program and throw an error!
    throw new Error('line ' + line + ':' + column + ' ' + msg);
  }
}

const scriptPath = process.argv[2];
// Domains is the number of expected requests. Naming it like this as a reminder there should usually be only one request per domain per user interaction.
const domains = process.argv[3];
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
const parser = new checkRequestParser(tokens);

// Start the parsing from the root rule 'program'
let tree;
try {
  tree = parser.program();
} catch (error) {
  // fs.writeFileSync('./checkRequestLog.txt', 'Parsing error: ' + error.message);
  process.stdout.write('Parsing error: ' + error.message)
}

if (tree) {
  // Create a new listener instance
  const listener = new checkRequestListener();
  // Walk the parse tree and trigger the listener events
  antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  if (listener.requests > domains) {
    // fs.writeFileSync(
    //   './checkRequestLog.txt',
    //   'Error: Number of detected requests exceeds number of specified domains. Number of requests: ' +
    //     listener.requests.toString()
    // );
    process.stdout.write('Error: Number of detected requests exceeds number of specified domains. Number of requests: ' +
        listener.requests.toString());
  } else if (listener.error) {
    // fs.writeFileSync('./log.txt.', listener.error);
    process.stdout.write(listener.error)
  } else {
    // fs.writeFileSync(
    //   './checkRequestLog.txt',
    //   'Look at you, not trying to break TOS!'
    // );
    process.stdout.write('true')
  }
}
