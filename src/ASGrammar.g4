grammar ASGrammar;

// Occasionally will get an error saying "no viable alternative at input 'rowof'". Ignore it. Lexer is interpretting row as a modifier and of as an operator, which is expected behavior.

program: statement* EOF;
WHITESPACE: [ \t\r\n]+ -> skip;
SingleLineComment: '--' ~[\r\n]* -> skip;
MultiLineComment: '(*' .*? '*)' -> skip;

// keywords not in current use

//
// delay
delay: 'delay' expression;

// count
count: 'count' 'of'? expression;

// copy
copy: 'copy' operation 'to' expression;

error: 'error' expression ('number' expression)?;

// click
click: 'click' expression?;

// open location
openLocation: 'open' 'location' expression;

// activate
activate: 'activate';

// open file
openFile: 'open' 'file' expression;

// save
save: 'save';

//
// keystrokes
keystroke:
	'keystroke' (
		expression
		| ('(' 'character' 'id' expression ')')
	) using?;
using: 'using' list;

// Loops
loopStatement: repeatLoop | whileLoop;
// Repeat with loops are beyond this program. Important to catch.
repeatLoop:
	'repeat' (
		('with' expression ('from' range | 'in' variable))
		| ('until' expression)
		| ('from' range ('by' expression)?)
		| expression
	) statementList 'end' 'repeat';
whileLoop:
	'while' expression 'then' statementList 'end' 'while';
exit: 'exit' 'repeat';

// Tell
tell: 'tell' (tellApp | tellId);
tellApp: appType STRING tellArg;
tellArg: toStatement | (statementList 'end' 'tell');
appType: 'process' | 'application';
tellId: operation tellArg;
exists: 'exists' 'process' STRING;

// If
ifBlock: ifStatement elseIf* elseStatement? 'end' 'if';
elseIf: 'else' ifStatement;
elseStatement: 'else' statementList;
ifStatement: 'if' operator? expression 'then' statementList;
// There aren't any swtich statements in AS oddly enough.

// Statements/expressions/parameters
toStatement: 'to' statement;
statementList: statement+;
returnStatement: 'return' expression?;
statement:
	loopStatement
	| copy
	| error
	| errorHandler
	| openFile
	| onRun
	| exit
	| returnStatement
	| functionDeclaration
	| displayDialog
	| makeNew
	| keystroke
	| functionCall
	| set
	| ifBlock
	| delay
	| click
	| openLocation
	| activate
	| tell
	| 'save';
parameterList: '(' arguments? ')';

// on run

onRun:
	'on' 'run' (parameterList | IDENTIFIER)? statementList 'end' 'run';

// Functions
functionDeclaration:
	'on' IDENTIFIER parameterList? functionBody 'end' IDENTIFIER;
functionBody: statementList;
functionCall: IDENTIFIER '(' arguments? ')';
arguments: expression (',' expression)*;
range: expression 'to' expression;

// variables
operator:
	'+'										# add
	| '-'									# subtract
	| '*'									# multiply
	| '/'									# divide
	| 'mod'									# modulo
	| '^'									# exponent
	| ('!=' | 'is' 'not')					# unequal
	| ('=' | 'is' 'equal' 'to' | 'is')		# equals
	| '>'									# greaterThan
	| '<'									# lessThan
	| '>='									# greaterThanEqual
	| '<='									# lessThanEqual
	| '&'									# concat
	| 'and'									# and
	| 'or'									# or
	| 'not'									# not
	| 'contains'							# contains
	| 'whose' ('(' 'where' expression ')')?	# whose
	| 'of'									# of
	| 'in'									# in;
set: 'set' operation 'to' expression;
setProperty: 'property' IDENTIFIER ':' basicData;
// May add more handlers at a later date.
listener:
	'property' 'listener' IDENTIFIER
	| 'on' ('run' | 'open' 'location' variable | 'idle' | 'quit');
errorHandler:
	'try' statementList (
		'on' 'error' IDENTIFIER? ('number' IDENTIFIER)? statementList
	)? 'end' 'try';
operation: value (operator value)*;
expression: ('(' expression ')' (operator expression)*)
	| operation;
value:
	missingValue
	| count
	| displayDialog
	| 'value'
	| 'return'
	| exists
	| functionCall
	| (
		'text' 'returned' 'of' '(' 'display' 'dialog' expression (
			'default' 'answer' expression
		)? ')'
	)
	| 'text' expression 'thru' expression
	| makeNew
	| FLOAT
	| INTEGER
	| STRING
	| BOOLEAN
	| variable
	| record
	| list;

withProperties: 'with' 'properties';
makeNew:
	'make' 'new' variable (
		('after' 'last' | 'at' 'end' 'of') variable
	)? (withProperties record)?;
// In AppleScript you can name properties after certain keywords. Variable rule is going to have to account for that feature.
variable:
	modifier* IDENTIFIER? property IDENTIFIER? ('as' (IDENTIFIER | 'text' | 'number'))?;
// Pretty sure modifier refers to types of keystrokes, but it's still the best name I could come up with. Also implementing get here because I'm not really using it in the parser, basically a shortcut.
modifier: 'get' | 'last' | 'menu' | 'bar' | 'button' | 'item' | ('end' 'of') | 'the' | 'body' ;
property: 'text' | IDENTIFIER | INTEGER | STRING | 'value' | 'count' | 'number' | 'id';
record: '{' (variable ':' expression ','?)+ '}';
list: '{' arguments? '}';

// Basic data types
basicData: INTEGER | BOOLEAN | STRING | missingValue;
missingValue: 'missing' 'value';
BOOLEAN: 'true' | 'false';
displayDialog:
	'display' 'dialog' expression (
		'buttons' '{' STRING '}' ('default' 'button' STRING)?
	)?;
STRING:
	'"' (~'"' | ESCAPED_QUOTE)* '"'
	| '\'' ( ~'\'' | ESCAPED_QUOTE)* '\'';
fragment ESCAPED_QUOTE: '\\' '\'' | '\\' '"';
FLOAT: INTEGER '.' [0-9]+;
INTEGER: '-'? [0-9]+;
// Think of identifiers as "next word" in this context
IDENTIFIER: [a-zA-Z] [a-zA-Z0-9_]*;
