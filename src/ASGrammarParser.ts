// Generated from ASGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ASGrammarListener } from "./ASGrammarListener";

export class ASGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly T__59 = 60;
	public static readonly T__60 = 61;
	public static readonly T__61 = 62;
	public static readonly T__62 = 63;
	public static readonly T__63 = 64;
	public static readonly T__64 = 65;
	public static readonly T__65 = 66;
	public static readonly T__66 = 67;
	public static readonly T__67 = 68;
	public static readonly T__68 = 69;
	public static readonly T__69 = 70;
	public static readonly T__70 = 71;
	public static readonly T__71 = 72;
	public static readonly T__72 = 73;
	public static readonly T__73 = 74;
	public static readonly T__74 = 75;
	public static readonly T__75 = 76;
	public static readonly T__76 = 77;
	public static readonly T__77 = 78;
	public static readonly T__78 = 79;
	public static readonly T__79 = 80;
	public static readonly T__80 = 81;
	public static readonly T__81 = 82;
	public static readonly T__82 = 83;
	public static readonly T__83 = 84;
	public static readonly T__84 = 85;
	public static readonly T__85 = 86;
	public static readonly WHITESPACE = 87;
	public static readonly SingleLineComment = 88;
	public static readonly MultiLineComment = 89;
	public static readonly BOOLEAN = 90;
	public static readonly STRING = 91;
	public static readonly INTEGER = 92;
	public static readonly IDENTIFIER = 93;
	public static readonly RULE_program = 0;
	public static readonly RULE_delay = 1;
	public static readonly RULE_click = 2;
	public static readonly RULE_openLocation = 3;
	public static readonly RULE_activate = 4;
	public static readonly RULE_openFile = 5;
	public static readonly RULE_save = 6;
	public static readonly RULE_keystroke = 7;
	public static readonly RULE_using = 8;
	public static readonly RULE_loopStatement = 9;
	public static readonly RULE_repeatLoop = 10;
	public static readonly RULE_whileLoop = 11;
	public static readonly RULE_exit = 12;
	public static readonly RULE_tell = 13;
	public static readonly RULE_tellApp = 14;
	public static readonly RULE_tellArg = 15;
	public static readonly RULE_appType = 16;
	public static readonly RULE_tellId = 17;
	public static readonly RULE_exists = 18;
	public static readonly RULE_ifBlock = 19;
	public static readonly RULE_elseIf = 20;
	public static readonly RULE_elseStatement = 21;
	public static readonly RULE_ifStatement = 22;
	public static readonly RULE_toStatement = 23;
	public static readonly RULE_statementList = 24;
	public static readonly RULE_returnStatement = 25;
	public static readonly RULE_statement = 26;
	public static readonly RULE_parameterList = 27;
	public static readonly RULE_onRun = 28;
	public static readonly RULE_functionDeclaration = 29;
	public static readonly RULE_functionBody = 30;
	public static readonly RULE_functionCall = 31;
	public static readonly RULE_arguments = 32;
	public static readonly RULE_range = 33;
	public static readonly RULE_operator = 34;
	public static readonly RULE_set = 35;
	public static readonly RULE_setProperty = 36;
	public static readonly RULE_listener = 37;
	public static readonly RULE_errorHandler = 38;
	public static readonly RULE_operation = 39;
	public static readonly RULE_expression = 40;
	public static readonly RULE_value = 41;
	public static readonly RULE_withProperties = 42;
	public static readonly RULE_makeNew = 43;
	public static readonly RULE_variable = 44;
	public static readonly RULE_modifier = 45;
	public static readonly RULE_property = 46;
	public static readonly RULE_record = 47;
	public static readonly RULE_list = 48;
	public static readonly RULE_basicData = 49;
	public static readonly RULE_missingValue = 50;
	public static readonly RULE_displayDialog = 51;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "delay", "click", "openLocation", "activate", "openFile", "save", 
		"keystroke", "using", "loopStatement", "repeatLoop", "whileLoop", "exit", 
		"tell", "tellApp", "tellArg", "appType", "tellId", "exists", "ifBlock", 
		"elseIf", "elseStatement", "ifStatement", "toStatement", "statementList", 
		"returnStatement", "statement", "parameterList", "onRun", "functionDeclaration", 
		"functionBody", "functionCall", "arguments", "range", "operator", "set", 
		"setProperty", "listener", "errorHandler", "operation", "expression", 
		"value", "withProperties", "makeNew", "variable", "modifier", "property", 
		"record", "list", "basicData", "missingValue", "displayDialog",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'delay'", "'click'", "'button'", "'open'", "'location'", "'activate'", 
		"'file'", "'save'", "'keystroke'", "'('", "'character'", "'id'", "')'", 
		"'using'", "'repeat'", "'with'", "'from'", "'in'", "'until'", "'by'", 
		"'end'", "'while'", "'then'", "'exit'", "'tell'", "'process'", "'application'", 
		"'exists'", "'if'", "'else'", "'to'", "'return'", "'on'", "'run'", "','", 
		"'+'", "'-'", "'*'", "'/'", "'mod'", "'^'", "'!='", "'is'", "'not'", "'='", 
		"'equal'", "'>'", "'<'", "'>='", "'<='", "'&'", "'and'", "'or'", "'contains'", 
		"'whose'", "'where'", "'of'", "'set'", "'as'", "'text'", "'property'", 
		"':'", "'listener'", "'idle'", "'quit'", "'try'", "'error'", "'number'", 
		"'value'", "'returned'", "'display'", "'dialog'", "'default'", "'answer'", 
		"'thru'", "'properties'", "'make'", "'new'", "'after'", "'last'", "'at'", 
		"'get'", "'{'", "'}'", "'missing'", "'buttons'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "WHITESPACE", "SingleLineComment", "MultiLineComment", 
		"BOOLEAN", "STRING", "INTEGER", "IDENTIFIER",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ASGrammarParser._LITERAL_NAMES, ASGrammarParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ASGrammarParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ASGrammar.g4"; }

	// @Override
	public get ruleNames(): string[] { return ASGrammarParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ASGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ASGrammarParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ASGrammarParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 107;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << ASGrammarParser.T__0) | (1 << ASGrammarParser.T__1) | (1 << ASGrammarParser.T__3) | (1 << ASGrammarParser.T__5) | (1 << ASGrammarParser.T__7) | (1 << ASGrammarParser.T__8) | (1 << ASGrammarParser.T__14) | (1 << ASGrammarParser.T__21) | (1 << ASGrammarParser.T__23) | (1 << ASGrammarParser.T__24) | (1 << ASGrammarParser.T__28))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (ASGrammarParser.T__31 - 32)) | (1 << (ASGrammarParser.T__32 - 32)) | (1 << (ASGrammarParser.T__57 - 32)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (ASGrammarParser.T__65 - 66)) | (1 << (ASGrammarParser.T__70 - 66)) | (1 << (ASGrammarParser.T__76 - 66)) | (1 << (ASGrammarParser.IDENTIFIER - 66)))) !== 0)) {
				{
				{
				this.state = 104;
				this.statement();
				}
				}
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 110;
			this.match(ASGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public delay(): DelayContext {
		let _localctx: DelayContext = new DelayContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ASGrammarParser.RULE_delay);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 112;
			this.match(ASGrammarParser.T__0);
			this.state = 113;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public click(): ClickContext {
		let _localctx: ClickContext = new ClickContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ASGrammarParser.RULE_click);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(ASGrammarParser.T__1);
			this.state = 116;
			this.match(ASGrammarParser.T__2);
			this.state = 117;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public openLocation(): OpenLocationContext {
		let _localctx: OpenLocationContext = new OpenLocationContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ASGrammarParser.RULE_openLocation);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			this.match(ASGrammarParser.T__3);
			this.state = 120;
			this.match(ASGrammarParser.T__4);
			this.state = 121;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public activate(): ActivateContext {
		let _localctx: ActivateContext = new ActivateContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ASGrammarParser.RULE_activate);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 123;
			this.match(ASGrammarParser.T__5);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public openFile(): OpenFileContext {
		let _localctx: OpenFileContext = new OpenFileContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ASGrammarParser.RULE_openFile);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 125;
			this.match(ASGrammarParser.T__3);
			this.state = 126;
			this.match(ASGrammarParser.T__6);
			this.state = 127;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public save(): SaveContext {
		let _localctx: SaveContext = new SaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ASGrammarParser.RULE_save);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 129;
			this.match(ASGrammarParser.T__7);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keystroke(): KeystrokeContext {
		let _localctx: KeystrokeContext = new KeystrokeContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ASGrammarParser.RULE_keystroke);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 131;
			this.match(ASGrammarParser.T__8);
			this.state = 139;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				{
				this.state = 132;
				this.expression();
				}
				break;

			case 2:
				{
				{
				this.state = 133;
				this.match(ASGrammarParser.T__9);
				this.state = 134;
				this.match(ASGrammarParser.T__10);
				this.state = 135;
				this.match(ASGrammarParser.T__11);
				this.state = 136;
				this.expression();
				this.state = 137;
				this.match(ASGrammarParser.T__12);
				}
				}
				break;
			}
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__13) {
				{
				this.state = 141;
				this.using();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public using(): UsingContext {
		let _localctx: UsingContext = new UsingContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ASGrammarParser.RULE_using);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 144;
			this.match(ASGrammarParser.T__13);
			this.state = 145;
			this.list();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public loopStatement(): LoopStatementContext {
		let _localctx: LoopStatementContext = new LoopStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ASGrammarParser.RULE_loopStatement);
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 147;
				this.repeatLoop();
				}
				break;
			case ASGrammarParser.T__21:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 148;
				this.whileLoop();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public repeatLoop(): RepeatLoopContext {
		let _localctx: RepeatLoopContext = new RepeatLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ASGrammarParser.RULE_repeatLoop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 151;
			this.match(ASGrammarParser.T__14);
			this.state = 169;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.T__15:
				{
				{
				this.state = 152;
				this.match(ASGrammarParser.T__15);
				this.state = 153;
				this.expression();
				this.state = 158;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASGrammarParser.T__16:
					{
					this.state = 154;
					this.match(ASGrammarParser.T__16);
					this.state = 155;
					this.range();
					}
					break;
				case ASGrammarParser.T__17:
					{
					this.state = 156;
					this.match(ASGrammarParser.T__17);
					this.state = 157;
					this.variable();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				}
				break;
			case ASGrammarParser.T__18:
				{
				{
				this.state = 160;
				this.match(ASGrammarParser.T__18);
				this.state = 161;
				this.expression();
				}
				}
				break;
			case ASGrammarParser.T__16:
				{
				{
				this.state = 162;
				this.match(ASGrammarParser.T__16);
				this.state = 163;
				this.range();
				this.state = 166;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASGrammarParser.T__19) {
					{
					this.state = 164;
					this.match(ASGrammarParser.T__19);
					this.state = 165;
					this.expression();
					}
				}

				}
				}
				break;
			case ASGrammarParser.T__9:
			case ASGrammarParser.T__27:
			case ASGrammarParser.T__59:
			case ASGrammarParser.T__68:
			case ASGrammarParser.T__76:
			case ASGrammarParser.T__79:
			case ASGrammarParser.T__81:
			case ASGrammarParser.T__82:
			case ASGrammarParser.T__84:
			case ASGrammarParser.BOOLEAN:
			case ASGrammarParser.STRING:
			case ASGrammarParser.INTEGER:
			case ASGrammarParser.IDENTIFIER:
				{
				this.state = 168;
				this.expression();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 171;
			this.statementList();
			this.state = 172;
			this.match(ASGrammarParser.T__20);
			this.state = 173;
			this.match(ASGrammarParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whileLoop(): WhileLoopContext {
		let _localctx: WhileLoopContext = new WhileLoopContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ASGrammarParser.RULE_whileLoop);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 175;
			this.match(ASGrammarParser.T__21);
			this.state = 176;
			this.expression();
			this.state = 177;
			this.match(ASGrammarParser.T__22);
			this.state = 178;
			this.statementList();
			this.state = 179;
			this.match(ASGrammarParser.T__20);
			this.state = 180;
			this.match(ASGrammarParser.T__21);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exit(): ExitContext {
		let _localctx: ExitContext = new ExitContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, ASGrammarParser.RULE_exit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 182;
			this.match(ASGrammarParser.T__23);
			this.state = 183;
			this.match(ASGrammarParser.T__14);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tell(): TellContext {
		let _localctx: TellContext = new TellContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, ASGrammarParser.RULE_tell);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 185;
			this.match(ASGrammarParser.T__24);
			this.state = 188;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.T__25:
			case ASGrammarParser.T__26:
				{
				this.state = 186;
				this.tellApp();
				}
				break;
			case ASGrammarParser.T__59:
			case ASGrammarParser.T__68:
			case ASGrammarParser.T__79:
			case ASGrammarParser.T__81:
			case ASGrammarParser.INTEGER:
			case ASGrammarParser.IDENTIFIER:
				{
				this.state = 187;
				this.tellId();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tellApp(): TellAppContext {
		let _localctx: TellAppContext = new TellAppContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, ASGrammarParser.RULE_tellApp);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			this.appType();
			this.state = 191;
			this.match(ASGrammarParser.STRING);
			this.state = 192;
			this.tellArg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tellArg(): TellArgContext {
		let _localctx: TellArgContext = new TellArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, ASGrammarParser.RULE_tellArg);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.T__30:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 194;
				this.toStatement();
				}
				break;
			case ASGrammarParser.T__0:
			case ASGrammarParser.T__1:
			case ASGrammarParser.T__3:
			case ASGrammarParser.T__5:
			case ASGrammarParser.T__7:
			case ASGrammarParser.T__8:
			case ASGrammarParser.T__14:
			case ASGrammarParser.T__21:
			case ASGrammarParser.T__23:
			case ASGrammarParser.T__24:
			case ASGrammarParser.T__28:
			case ASGrammarParser.T__31:
			case ASGrammarParser.T__32:
			case ASGrammarParser.T__57:
			case ASGrammarParser.T__65:
			case ASGrammarParser.T__70:
			case ASGrammarParser.T__76:
			case ASGrammarParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 195;
				this.statementList();
				this.state = 196;
				this.match(ASGrammarParser.T__20);
				this.state = 197;
				this.match(ASGrammarParser.T__24);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public appType(): AppTypeContext {
		let _localctx: AppTypeContext = new AppTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, ASGrammarParser.RULE_appType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 201;
			_la = this._input.LA(1);
			if (!(_la === ASGrammarParser.T__25 || _la === ASGrammarParser.T__26)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public tellId(): TellIdContext {
		let _localctx: TellIdContext = new TellIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, ASGrammarParser.RULE_tellId);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this.variable();
			this.state = 204;
			this.tellArg();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exists(): ExistsContext {
		let _localctx: ExistsContext = new ExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, ASGrammarParser.RULE_exists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 206;
			this.match(ASGrammarParser.T__27);
			this.state = 207;
			this.match(ASGrammarParser.T__25);
			this.state = 208;
			this.match(ASGrammarParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifBlock(): IfBlockContext {
		let _localctx: IfBlockContext = new IfBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, ASGrammarParser.RULE_ifBlock);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 210;
			this.ifStatement();
			this.state = 214;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 211;
					this.elseIf();
					}
					}
				}
				this.state = 216;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__29) {
				{
				this.state = 217;
				this.elseStatement();
				}
			}

			this.state = 220;
			this.match(ASGrammarParser.T__20);
			this.state = 221;
			this.match(ASGrammarParser.T__28);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseIf(): ElseIfContext {
		let _localctx: ElseIfContext = new ElseIfContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, ASGrammarParser.RULE_elseIf);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 223;
			this.match(ASGrammarParser.T__29);
			this.state = 224;
			this.ifStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public elseStatement(): ElseStatementContext {
		let _localctx: ElseStatementContext = new ElseStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, ASGrammarParser.RULE_elseStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 226;
			this.match(ASGrammarParser.T__29);
			this.state = 227;
			this.statementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStatement(): IfStatementContext {
		let _localctx: IfStatementContext = new IfStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, ASGrammarParser.RULE_ifStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 229;
			this.match(ASGrammarParser.T__28);
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__17 || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (ASGrammarParser.T__35 - 36)) | (1 << (ASGrammarParser.T__36 - 36)) | (1 << (ASGrammarParser.T__37 - 36)) | (1 << (ASGrammarParser.T__38 - 36)) | (1 << (ASGrammarParser.T__39 - 36)) | (1 << (ASGrammarParser.T__40 - 36)) | (1 << (ASGrammarParser.T__41 - 36)) | (1 << (ASGrammarParser.T__42 - 36)) | (1 << (ASGrammarParser.T__43 - 36)) | (1 << (ASGrammarParser.T__44 - 36)) | (1 << (ASGrammarParser.T__46 - 36)) | (1 << (ASGrammarParser.T__47 - 36)) | (1 << (ASGrammarParser.T__48 - 36)) | (1 << (ASGrammarParser.T__49 - 36)) | (1 << (ASGrammarParser.T__50 - 36)) | (1 << (ASGrammarParser.T__51 - 36)) | (1 << (ASGrammarParser.T__52 - 36)) | (1 << (ASGrammarParser.T__53 - 36)) | (1 << (ASGrammarParser.T__54 - 36)) | (1 << (ASGrammarParser.T__56 - 36)))) !== 0)) {
				{
				this.state = 230;
				this.operator();
				}
			}

			this.state = 233;
			this.expression();
			this.state = 234;
			this.match(ASGrammarParser.T__22);
			this.state = 235;
			this.statementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public toStatement(): ToStatementContext {
		let _localctx: ToStatementContext = new ToStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, ASGrammarParser.RULE_toStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 237;
			this.match(ASGrammarParser.T__30);
			this.state = 238;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statementList(): StatementListContext {
		let _localctx: StatementListContext = new StatementListContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, ASGrammarParser.RULE_statementList);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 240;
					this.statement();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 243;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStatement(): ReturnStatementContext {
		let _localctx: ReturnStatementContext = new ReturnStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, ASGrammarParser.RULE_returnStatement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 245;
			this.match(ASGrammarParser.T__31);
			this.state = 246;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, ASGrammarParser.RULE_statement);
		try {
			this.state = 267;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 248;
				this.loopStatement();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.errorHandler();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 250;
				this.openFile();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 251;
				this.onRun();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 252;
				this.exit();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 253;
				this.returnStatement();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 254;
				this.functionDeclaration();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 255;
				this.displayDialog();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 256;
				this.makeNew();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 257;
				this.keystroke();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 258;
				this.functionCall();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 259;
				this.set();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 260;
				this.ifBlock();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 261;
				this.delay();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 262;
				this.click();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 263;
				this.openLocation();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 264;
				this.activate();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 265;
				this.tell();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 266;
				this.match(ASGrammarParser.T__7);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameterList(): ParameterListContext {
		let _localctx: ParameterListContext = new ParameterListContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, ASGrammarParser.RULE_parameterList);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 269;
			this.match(ASGrammarParser.T__9);
			this.state = 270;
			this.arguments();
			this.state = 271;
			this.match(ASGrammarParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public onRun(): OnRunContext {
		let _localctx: OnRunContext = new OnRunContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, ASGrammarParser.RULE_onRun);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 273;
			this.match(ASGrammarParser.T__32);
			this.state = 274;
			this.match(ASGrammarParser.T__33);
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				{
				this.state = 275;
				this.parameterList();
				}
				break;

			case 2:
				{
				this.state = 276;
				this.match(ASGrammarParser.IDENTIFIER);
				}
				break;
			}
			this.state = 279;
			this.statementList();
			this.state = 280;
			this.match(ASGrammarParser.T__20);
			this.state = 281;
			this.match(ASGrammarParser.T__33);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDeclaration(): FunctionDeclarationContext {
		let _localctx: FunctionDeclarationContext = new FunctionDeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, ASGrammarParser.RULE_functionDeclaration);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 283;
			this.match(ASGrammarParser.T__32);
			this.state = 284;
			this.match(ASGrammarParser.IDENTIFIER);
			this.state = 286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__9) {
				{
				this.state = 285;
				this.parameterList();
				}
			}

			this.state = 288;
			this.functionBody();
			this.state = 289;
			this.match(ASGrammarParser.T__20);
			this.state = 290;
			this.match(ASGrammarParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionBody(): FunctionBodyContext {
		let _localctx: FunctionBodyContext = new FunctionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, ASGrammarParser.RULE_functionBody);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 292;
			this.statementList();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionCall(): FunctionCallContext {
		let _localctx: FunctionCallContext = new FunctionCallContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, ASGrammarParser.RULE_functionCall);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 294;
			this.match(ASGrammarParser.IDENTIFIER);
			this.state = 295;
			this.match(ASGrammarParser.T__9);
			this.state = 297;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__9 || _la === ASGrammarParser.T__27 || ((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (ASGrammarParser.T__59 - 60)) | (1 << (ASGrammarParser.T__68 - 60)) | (1 << (ASGrammarParser.T__76 - 60)) | (1 << (ASGrammarParser.T__79 - 60)) | (1 << (ASGrammarParser.T__81 - 60)) | (1 << (ASGrammarParser.T__82 - 60)) | (1 << (ASGrammarParser.T__84 - 60)) | (1 << (ASGrammarParser.BOOLEAN - 60)) | (1 << (ASGrammarParser.STRING - 60)))) !== 0) || _la === ASGrammarParser.INTEGER || _la === ASGrammarParser.IDENTIFIER) {
				{
				this.state = 296;
				this.arguments();
				}
			}

			this.state = 299;
			this.match(ASGrammarParser.T__12);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public arguments(): ArgumentsContext {
		let _localctx: ArgumentsContext = new ArgumentsContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, ASGrammarParser.RULE_arguments);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 301;
			this.expression();
			this.state = 306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASGrammarParser.T__34) {
				{
				{
				this.state = 302;
				this.match(ASGrammarParser.T__34);
				this.state = 303;
				this.expression();
				}
				}
				this.state = 308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public range(): RangeContext {
		let _localctx: RangeContext = new RangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, ASGrammarParser.RULE_range);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 309;
			this.expression();
			this.state = 310;
			this.match(ASGrammarParser.T__30);
			this.state = 311;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, ASGrammarParser.RULE_operator);
		try {
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				_localctx = new AddContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 313;
				this.match(ASGrammarParser.T__35);
				}
				break;

			case 2:
				_localctx = new SubtractContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 314;
				this.match(ASGrammarParser.T__36);
				}
				break;

			case 3:
				_localctx = new MultiplyContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 315;
				this.match(ASGrammarParser.T__37);
				}
				break;

			case 4:
				_localctx = new DivideContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 316;
				this.match(ASGrammarParser.T__38);
				}
				break;

			case 5:
				_localctx = new ModuloContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 317;
				this.match(ASGrammarParser.T__39);
				}
				break;

			case 6:
				_localctx = new ExponentContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 318;
				this.match(ASGrammarParser.T__40);
				}
				break;

			case 7:
				_localctx = new UnequalContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 322;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASGrammarParser.T__41:
					{
					this.state = 319;
					this.match(ASGrammarParser.T__41);
					}
					break;
				case ASGrammarParser.T__42:
					{
					this.state = 320;
					this.match(ASGrammarParser.T__42);
					this.state = 321;
					this.match(ASGrammarParser.T__43);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;

			case 8:
				_localctx = new EqualsContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 329;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 324;
					this.match(ASGrammarParser.T__44);
					}
					break;

				case 2:
					{
					this.state = 325;
					this.match(ASGrammarParser.T__42);
					this.state = 326;
					this.match(ASGrammarParser.T__45);
					this.state = 327;
					this.match(ASGrammarParser.T__30);
					}
					break;

				case 3:
					{
					this.state = 328;
					this.match(ASGrammarParser.T__42);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new GreaterThanContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 331;
				this.match(ASGrammarParser.T__46);
				}
				break;

			case 10:
				_localctx = new LessThanContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 332;
				this.match(ASGrammarParser.T__47);
				}
				break;

			case 11:
				_localctx = new GreaterThanEqualContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 333;
				this.match(ASGrammarParser.T__48);
				}
				break;

			case 12:
				_localctx = new LessThanEqualContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 334;
				this.match(ASGrammarParser.T__49);
				}
				break;

			case 13:
				_localctx = new ConcatContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 335;
				this.match(ASGrammarParser.T__50);
				}
				break;

			case 14:
				_localctx = new AndContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 336;
				this.match(ASGrammarParser.T__51);
				}
				break;

			case 15:
				_localctx = new OrContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 337;
				this.match(ASGrammarParser.T__52);
				}
				break;

			case 16:
				_localctx = new NotContext(_localctx);
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 338;
				this.match(ASGrammarParser.T__43);
				}
				break;

			case 17:
				_localctx = new ContainsContext(_localctx);
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 339;
				this.match(ASGrammarParser.T__53);
				}
				break;

			case 18:
				_localctx = new WhoseContext(_localctx);
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 340;
				this.match(ASGrammarParser.T__54);
				this.state = 346;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
				case 1:
					{
					this.state = 341;
					this.match(ASGrammarParser.T__9);
					this.state = 342;
					this.match(ASGrammarParser.T__55);
					this.state = 343;
					this.expression();
					this.state = 344;
					this.match(ASGrammarParser.T__12);
					}
					break;
				}
				}
				break;

			case 19:
				_localctx = new OfContext(_localctx);
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 348;
				this.match(ASGrammarParser.T__56);
				}
				break;

			case 20:
				_localctx = new InContext(_localctx);
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 349;
				this.match(ASGrammarParser.T__17);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public set(): SetContext {
		let _localctx: SetContext = new SetContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, ASGrammarParser.RULE_set);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 352;
			this.match(ASGrammarParser.T__57);
			this.state = 353;
			this.operation();
			this.state = 354;
			this.match(ASGrammarParser.T__30);
			this.state = 355;
			this.expression();
			this.state = 358;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__58) {
				{
				this.state = 356;
				this.match(ASGrammarParser.T__58);
				this.state = 357;
				_la = this._input.LA(1);
				if (!(_la === ASGrammarParser.T__59 || _la === ASGrammarParser.IDENTIFIER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public setProperty(): SetPropertyContext {
		let _localctx: SetPropertyContext = new SetPropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, ASGrammarParser.RULE_setProperty);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 360;
			this.match(ASGrammarParser.T__60);
			this.state = 361;
			this.match(ASGrammarParser.IDENTIFIER);
			this.state = 362;
			this.match(ASGrammarParser.T__61);
			this.state = 363;
			this.basicData();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public listener(): ListenerContext {
		let _localctx: ListenerContext = new ListenerContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, ASGrammarParser.RULE_listener);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.T__60:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 365;
				this.match(ASGrammarParser.T__60);
				this.state = 366;
				this.match(ASGrammarParser.T__62);
				this.state = 367;
				this.match(ASGrammarParser.IDENTIFIER);
				}
				break;
			case ASGrammarParser.T__32:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 368;
				this.match(ASGrammarParser.T__32);
				this.state = 375;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASGrammarParser.T__33:
					{
					this.state = 369;
					this.match(ASGrammarParser.T__33);
					}
					break;
				case ASGrammarParser.T__3:
					{
					this.state = 370;
					this.match(ASGrammarParser.T__3);
					this.state = 371;
					this.match(ASGrammarParser.T__4);
					this.state = 372;
					this.variable();
					}
					break;
				case ASGrammarParser.T__63:
					{
					this.state = 373;
					this.match(ASGrammarParser.T__63);
					}
					break;
				case ASGrammarParser.T__64:
					{
					this.state = 374;
					this.match(ASGrammarParser.T__64);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public errorHandler(): ErrorHandlerContext {
		let _localctx: ErrorHandlerContext = new ErrorHandlerContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, ASGrammarParser.RULE_errorHandler);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 379;
			this.match(ASGrammarParser.T__65);
			this.state = 380;
			this.statementList();
			this.state = 387;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__32) {
				{
				this.state = 381;
				this.match(ASGrammarParser.T__32);
				this.state = 382;
				this.match(ASGrammarParser.T__66);
				this.state = 383;
				this.match(ASGrammarParser.IDENTIFIER);
				this.state = 384;
				this.match(ASGrammarParser.T__67);
				this.state = 385;
				this.match(ASGrammarParser.IDENTIFIER);
				this.state = 386;
				this.statementList();
				}
			}

			this.state = 389;
			this.match(ASGrammarParser.T__20);
			this.state = 390;
			this.match(ASGrammarParser.T__65);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operation(): OperationContext {
		let _localctx: OperationContext = new OperationContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, ASGrammarParser.RULE_operation);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 392;
			this.value();
			this.state = 398;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 393;
					this.operator();
					this.state = 394;
					this.value();
					}
					}
				}
				this.state = 400;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, ASGrammarParser.RULE_expression);
		try {
			let _alt: number;
			this.state = 413;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.T__9:
				this.enterOuterAlt(_localctx, 1);
				{
				{
				this.state = 401;
				this.match(ASGrammarParser.T__9);
				this.state = 402;
				this.expression();
				this.state = 403;
				this.match(ASGrammarParser.T__12);
				this.state = 409;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 404;
						this.operator();
						this.state = 405;
						this.expression();
						}
						}
					}
					this.state = 411;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 27, this._ctx);
				}
				}
				}
				break;
			case ASGrammarParser.T__27:
			case ASGrammarParser.T__59:
			case ASGrammarParser.T__68:
			case ASGrammarParser.T__76:
			case ASGrammarParser.T__79:
			case ASGrammarParser.T__81:
			case ASGrammarParser.T__82:
			case ASGrammarParser.T__84:
			case ASGrammarParser.BOOLEAN:
			case ASGrammarParser.STRING:
			case ASGrammarParser.INTEGER:
			case ASGrammarParser.IDENTIFIER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 412;
				this.operation();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let _localctx: ValueContext = new ValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, ASGrammarParser.RULE_value);
		let _la: number;
		try {
			this.state = 445;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 415;
				this.missingValue();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 416;
				this.match(ASGrammarParser.T__68);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 417;
				this.exists();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 418;
				this.functionCall();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				{
				this.state = 419;
				this.match(ASGrammarParser.T__59);
				this.state = 420;
				this.match(ASGrammarParser.T__69);
				this.state = 421;
				this.match(ASGrammarParser.T__56);
				this.state = 422;
				this.match(ASGrammarParser.T__9);
				this.state = 423;
				this.match(ASGrammarParser.T__70);
				this.state = 424;
				this.match(ASGrammarParser.T__71);
				this.state = 425;
				this.expression();
				this.state = 429;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASGrammarParser.T__72) {
					{
					this.state = 426;
					this.match(ASGrammarParser.T__72);
					this.state = 427;
					this.match(ASGrammarParser.T__73);
					this.state = 428;
					this.expression();
					}
				}

				this.state = 431;
				this.match(ASGrammarParser.T__12);
				}
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 433;
				this.match(ASGrammarParser.T__59);
				this.state = 434;
				this.expression();
				this.state = 435;
				this.match(ASGrammarParser.T__74);
				this.state = 436;
				this.expression();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 438;
				this.makeNew();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 439;
				this.match(ASGrammarParser.INTEGER);
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 440;
				this.match(ASGrammarParser.STRING);
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 441;
				this.match(ASGrammarParser.BOOLEAN);
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 442;
				this.variable();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 443;
				this.record();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 444;
				this.list();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public withProperties(): WithPropertiesContext {
		let _localctx: WithPropertiesContext = new WithPropertiesContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, ASGrammarParser.RULE_withProperties);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			this.match(ASGrammarParser.T__15);
			this.state = 448;
			this.match(ASGrammarParser.T__75);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public makeNew(): MakeNewContext {
		let _localctx: MakeNewContext = new MakeNewContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, ASGrammarParser.RULE_makeNew);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 450;
			this.match(ASGrammarParser.T__76);
			this.state = 451;
			this.match(ASGrammarParser.T__77);
			this.state = 452;
			this.variable();
			this.state = 461;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__78 || _la === ASGrammarParser.T__80) {
				{
				this.state = 458;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case ASGrammarParser.T__78:
					{
					this.state = 453;
					this.match(ASGrammarParser.T__78);
					this.state = 454;
					this.match(ASGrammarParser.T__79);
					}
					break;
				case ASGrammarParser.T__80:
					{
					this.state = 455;
					this.match(ASGrammarParser.T__80);
					this.state = 456;
					this.match(ASGrammarParser.T__20);
					this.state = 457;
					this.match(ASGrammarParser.T__56);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 460;
				this.variable();
				}
			}

			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__15) {
				{
				this.state = 463;
				this.withProperties();
				this.state = 464;
				this.record();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public variable(): VariableContext {
		let _localctx: VariableContext = new VariableContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, ASGrammarParser.RULE_variable);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === ASGrammarParser.T__79 || _la === ASGrammarParser.T__81) {
				{
				{
				this.state = 468;
				this.modifier();
				}
				}
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 475;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				this.state = 474;
				this.match(ASGrammarParser.IDENTIFIER);
				}
				break;
			}
			this.state = 477;
			this.property();
			this.state = 491;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 478;
					this.match(ASGrammarParser.T__56);
					this.state = 482;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === ASGrammarParser.T__79 || _la === ASGrammarParser.T__81) {
						{
						{
						this.state = 479;
						this.modifier();
						}
						}
						this.state = 484;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 486;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						this.state = 485;
						this.match(ASGrammarParser.IDENTIFIER);
						}
						break;
					}
					this.state = 488;
					this.property();
					}
					}
				}
				this.state = 493;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, ASGrammarParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 494;
			_la = this._input.LA(1);
			if (!(_la === ASGrammarParser.T__79 || _la === ASGrammarParser.T__81)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public property(): PropertyContext {
		let _localctx: PropertyContext = new PropertyContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, ASGrammarParser.RULE_property);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			_la = this._input.LA(1);
			if (!(_la === ASGrammarParser.T__59 || _la === ASGrammarParser.T__68 || _la === ASGrammarParser.INTEGER || _la === ASGrammarParser.IDENTIFIER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public record(): RecordContext {
		let _localctx: RecordContext = new RecordContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, ASGrammarParser.RULE_record);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 498;
			this.match(ASGrammarParser.T__82);
			this.state = 505;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 499;
				this.variable();
				this.state = 500;
				this.match(ASGrammarParser.T__61);
				this.state = 501;
				this.expression();
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASGrammarParser.T__34) {
					{
					this.state = 502;
					this.match(ASGrammarParser.T__34);
					}
				}

				}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & ((1 << (ASGrammarParser.T__59 - 60)) | (1 << (ASGrammarParser.T__68 - 60)) | (1 << (ASGrammarParser.T__79 - 60)) | (1 << (ASGrammarParser.T__81 - 60)))) !== 0) || _la === ASGrammarParser.INTEGER || _la === ASGrammarParser.IDENTIFIER);
			this.state = 509;
			this.match(ASGrammarParser.T__83);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public list(): ListContext {
		let _localctx: ListContext = new ListContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, ASGrammarParser.RULE_list);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(ASGrammarParser.T__82);
			this.state = 512;
			this.arguments();
			this.state = 513;
			this.match(ASGrammarParser.T__83);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public basicData(): BasicDataContext {
		let _localctx: BasicDataContext = new BasicDataContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, ASGrammarParser.RULE_basicData);
		try {
			this.state = 519;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case ASGrammarParser.INTEGER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 515;
				this.match(ASGrammarParser.INTEGER);
				}
				break;
			case ASGrammarParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 516;
				this.match(ASGrammarParser.BOOLEAN);
				}
				break;
			case ASGrammarParser.STRING:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 517;
				this.match(ASGrammarParser.STRING);
				}
				break;
			case ASGrammarParser.T__84:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 518;
				this.missingValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public missingValue(): MissingValueContext {
		let _localctx: MissingValueContext = new MissingValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, ASGrammarParser.RULE_missingValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 521;
			this.match(ASGrammarParser.T__84);
			this.state = 522;
			this.match(ASGrammarParser.T__68);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public displayDialog(): DisplayDialogContext {
		let _localctx: DisplayDialogContext = new DisplayDialogContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, ASGrammarParser.RULE_displayDialog);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 524;
			this.match(ASGrammarParser.T__70);
			this.state = 525;
			this.match(ASGrammarParser.T__71);
			this.state = 526;
			this.match(ASGrammarParser.STRING);
			this.state = 536;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ASGrammarParser.T__85) {
				{
				this.state = 527;
				this.match(ASGrammarParser.T__85);
				this.state = 528;
				this.match(ASGrammarParser.T__82);
				this.state = 529;
				this.match(ASGrammarParser.STRING);
				this.state = 530;
				this.match(ASGrammarParser.T__83);
				this.state = 534;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ASGrammarParser.T__72) {
					{
					this.state = 531;
					this.match(ASGrammarParser.T__72);
					this.state = 532;
					this.match(ASGrammarParser.T__2);
					this.state = 533;
					this.match(ASGrammarParser.STRING);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03_\u021D\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04#" +
		"\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t+" +
		"\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x044" +
		"\t4\x045\t5\x03\x02\x07\x02l\n\x02\f\x02\x0E\x02o\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\x8E\n\t\x03" +
		"\t\x05\t\x91\n\t\x03\n\x03\n\x03\n\x03\v\x03\v\x05\v\x98\n\v\x03\f\x03" +
		"\f\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\xA1\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\f\x03\f\x05\f\xA9\n\f\x03\f\x05\f\xAC\n\f\x03\f\x03\f\x03\f\x03\f" +
		"\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\xBF\n\x0F\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11\xCA\n\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x15\x03" +
		"\x15\x07\x15\xD7\n\x15\f\x15\x0E\x15\xDA\v\x15\x03\x15\x05\x15\xDD\n\x15" +
		"\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17" +
		"\x03\x18\x03\x18\x05\x18\xEA\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03" +
		"\x19\x03\x19\x03\x19\x03\x1A\x06\x1A\xF4\n\x1A\r\x1A\x0E\x1A\xF5\x03\x1B" +
		"\x03\x1B\x03\x1B\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C\x03\x1C" +
		"\x03\x1C\x03\x1C\x03\x1C\x05\x1C\u010E\n\x1C\x03\x1D\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u0118\n\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0121\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03 \x03 \x03!\x03!\x03!\x05!\u012C\n!\x03!\x03!" +
		"\x03\"\x03\"\x03\"\x07\"\u0133\n\"\f\"\x0E\"\u0136\v\"\x03#\x03#\x03#" +
		"\x03#\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u0145\n$\x03$" +
		"\x03$\x03$\x03$\x03$\x05$\u014C\n$\x03$\x03$\x03$\x03$\x03$\x03$\x03$" +
		"\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x03$\x05$\u015D\n$\x03$\x03$\x05$" +
		"\u0161\n$\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0169\n%\x03&\x03&\x03&\x03" +
		"&\x03&\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x03\'\x05" +
		"\'\u017A\n\'\x05\'\u017C\n\'\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x03(\x05" +
		"(\u0186\n(\x03(\x03(\x03(\x03)\x03)\x03)\x03)\x07)\u018F\n)\f)\x0E)\u0192" +
		"\v)\x03*\x03*\x03*\x03*\x03*\x03*\x07*\u019A\n*\f*\x0E*\u019D\v*\x03*" +
		"\x05*\u01A0\n*\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x05+\u01B0\n+\x03+\x03+\x03+\x03+\x03+\x03+\x03+\x03+" +
		"\x03+\x03+\x03+\x03+\x03+\x03+\x05+\u01C0\n+\x03,\x03,\x03,\x03-\x03-" +
		"\x03-\x03-\x03-\x03-\x03-\x03-\x05-\u01CD\n-\x03-\x05-\u01D0\n-\x03-\x03" +
		"-\x03-\x05-\u01D5\n-\x03.\x07.\u01D8\n.\f.\x0E.\u01DB\v.\x03.\x05.\u01DE" +
		"\n.\x03.\x03.\x03.\x07.\u01E3\n.\f.\x0E.\u01E6\v.\x03.\x05.\u01E9\n.\x03" +
		".\x07.\u01EC\n.\f.\x0E.\u01EF\v.\x03/\x03/\x030\x030\x031\x031\x031\x03" +
		"1\x031\x051\u01FA\n1\x061\u01FC\n1\r1\x0E1\u01FD\x031\x031\x032\x032\x03" +
		"2\x032\x033\x033\x033\x033\x053\u020A\n3\x034\x034\x034\x035\x035\x03" +
		"5\x035\x035\x035\x035\x035\x035\x035\x055\u0219\n5\x055\u021B\n5\x035" +
		"\x02\x02\x026\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02" +
		"\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02" +
		"&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02" +
		"B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02" +
		"^\x02`\x02b\x02d\x02f\x02h\x02\x02\x06\x03\x02\x1C\x1D\x04\x02>>__\x04" +
		"\x02RRTT\x05\x02>>GG^_\x02\u024A\x02m\x03\x02\x02\x02\x04r\x03\x02\x02" +
		"\x02\x06u\x03\x02\x02\x02\by\x03\x02\x02\x02\n}\x03\x02\x02\x02\f\x7F" +
		"\x03\x02\x02\x02\x0E\x83\x03\x02\x02\x02\x10\x85\x03\x02\x02\x02\x12\x92" +
		"\x03\x02\x02\x02\x14\x97\x03\x02\x02\x02\x16\x99\x03\x02\x02\x02\x18\xB1" +
		"\x03\x02\x02\x02\x1A\xB8\x03\x02\x02\x02\x1C\xBB\x03\x02\x02\x02\x1E\xC0" +
		"\x03\x02\x02\x02 \xC9\x03\x02\x02\x02\"\xCB\x03\x02\x02\x02$\xCD\x03\x02" +
		"\x02\x02&\xD0\x03\x02\x02\x02(\xD4\x03\x02\x02\x02*\xE1\x03\x02\x02\x02" +
		",\xE4\x03\x02\x02\x02.\xE7\x03\x02\x02\x020\xEF\x03\x02\x02\x022\xF3\x03" +
		"\x02\x02\x024\xF7\x03\x02\x02\x026\u010D\x03\x02\x02\x028\u010F\x03\x02" +
		"\x02\x02:\u0113\x03\x02\x02\x02<\u011D\x03\x02\x02\x02>\u0126\x03\x02" +
		"\x02\x02@\u0128\x03\x02\x02\x02B\u012F\x03\x02\x02\x02D\u0137\x03\x02" +
		"\x02\x02F\u0160\x03\x02\x02\x02H\u0162\x03\x02\x02\x02J\u016A\x03\x02" +
		"\x02\x02L\u017B\x03\x02\x02\x02N\u017D\x03\x02\x02\x02P\u018A\x03\x02" +
		"\x02\x02R\u019F\x03\x02\x02\x02T\u01BF\x03\x02\x02\x02V\u01C1\x03\x02" +
		"\x02\x02X\u01C4\x03\x02\x02\x02Z\u01D9\x03\x02\x02\x02\\\u01F0\x03\x02" +
		"\x02\x02^\u01F2\x03\x02\x02\x02`\u01F4\x03\x02\x02\x02b\u0201\x03\x02" +
		"\x02\x02d\u0209\x03\x02\x02\x02f\u020B\x03\x02\x02\x02h\u020E\x03\x02" +
		"\x02\x02jl\x056\x1C\x02kj\x03\x02\x02\x02lo\x03\x02\x02\x02mk\x03\x02" +
		"\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02\x02om\x03\x02\x02\x02pq\x07\x02" +
		"\x02\x03q\x03\x03\x02\x02\x02rs\x07\x03\x02\x02st\x05R*\x02t\x05\x03\x02" +
		"\x02\x02uv\x07\x04\x02\x02vw\x07\x05\x02\x02wx\x05R*\x02x\x07\x03\x02" +
		"\x02\x02yz\x07\x06\x02\x02z{\x07\x07\x02\x02{|\x05R*\x02|\t\x03\x02\x02" +
		"\x02}~\x07\b\x02\x02~\v\x03\x02\x02\x02\x7F\x80\x07\x06\x02\x02\x80\x81" +
		"\x07\t\x02\x02\x81\x82\x05R*\x02\x82\r\x03\x02\x02\x02\x83\x84\x07\n\x02" +
		"\x02\x84\x0F\x03\x02\x02\x02\x85\x8D\x07\v\x02\x02\x86\x8E\x05R*\x02\x87" +
		"\x88\x07\f\x02\x02\x88\x89\x07\r\x02\x02\x89\x8A\x07\x0E\x02\x02\x8A\x8B" +
		"\x05R*\x02\x8B\x8C\x07\x0F\x02\x02\x8C\x8E\x03\x02\x02\x02\x8D\x86\x03" +
		"\x02\x02\x02\x8D\x87\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x91\x05" +
		"\x12\n\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x11\x03" +
		"\x02\x02\x02\x92\x93\x07\x10\x02\x02\x93\x94\x05b2\x02\x94\x13\x03\x02" +
		"\x02\x02\x95\x98\x05\x16\f\x02\x96\x98\x05\x18\r\x02\x97\x95\x03\x02\x02" +
		"\x02\x97\x96\x03\x02\x02\x02\x98\x15\x03\x02\x02\x02\x99\xAB\x07\x11\x02" +
		"\x02\x9A\x9B\x07\x12\x02\x02\x9B\xA0\x05R*\x02\x9C\x9D\x07\x13\x02\x02" +
		"\x9D\xA1\x05D#\x02\x9E\x9F\x07\x14\x02\x02\x9F\xA1\x05Z.\x02\xA0\x9C\x03" +
		"\x02\x02\x02\xA0\x9E\x03\x02\x02\x02\xA1\xAC\x03\x02\x02\x02\xA2\xA3\x07" +
		"\x15\x02\x02\xA3\xAC\x05R*\x02\xA4\xA5\x07\x13\x02\x02\xA5\xA8\x05D#\x02" +
		"\xA6\xA7\x07\x16\x02\x02\xA7\xA9\x05R*\x02\xA8\xA6\x03\x02\x02\x02\xA8" +
		"\xA9\x03\x02\x02\x02\xA9\xAC\x03\x02\x02\x02\xAA\xAC\x05R*\x02\xAB\x9A" +
		"\x03\x02\x02\x02\xAB\xA2\x03\x02\x02\x02\xAB\xA4\x03\x02\x02\x02\xAB\xAA" +
		"\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x052\x1A\x02\xAE\xAF" +
		"\x07\x17\x02\x02\xAF\xB0\x07\x11\x02\x02\xB0\x17\x03\x02\x02\x02\xB1\xB2" +
		"\x07\x18\x02\x02\xB2\xB3\x05R*\x02\xB3\xB4\x07\x19\x02\x02\xB4\xB5\x05" +
		"2\x1A\x02\xB5\xB6\x07\x17\x02\x02\xB6\xB7\x07\x18\x02\x02\xB7\x19\x03" +
		"\x02\x02\x02\xB8\xB9\x07\x1A\x02\x02\xB9\xBA\x07\x11\x02\x02\xBA\x1B\x03" +
		"\x02\x02\x02\xBB\xBE\x07\x1B\x02\x02\xBC\xBF\x05\x1E\x10\x02\xBD\xBF\x05" +
		"$\x13\x02\xBE\xBC\x03\x02\x02\x02\xBE\xBD\x03\x02\x02\x02\xBF\x1D\x03" +
		"\x02\x02\x02\xC0\xC1\x05\"\x12\x02\xC1\xC2\x07]\x02\x02\xC2\xC3\x05 \x11" +
		"\x02\xC3\x1F\x03\x02\x02\x02\xC4\xCA\x050\x19\x02\xC5\xC6\x052\x1A\x02" +
		"\xC6\xC7\x07\x17\x02\x02\xC7\xC8\x07\x1B\x02\x02\xC8\xCA\x03\x02\x02\x02" +
		"\xC9\xC4\x03\x02\x02\x02\xC9\xC5\x03\x02\x02\x02\xCA!\x03\x02\x02\x02" +
		"\xCB\xCC\t\x02\x02\x02\xCC#\x03\x02\x02\x02\xCD\xCE\x05Z.\x02\xCE\xCF" +
		"\x05 \x11\x02\xCF%\x03\x02\x02\x02\xD0\xD1\x07\x1E\x02\x02\xD1\xD2\x07" +
		"\x1C\x02\x02\xD2\xD3\x07]\x02\x02\xD3\'\x03\x02\x02\x02\xD4\xD8\x05.\x18" +
		"\x02\xD5\xD7\x05*\x16\x02\xD6\xD5\x03\x02\x02\x02\xD7\xDA\x03\x02\x02" +
		"\x02\xD8\xD6\x03\x02\x02\x02\xD8\xD9\x03\x02\x02\x02\xD9\xDC\x03\x02\x02" +
		"\x02\xDA\xD8\x03\x02\x02\x02\xDB\xDD\x05,\x17\x02\xDC\xDB\x03\x02\x02" +
		"\x02\xDC\xDD\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xDF\x07\x17\x02" +
		"\x02\xDF\xE0\x07\x1F\x02\x02\xE0)\x03\x02\x02\x02\xE1\xE2\x07 \x02\x02" +
		"\xE2\xE3\x05.\x18\x02\xE3+\x03\x02\x02\x02\xE4\xE5\x07 \x02\x02\xE5\xE6" +
		"\x052\x1A\x02\xE6-\x03\x02\x02\x02\xE7\xE9\x07\x1F\x02\x02\xE8\xEA\x05" +
		"F$\x02\xE9\xE8\x03\x02\x02\x02\xE9\xEA\x03\x02\x02\x02\xEA\xEB\x03\x02" +
		"\x02\x02\xEB\xEC\x05R*\x02\xEC\xED\x07\x19\x02\x02\xED\xEE\x052\x1A\x02" +
		"\xEE/\x03\x02\x02\x02\xEF\xF0\x07!\x02\x02\xF0\xF1\x056\x1C\x02\xF11\x03" +
		"\x02\x02\x02\xF2\xF4\x056\x1C\x02\xF3\xF2\x03\x02\x02\x02\xF4\xF5\x03" +
		"\x02\x02\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF63\x03" +
		"\x02\x02\x02\xF7\xF8\x07\"\x02\x02\xF8\xF9\x05R*\x02\xF95\x03\x02\x02" +
		"\x02\xFA\u010E\x05\x14\v\x02\xFB\u010E\x05N(\x02\xFC\u010E\x05\f\x07\x02" +
		"\xFD\u010E\x05:\x1E\x02\xFE\u010E\x05\x1A\x0E\x02\xFF\u010E\x054\x1B\x02" +
		"\u0100\u010E\x05<\x1F\x02\u0101\u010E\x05h5\x02\u0102\u010E\x05X-\x02" +
		"\u0103\u010E\x05\x10\t\x02\u0104\u010E\x05@!\x02\u0105\u010E\x05H%\x02" +
		"\u0106\u010E\x05(\x15\x02\u0107\u010E\x05\x04\x03\x02\u0108\u010E\x05" +
		"\x06\x04\x02\u0109\u010E\x05\b\x05\x02\u010A\u010E\x05\n\x06\x02\u010B" +
		"\u010E\x05\x1C\x0F\x02\u010C\u010E\x07\n\x02\x02\u010D\xFA\x03\x02\x02" +
		"\x02\u010D\xFB\x03\x02\x02\x02\u010D\xFC\x03\x02\x02\x02\u010D\xFD\x03" +
		"\x02\x02\x02\u010D\xFE\x03\x02\x02\x02\u010D\xFF\x03\x02\x02\x02\u010D" +
		"\u0100\x03\x02\x02\x02\u010D\u0101\x03\x02\x02\x02\u010D\u0102\x03\x02" +
		"\x02\x02\u010D\u0103\x03\x02\x02\x02\u010D\u0104\x03\x02\x02\x02\u010D" +
		"\u0105\x03\x02\x02\x02\u010D\u0106\x03\x02\x02\x02\u010D\u0107\x03\x02" +
		"\x02\x02\u010D\u0108\x03\x02\x02\x02\u010D\u0109\x03\x02\x02\x02\u010D" +
		"\u010A\x03\x02\x02\x02\u010D\u010B\x03\x02\x02\x02\u010D\u010C\x03\x02" +
		"\x02\x02\u010E7\x03\x02\x02\x02\u010F\u0110\x07\f\x02\x02\u0110\u0111" +
		"\x05B\"\x02\u0111\u0112\x07\x0F\x02\x02\u01129\x03\x02\x02\x02\u0113\u0114" +
		"\x07#\x02\x02\u0114\u0117\x07$\x02\x02\u0115\u0118\x058\x1D\x02\u0116" +
		"\u0118\x07_\x02\x02\u0117\u0115\x03\x02\x02\x02\u0117\u0116\x03\x02\x02" +
		"\x02\u0117\u0118\x03\x02\x02\x02\u0118\u0119\x03\x02\x02\x02\u0119\u011A" +
		"\x052\x1A\x02\u011A\u011B\x07\x17\x02\x02\u011B\u011C\x07$\x02\x02\u011C" +
		";\x03\x02\x02\x02\u011D\u011E\x07#\x02\x02\u011E\u0120\x07_\x02\x02\u011F" +
		"\u0121\x058\x1D\x02\u0120\u011F\x03\x02\x02\x02\u0120\u0121\x03\x02\x02" +
		"\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0123\x05> \x02\u0123\u0124\x07" +
		"\x17\x02\x02\u0124\u0125\x07_\x02\x02\u0125=\x03\x02\x02\x02\u0126\u0127" +
		"\x052\x1A\x02\u0127?\x03\x02\x02\x02\u0128\u0129\x07_\x02\x02\u0129\u012B" +
		"\x07\f\x02\x02\u012A\u012C\x05B\"\x02\u012B\u012A\x03\x02\x02\x02\u012B" +
		"\u012C\x03\x02\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\x0F" +
		"\x02\x02\u012EA\x03\x02\x02\x02\u012F\u0134\x05R*\x02\u0130\u0131\x07" +
		"%\x02\x02\u0131\u0133\x05R*\x02\u0132\u0130\x03\x02\x02\x02\u0133\u0136" +
		"\x03\x02\x02\x02\u0134\u0132\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02" +
		"\u0135C\x03\x02\x02\x02\u0136\u0134\x03\x02\x02\x02\u0137\u0138\x05R*" +
		"\x02\u0138\u0139\x07!\x02\x02\u0139\u013A\x05R*\x02\u013AE\x03\x02\x02" +
		"\x02\u013B\u0161\x07&\x02\x02\u013C\u0161\x07\'\x02\x02\u013D\u0161\x07" +
		"(\x02\x02\u013E\u0161\x07)\x02\x02\u013F\u0161\x07*\x02\x02\u0140\u0161" +
		"\x07+\x02\x02\u0141\u0145\x07,\x02\x02\u0142\u0143\x07-\x02\x02\u0143" +
		"\u0145\x07.\x02\x02\u0144\u0141\x03\x02\x02\x02\u0144\u0142\x03\x02\x02" +
		"\x02\u0145\u0161\x03\x02\x02\x02\u0146\u014C\x07/\x02\x02\u0147\u0148" +
		"\x07-\x02\x02\u0148\u0149\x070\x02\x02\u0149\u014C\x07!\x02\x02\u014A" +
		"\u014C\x07-\x02\x02\u014B\u0146\x03\x02\x02\x02\u014B\u0147\x03\x02\x02" +
		"\x02\u014B\u014A\x03\x02\x02\x02\u014C\u0161\x03\x02\x02\x02\u014D\u0161" +
		"\x071\x02\x02\u014E\u0161\x072\x02\x02\u014F\u0161\x073\x02\x02\u0150" +
		"\u0161\x074\x02\x02\u0151\u0161\x075\x02\x02\u0152\u0161\x076\x02\x02" +
		"\u0153\u0161\x077\x02\x02\u0154\u0161\x07.\x02\x02\u0155\u0161\x078\x02" +
		"\x02\u0156\u015C\x079\x02\x02\u0157\u0158\x07\f\x02\x02\u0158\u0159\x07" +
		":\x02\x02\u0159\u015A\x05R*\x02\u015A\u015B\x07\x0F\x02\x02\u015B\u015D" +
		"\x03\x02\x02\x02\u015C\u0157\x03\x02\x02\x02\u015C\u015D\x03\x02\x02\x02" +
		"\u015D\u0161\x03\x02\x02\x02\u015E\u0161\x07;\x02\x02\u015F\u0161\x07" +
		"\x14\x02\x02\u0160\u013B\x03\x02\x02\x02\u0160\u013C\x03\x02\x02\x02\u0160" +
		"\u013D\x03\x02\x02\x02\u0160\u013E\x03\x02\x02\x02\u0160\u013F\x03\x02" +
		"\x02\x02\u0160\u0140\x03\x02\x02\x02\u0160\u0144\x03\x02\x02\x02\u0160" +
		"\u014B\x03\x02\x02\x02\u0160\u014D\x03\x02\x02\x02\u0160\u014E\x03\x02" +
		"\x02\x02\u0160\u014F\x03\x02\x02\x02\u0160\u0150\x03\x02\x02\x02\u0160" +
		"\u0151\x03\x02\x02\x02\u0160\u0152\x03\x02\x02\x02\u0160\u0153\x03\x02" +
		"\x02\x02\u0160\u0154\x03\x02\x02\x02\u0160\u0155\x03\x02\x02\x02\u0160" +
		"\u0156\x03\x02\x02\x02\u0160\u015E\x03\x02\x02\x02\u0160\u015F\x03\x02" +
		"\x02\x02\u0161G\x03\x02\x02\x02\u0162\u0163\x07<\x02\x02\u0163\u0164\x05" +
		"P)\x02\u0164\u0165\x07!\x02\x02\u0165\u0168\x05R*\x02\u0166\u0167\x07" +
		"=\x02\x02\u0167\u0169\t\x03\x02\x02\u0168\u0166\x03\x02\x02\x02\u0168" +
		"\u0169\x03\x02\x02\x02\u0169I\x03\x02\x02\x02\u016A\u016B\x07?\x02\x02" +
		"\u016B\u016C\x07_\x02\x02\u016C\u016D\x07@\x02\x02\u016D\u016E\x05d3\x02" +
		"\u016EK\x03\x02\x02\x02\u016F\u0170\x07?\x02\x02\u0170\u0171\x07A\x02" +
		"\x02\u0171\u017C\x07_\x02\x02\u0172\u0179\x07#\x02\x02\u0173\u017A\x07" +
		"$\x02\x02\u0174\u0175\x07\x06\x02\x02\u0175\u0176\x07\x07\x02\x02\u0176" +
		"\u017A\x05Z.\x02\u0177\u017A\x07B\x02\x02\u0178\u017A\x07C\x02\x02\u0179" +
		"\u0173\x03\x02\x02\x02\u0179\u0174\x03\x02\x02\x02\u0179\u0177\x03\x02" +
		"\x02\x02\u0179\u0178\x03\x02\x02\x02\u017A\u017C\x03\x02\x02\x02\u017B" +
		"\u016F\x03\x02\x02\x02\u017B\u0172\x03\x02\x02\x02\u017CM\x03\x02\x02" +
		"\x02\u017D\u017E\x07D\x02\x02\u017E\u0185\x052\x1A\x02\u017F\u0180\x07" +
		"#\x02\x02\u0180\u0181\x07E\x02\x02\u0181\u0182\x07_\x02\x02\u0182\u0183" +
		"\x07F\x02\x02\u0183\u0184\x07_\x02\x02\u0184\u0186\x052\x1A\x02\u0185" +
		"\u017F\x03\x02\x02\x02\u0185\u0186\x03\x02\x02\x02\u0186\u0187\x03\x02" +
		"\x02\x02\u0187\u0188\x07\x17\x02\x02\u0188\u0189\x07D\x02\x02\u0189O\x03" +
		"\x02\x02\x02\u018A\u0190\x05T+\x02\u018B\u018C\x05F$\x02\u018C\u018D\x05" +
		"T+\x02\u018D\u018F\x03\x02\x02\x02\u018E\u018B\x03\x02\x02\x02\u018F\u0192" +
		"\x03\x02\x02\x02\u0190\u018E\x03\x02\x02\x02\u0190\u0191\x03\x02\x02\x02" +
		"\u0191Q\x03\x02\x02\x02\u0192\u0190\x03\x02\x02\x02\u0193\u0194\x07\f" +
		"\x02\x02\u0194\u0195\x05R*\x02\u0195\u019B\x07\x0F\x02\x02\u0196\u0197" +
		"\x05F$\x02\u0197\u0198\x05R*\x02\u0198\u019A\x03\x02\x02\x02\u0199\u0196" +
		"\x03\x02\x02\x02\u019A\u019D\x03\x02\x02\x02\u019B\u0199\x03\x02\x02\x02" +
		"\u019B\u019C\x03\x02\x02\x02\u019C\u01A0\x03\x02\x02\x02\u019D\u019B\x03" +
		"\x02\x02\x02\u019E\u01A0\x05P)\x02\u019F\u0193\x03\x02\x02\x02\u019F\u019E" +
		"\x03\x02\x02\x02\u01A0S\x03\x02\x02\x02\u01A1\u01C0\x05f4\x02\u01A2\u01C0" +
		"\x07G\x02\x02\u01A3\u01C0\x05&\x14\x02\u01A4\u01C0\x05@!\x02\u01A5\u01A6" +
		"\x07>\x02\x02\u01A6\u01A7\x07H\x02\x02\u01A7\u01A8\x07;\x02\x02\u01A8" +
		"\u01A9\x07\f\x02\x02\u01A9\u01AA\x07I\x02\x02\u01AA\u01AB\x07J\x02\x02" +
		"\u01AB\u01AF\x05R*\x02\u01AC\u01AD\x07K\x02\x02\u01AD\u01AE\x07L\x02\x02" +
		"\u01AE\u01B0\x05R*\x02\u01AF\u01AC\x03\x02\x02\x02\u01AF\u01B0\x03\x02" +
		"\x02\x02\u01B0\u01B1\x03\x02\x02\x02\u01B1\u01B2\x07\x0F\x02\x02\u01B2" +
		"\u01C0\x03\x02\x02\x02\u01B3\u01B4\x07>\x02\x02\u01B4\u01B5\x05R*\x02" +
		"\u01B5\u01B6\x07M\x02\x02\u01B6\u01B7\x05R*\x02\u01B7\u01C0\x03\x02\x02" +
		"\x02\u01B8\u01C0\x05X-\x02\u01B9\u01C0\x07^\x02\x02\u01BA\u01C0\x07]\x02" +
		"\x02\u01BB\u01C0\x07\\\x02\x02\u01BC\u01C0\x05Z.\x02\u01BD\u01C0\x05`" +
		"1\x02\u01BE\u01C0\x05b2\x02\u01BF\u01A1\x03\x02\x02\x02\u01BF\u01A2\x03" +
		"\x02\x02\x02\u01BF\u01A3\x03\x02\x02\x02\u01BF\u01A4\x03\x02\x02\x02\u01BF" +
		"\u01A5\x03\x02\x02\x02\u01BF\u01B3\x03\x02\x02\x02\u01BF\u01B8\x03\x02" +
		"\x02\x02\u01BF\u01B9\x03\x02\x02\x02\u01BF\u01BA\x03\x02\x02\x02\u01BF" +
		"\u01BB\x03\x02\x02\x02\u01BF\u01BC\x03\x02\x02\x02\u01BF\u01BD\x03\x02" +
		"\x02\x02\u01BF\u01BE\x03\x02\x02\x02\u01C0U\x03\x02\x02\x02\u01C1\u01C2" +
		"\x07\x12\x02\x02\u01C2\u01C3\x07N\x02\x02\u01C3W\x03\x02\x02\x02\u01C4" +
		"\u01C5\x07O\x02\x02\u01C5\u01C6\x07P\x02\x02\u01C6\u01CF\x05Z.\x02\u01C7" +
		"\u01C8\x07Q\x02\x02\u01C8\u01CD\x07R\x02\x02\u01C9\u01CA\x07S\x02\x02" +
		"\u01CA\u01CB\x07\x17\x02\x02\u01CB\u01CD\x07;\x02\x02\u01CC\u01C7\x03" +
		"\x02\x02\x02\u01CC\u01C9\x03\x02\x02\x02\u01CD\u01CE\x03\x02\x02\x02\u01CE" +
		"\u01D0\x05Z.\x02\u01CF\u01CC\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02" +
		"\u01D0\u01D4\x03\x02\x02\x02\u01D1\u01D2\x05V,\x02\u01D2\u01D3\x05`1\x02" +
		"\u01D3\u01D5\x03\x02\x02\x02\u01D4\u01D1\x03\x02\x02\x02\u01D4\u01D5\x03" +
		"\x02\x02\x02\u01D5Y\x03\x02\x02\x02\u01D6\u01D8\x05\\/\x02\u01D7\u01D6" +
		"\x03\x02\x02\x02\u01D8\u01DB\x03\x02\x02\x02\u01D9\u01D7\x03\x02\x02\x02" +
		"\u01D9\u01DA\x03\x02\x02\x02\u01DA\u01DD\x03\x02\x02\x02\u01DB\u01D9\x03" +
		"\x02\x02\x02\u01DC\u01DE\x07_\x02\x02\u01DD\u01DC\x03\x02\x02\x02\u01DD" +
		"\u01DE\x03\x02\x02\x02\u01DE\u01DF\x03\x02\x02\x02\u01DF\u01ED\x05^0\x02" +
		"\u01E0\u01E4\x07;\x02\x02\u01E1\u01E3\x05\\/\x02\u01E2\u01E1\x03\x02\x02" +
		"\x02\u01E3\u01E6\x03\x02\x02\x02\u01E4\u01E2\x03\x02\x02\x02\u01E4\u01E5" +
		"\x03\x02\x02\x02\u01E5\u01E8\x03\x02\x02\x02\u01E6\u01E4\x03\x02\x02\x02" +
		"\u01E7\u01E9\x07_\x02\x02\u01E8\u01E7\x03\x02\x02\x02\u01E8\u01E9\x03" +
		"\x02\x02\x02\u01E9\u01EA\x03\x02\x02\x02\u01EA\u01EC\x05^0\x02\u01EB\u01E0" +
		"\x03\x02\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EB\x03\x02\x02\x02" +
		"\u01ED\u01EE\x03\x02\x02\x02\u01EE[\x03\x02\x02\x02\u01EF\u01ED\x03\x02" +
		"\x02\x02\u01F0\u01F1\t\x04\x02\x02\u01F1]\x03\x02\x02\x02\u01F2\u01F3" +
		"\t\x05\x02\x02\u01F3_\x03\x02\x02\x02\u01F4\u01FB\x07U\x02\x02\u01F5\u01F6" +
		"\x05Z.\x02\u01F6\u01F7\x07@\x02\x02\u01F7\u01F9\x05R*\x02\u01F8\u01FA" +
		"\x07%\x02\x02\u01F9\u01F8\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02" +
		"\u01FA\u01FC\x03\x02\x02\x02\u01FB\u01F5\x03\x02\x02\x02\u01FC\u01FD\x03" +
		"\x02\x02\x02\u01FD\u01FB\x03\x02\x02\x02\u01FD\u01FE\x03\x02\x02\x02\u01FE" +
		"\u01FF\x03\x02\x02\x02\u01FF\u0200\x07V\x02\x02\u0200a\x03\x02\x02\x02" +
		"\u0201\u0202\x07U\x02\x02\u0202\u0203\x05B\"\x02\u0203\u0204\x07V\x02" +
		"\x02\u0204c\x03\x02\x02\x02\u0205\u020A\x07^\x02\x02\u0206\u020A\x07\\" +
		"\x02\x02\u0207\u020A\x07]\x02\x02\u0208\u020A\x05f4\x02\u0209\u0205\x03" +
		"\x02\x02\x02\u0209\u0206\x03\x02\x02\x02\u0209\u0207\x03\x02\x02\x02\u0209" +
		"\u0208\x03\x02\x02\x02\u020Ae\x03\x02\x02\x02\u020B\u020C\x07W\x02\x02" +
		"\u020C\u020D\x07G\x02\x02\u020Dg\x03\x02\x02\x02\u020E\u020F\x07I\x02" +
		"\x02\u020F\u0210\x07J\x02\x02\u0210\u021A\x07]\x02\x02\u0211\u0212\x07" +
		"X\x02\x02\u0212\u0213\x07U\x02\x02\u0213\u0214\x07]\x02\x02\u0214\u0218" +
		"\x07V\x02\x02\u0215\u0216\x07K\x02\x02\u0216\u0217\x07\x05\x02\x02\u0217" +
		"\u0219\x07]\x02\x02\u0218\u0215\x03\x02\x02\x02\u0218\u0219\x03\x02\x02" +
		"\x02\u0219\u021B\x03\x02\x02\x02\u021A\u0211\x03\x02\x02\x02\u021A\u021B" +
		"\x03\x02\x02\x02\u021Bi\x03\x02\x02\x02.m\x8D\x90\x97\xA0\xA8\xAB\xBE" +
		"\xC9\xD8\xDC\xE9\xF5\u010D\u0117\u0120\u012B\u0134\u0144\u014B\u015C\u0160" +
		"\u0168\u0179\u017B\u0185\u0190\u019B\u019F\u01AF\u01BF\u01CC\u01CF\u01D4" +
		"\u01D9\u01DD\u01E4\u01E8\u01ED\u01F9\u01FD\u0209\u0218\u021A";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ASGrammarParser.__ATN) {
			ASGrammarParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ASGrammarParser._serializedATN));
		}

		return ASGrammarParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(ASGrammarParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_program; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
}


export class DelayContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_delay; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterDelay) {
			listener.enterDelay(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitDelay) {
			listener.exitDelay(this);
		}
	}
}


export class ClickContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_click; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterClick) {
			listener.enterClick(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitClick) {
			listener.exitClick(this);
		}
	}
}


export class OpenLocationContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_openLocation; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterOpenLocation) {
			listener.enterOpenLocation(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitOpenLocation) {
			listener.exitOpenLocation(this);
		}
	}
}


export class ActivateContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_activate; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterActivate) {
			listener.enterActivate(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitActivate) {
			listener.exitActivate(this);
		}
	}
}


export class OpenFileContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_openFile; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterOpenFile) {
			listener.enterOpenFile(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitOpenFile) {
			listener.exitOpenFile(this);
		}
	}
}


export class SaveContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_save; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterSave) {
			listener.enterSave(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitSave) {
			listener.exitSave(this);
		}
	}
}


export class KeystrokeContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public using(): UsingContext | undefined {
		return this.tryGetRuleContext(0, UsingContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_keystroke; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterKeystroke) {
			listener.enterKeystroke(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitKeystroke) {
			listener.exitKeystroke(this);
		}
	}
}


export class UsingContext extends ParserRuleContext {
	public list(): ListContext {
		return this.getRuleContext(0, ListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_using; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterUsing) {
			listener.enterUsing(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitUsing) {
			listener.exitUsing(this);
		}
	}
}


export class LoopStatementContext extends ParserRuleContext {
	public repeatLoop(): RepeatLoopContext | undefined {
		return this.tryGetRuleContext(0, RepeatLoopContext);
	}
	public whileLoop(): WhileLoopContext | undefined {
		return this.tryGetRuleContext(0, WhileLoopContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_loopStatement; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterLoopStatement) {
			listener.enterLoopStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitLoopStatement) {
			listener.exitLoopStatement(this);
		}
	}
}


export class RepeatLoopContext extends ParserRuleContext {
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public range(): RangeContext | undefined {
		return this.tryGetRuleContext(0, RangeContext);
	}
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_repeatLoop; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterRepeatLoop) {
			listener.enterRepeatLoop(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitRepeatLoop) {
			listener.exitRepeatLoop(this);
		}
	}
}


export class WhileLoopContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_whileLoop; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterWhileLoop) {
			listener.enterWhileLoop(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitWhileLoop) {
			listener.exitWhileLoop(this);
		}
	}
}


export class ExitContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_exit; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterExit) {
			listener.enterExit(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitExit) {
			listener.exitExit(this);
		}
	}
}


export class TellContext extends ParserRuleContext {
	public tellApp(): TellAppContext | undefined {
		return this.tryGetRuleContext(0, TellAppContext);
	}
	public tellId(): TellIdContext | undefined {
		return this.tryGetRuleContext(0, TellIdContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_tell; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterTell) {
			listener.enterTell(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitTell) {
			listener.exitTell(this);
		}
	}
}


export class TellAppContext extends ParserRuleContext {
	public appType(): AppTypeContext {
		return this.getRuleContext(0, AppTypeContext);
	}
	public STRING(): TerminalNode { return this.getToken(ASGrammarParser.STRING, 0); }
	public tellArg(): TellArgContext {
		return this.getRuleContext(0, TellArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_tellApp; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterTellApp) {
			listener.enterTellApp(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitTellApp) {
			listener.exitTellApp(this);
		}
	}
}


export class TellArgContext extends ParserRuleContext {
	public toStatement(): ToStatementContext | undefined {
		return this.tryGetRuleContext(0, ToStatementContext);
	}
	public statementList(): StatementListContext | undefined {
		return this.tryGetRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_tellArg; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterTellArg) {
			listener.enterTellArg(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitTellArg) {
			listener.exitTellArg(this);
		}
	}
}


export class AppTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_appType; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterAppType) {
			listener.enterAppType(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitAppType) {
			listener.exitAppType(this);
		}
	}
}


export class TellIdContext extends ParserRuleContext {
	public variable(): VariableContext {
		return this.getRuleContext(0, VariableContext);
	}
	public tellArg(): TellArgContext {
		return this.getRuleContext(0, TellArgContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_tellId; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterTellId) {
			listener.enterTellId(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitTellId) {
			listener.exitTellId(this);
		}
	}
}


export class ExistsContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(ASGrammarParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_exists; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterExists) {
			listener.enterExists(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitExists) {
			listener.exitExists(this);
		}
	}
}


export class IfBlockContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext {
		return this.getRuleContext(0, IfStatementContext);
	}
	public elseIf(): ElseIfContext[];
	public elseIf(i: number): ElseIfContext;
	public elseIf(i?: number): ElseIfContext | ElseIfContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ElseIfContext);
		} else {
			return this.getRuleContext(i, ElseIfContext);
		}
	}
	public elseStatement(): ElseStatementContext | undefined {
		return this.tryGetRuleContext(0, ElseStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_ifBlock; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterIfBlock) {
			listener.enterIfBlock(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitIfBlock) {
			listener.exitIfBlock(this);
		}
	}
}


export class ElseIfContext extends ParserRuleContext {
	public ifStatement(): IfStatementContext {
		return this.getRuleContext(0, IfStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_elseIf; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterElseIf) {
			listener.enterElseIf(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitElseIf) {
			listener.exitElseIf(this);
		}
	}
}


export class ElseStatementContext extends ParserRuleContext {
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_elseStatement; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterElseStatement) {
			listener.enterElseStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitElseStatement) {
			listener.exitElseStatement(this);
		}
	}
}


export class IfStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_ifStatement; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterIfStatement) {
			listener.enterIfStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitIfStatement) {
			listener.exitIfStatement(this);
		}
	}
}


export class ToStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_toStatement; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterToStatement) {
			listener.enterToStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitToStatement) {
			listener.exitToStatement(this);
		}
	}
}


export class StatementListContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_statementList; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterStatementList) {
			listener.enterStatementList(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitStatementList) {
			listener.exitStatementList(this);
		}
	}
}


export class ReturnStatementContext extends ParserRuleContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_returnStatement; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterReturnStatement) {
			listener.enterReturnStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitReturnStatement) {
			listener.exitReturnStatement(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public loopStatement(): LoopStatementContext | undefined {
		return this.tryGetRuleContext(0, LoopStatementContext);
	}
	public errorHandler(): ErrorHandlerContext | undefined {
		return this.tryGetRuleContext(0, ErrorHandlerContext);
	}
	public openFile(): OpenFileContext | undefined {
		return this.tryGetRuleContext(0, OpenFileContext);
	}
	public onRun(): OnRunContext | undefined {
		return this.tryGetRuleContext(0, OnRunContext);
	}
	public exit(): ExitContext | undefined {
		return this.tryGetRuleContext(0, ExitContext);
	}
	public returnStatement(): ReturnStatementContext | undefined {
		return this.tryGetRuleContext(0, ReturnStatementContext);
	}
	public functionDeclaration(): FunctionDeclarationContext | undefined {
		return this.tryGetRuleContext(0, FunctionDeclarationContext);
	}
	public displayDialog(): DisplayDialogContext | undefined {
		return this.tryGetRuleContext(0, DisplayDialogContext);
	}
	public makeNew(): MakeNewContext | undefined {
		return this.tryGetRuleContext(0, MakeNewContext);
	}
	public keystroke(): KeystrokeContext | undefined {
		return this.tryGetRuleContext(0, KeystrokeContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public set(): SetContext | undefined {
		return this.tryGetRuleContext(0, SetContext);
	}
	public ifBlock(): IfBlockContext | undefined {
		return this.tryGetRuleContext(0, IfBlockContext);
	}
	public delay(): DelayContext | undefined {
		return this.tryGetRuleContext(0, DelayContext);
	}
	public click(): ClickContext | undefined {
		return this.tryGetRuleContext(0, ClickContext);
	}
	public openLocation(): OpenLocationContext | undefined {
		return this.tryGetRuleContext(0, OpenLocationContext);
	}
	public activate(): ActivateContext | undefined {
		return this.tryGetRuleContext(0, ActivateContext);
	}
	public tell(): TellContext | undefined {
		return this.tryGetRuleContext(0, TellContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_statement; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class ParameterListContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_parameterList; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterParameterList) {
			listener.enterParameterList(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitParameterList) {
			listener.exitParameterList(this);
		}
	}
}


export class OnRunContext extends ParserRuleContext {
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_onRun; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterOnRun) {
			listener.enterOnRun(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitOnRun) {
			listener.exitOnRun(this);
		}
	}
}


export class FunctionDeclarationContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASGrammarParser.IDENTIFIER);
		} else {
			return this.getToken(ASGrammarParser.IDENTIFIER, i);
		}
	}
	public functionBody(): FunctionBodyContext {
		return this.getRuleContext(0, FunctionBodyContext);
	}
	public parameterList(): ParameterListContext | undefined {
		return this.tryGetRuleContext(0, ParameterListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_functionDeclaration; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterFunctionDeclaration) {
			listener.enterFunctionDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitFunctionDeclaration) {
			listener.exitFunctionDeclaration(this);
		}
	}
}


export class FunctionBodyContext extends ParserRuleContext {
	public statementList(): StatementListContext {
		return this.getRuleContext(0, StatementListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_functionBody; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterFunctionBody) {
			listener.enterFunctionBody(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitFunctionBody) {
			listener.exitFunctionBody(this);
		}
	}
}


export class FunctionCallContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASGrammarParser.IDENTIFIER, 0); }
	public arguments(): ArgumentsContext | undefined {
		return this.tryGetRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_functionCall; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterFunctionCall) {
			listener.enterFunctionCall(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitFunctionCall) {
			listener.exitFunctionCall(this);
		}
	}
}


export class ArgumentsContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_arguments; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterArguments) {
			listener.enterArguments(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitArguments) {
			listener.exitArguments(this);
		}
	}
}


export class RangeContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_range; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterRange) {
			listener.enterRange(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitRange) {
			listener.exitRange(this);
		}
	}
}


export class OperatorContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_operator; }
	public copyFrom(ctx: OperatorContext): void {
		super.copyFrom(ctx);
	}
}
export class AddContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterAdd) {
			listener.enterAdd(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitAdd) {
			listener.exitAdd(this);
		}
	}
}
export class SubtractContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterSubtract) {
			listener.enterSubtract(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitSubtract) {
			listener.exitSubtract(this);
		}
	}
}
export class MultiplyContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterMultiply) {
			listener.enterMultiply(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitMultiply) {
			listener.exitMultiply(this);
		}
	}
}
export class DivideContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterDivide) {
			listener.enterDivide(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitDivide) {
			listener.exitDivide(this);
		}
	}
}
export class ModuloContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterModulo) {
			listener.enterModulo(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitModulo) {
			listener.exitModulo(this);
		}
	}
}
export class ExponentContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterExponent) {
			listener.enterExponent(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitExponent) {
			listener.exitExponent(this);
		}
	}
}
export class UnequalContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterUnequal) {
			listener.enterUnequal(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitUnequal) {
			listener.exitUnequal(this);
		}
	}
}
export class EqualsContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterEquals) {
			listener.enterEquals(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitEquals) {
			listener.exitEquals(this);
		}
	}
}
export class GreaterThanContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterGreaterThan) {
			listener.enterGreaterThan(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitGreaterThan) {
			listener.exitGreaterThan(this);
		}
	}
}
export class LessThanContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterLessThan) {
			listener.enterLessThan(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitLessThan) {
			listener.exitLessThan(this);
		}
	}
}
export class GreaterThanEqualContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterGreaterThanEqual) {
			listener.enterGreaterThanEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitGreaterThanEqual) {
			listener.exitGreaterThanEqual(this);
		}
	}
}
export class LessThanEqualContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterLessThanEqual) {
			listener.enterLessThanEqual(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitLessThanEqual) {
			listener.exitLessThanEqual(this);
		}
	}
}
export class ConcatContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterConcat) {
			listener.enterConcat(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitConcat) {
			listener.exitConcat(this);
		}
	}
}
export class AndContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterAnd) {
			listener.enterAnd(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitAnd) {
			listener.exitAnd(this);
		}
	}
}
export class OrContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterOr) {
			listener.enterOr(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitOr) {
			listener.exitOr(this);
		}
	}
}
export class NotContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterNot) {
			listener.enterNot(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitNot) {
			listener.exitNot(this);
		}
	}
}
export class ContainsContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterContains) {
			listener.enterContains(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitContains) {
			listener.exitContains(this);
		}
	}
}
export class WhoseContext extends OperatorContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterWhose) {
			listener.enterWhose(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitWhose) {
			listener.exitWhose(this);
		}
	}
}
export class OfContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterOf) {
			listener.enterOf(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitOf) {
			listener.exitOf(this);
		}
	}
}
export class InContext extends OperatorContext {
	constructor(ctx: OperatorContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterIn) {
			listener.enterIn(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitIn) {
			listener.exitIn(this);
		}
	}
}


export class SetContext extends ParserRuleContext {
	public operation(): OperationContext {
		return this.getRuleContext(0, OperationContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_set; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterSet) {
			listener.enterSet(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitSet) {
			listener.exitSet(this);
		}
	}
}


export class SetPropertyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(ASGrammarParser.IDENTIFIER, 0); }
	public basicData(): BasicDataContext {
		return this.getRuleContext(0, BasicDataContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_setProperty; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterSetProperty) {
			listener.enterSetProperty(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitSetProperty) {
			listener.exitSetProperty(this);
		}
	}
}


export class ListenerContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.IDENTIFIER, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_listener; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterListener) {
			listener.enterListener(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitListener) {
			listener.exitListener(this);
		}
	}
}


export class ErrorHandlerContext extends ParserRuleContext {
	public statementList(): StatementListContext[];
	public statementList(i: number): StatementListContext;
	public statementList(i?: number): StatementListContext | StatementListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementListContext);
		} else {
			return this.getRuleContext(i, StatementListContext);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASGrammarParser.IDENTIFIER);
		} else {
			return this.getToken(ASGrammarParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_errorHandler; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterErrorHandler) {
			listener.enterErrorHandler(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitErrorHandler) {
			listener.exitErrorHandler(this);
		}
	}
}


export class OperationContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_operation; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterOperation) {
			listener.enterOperation(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitOperation) {
			listener.exitOperation(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public operator(): OperatorContext[];
	public operator(i: number): OperatorContext;
	public operator(i?: number): OperatorContext | OperatorContext[] {
		if (i === undefined) {
			return this.getRuleContexts(OperatorContext);
		} else {
			return this.getRuleContext(i, OperatorContext);
		}
	}
	public operation(): OperationContext | undefined {
		return this.tryGetRuleContext(0, OperationContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_expression; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public missingValue(): MissingValueContext | undefined {
		return this.tryGetRuleContext(0, MissingValueContext);
	}
	public exists(): ExistsContext | undefined {
		return this.tryGetRuleContext(0, ExistsContext);
	}
	public functionCall(): FunctionCallContext | undefined {
		return this.tryGetRuleContext(0, FunctionCallContext);
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public makeNew(): MakeNewContext | undefined {
		return this.tryGetRuleContext(0, MakeNewContext);
	}
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.INTEGER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.STRING, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.BOOLEAN, 0); }
	public variable(): VariableContext | undefined {
		return this.tryGetRuleContext(0, VariableContext);
	}
	public record(): RecordContext | undefined {
		return this.tryGetRuleContext(0, RecordContext);
	}
	public list(): ListContext | undefined {
		return this.tryGetRuleContext(0, ListContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_value; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class WithPropertiesContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_withProperties; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterWithProperties) {
			listener.enterWithProperties(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitWithProperties) {
			listener.exitWithProperties(this);
		}
	}
}


export class MakeNewContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public withProperties(): WithPropertiesContext | undefined {
		return this.tryGetRuleContext(0, WithPropertiesContext);
	}
	public record(): RecordContext | undefined {
		return this.tryGetRuleContext(0, RecordContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_makeNew; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterMakeNew) {
			listener.enterMakeNew(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitMakeNew) {
			listener.exitMakeNew(this);
		}
	}
}


export class VariableContext extends ParserRuleContext {
	public property(): PropertyContext[];
	public property(i: number): PropertyContext;
	public property(i?: number): PropertyContext | PropertyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PropertyContext);
		} else {
			return this.getRuleContext(i, PropertyContext);
		}
	}
	public modifier(): ModifierContext[];
	public modifier(i: number): ModifierContext;
	public modifier(i?: number): ModifierContext | ModifierContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ModifierContext);
		} else {
			return this.getRuleContext(i, ModifierContext);
		}
	}
	public IDENTIFIER(): TerminalNode[];
	public IDENTIFIER(i: number): TerminalNode;
	public IDENTIFIER(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASGrammarParser.IDENTIFIER);
		} else {
			return this.getToken(ASGrammarParser.IDENTIFIER, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_variable; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterVariable) {
			listener.enterVariable(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitVariable) {
			listener.exitVariable(this);
		}
	}
}


export class ModifierContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_modifier; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterModifier) {
			listener.enterModifier(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitModifier) {
			listener.exitModifier(this);
		}
	}
}


export class PropertyContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.IDENTIFIER, 0); }
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.INTEGER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_property; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterProperty) {
			listener.enterProperty(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitProperty) {
			listener.exitProperty(this);
		}
	}
}


export class RecordContext extends ParserRuleContext {
	public variable(): VariableContext[];
	public variable(i: number): VariableContext;
	public variable(i?: number): VariableContext | VariableContext[] {
		if (i === undefined) {
			return this.getRuleContexts(VariableContext);
		} else {
			return this.getRuleContext(i, VariableContext);
		}
	}
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_record; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterRecord) {
			listener.enterRecord(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitRecord) {
			listener.exitRecord(this);
		}
	}
}


export class ListContext extends ParserRuleContext {
	public arguments(): ArgumentsContext {
		return this.getRuleContext(0, ArgumentsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_list; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterList) {
			listener.enterList(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitList) {
			listener.exitList(this);
		}
	}
}


export class BasicDataContext extends ParserRuleContext {
	public INTEGER(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.INTEGER, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.BOOLEAN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ASGrammarParser.STRING, 0); }
	public missingValue(): MissingValueContext | undefined {
		return this.tryGetRuleContext(0, MissingValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_basicData; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterBasicData) {
			listener.enterBasicData(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitBasicData) {
			listener.exitBasicData(this);
		}
	}
}


export class MissingValueContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_missingValue; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterMissingValue) {
			listener.enterMissingValue(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitMissingValue) {
			listener.exitMissingValue(this);
		}
	}
}


export class DisplayDialogContext extends ParserRuleContext {
	public STRING(): TerminalNode[];
	public STRING(i: number): TerminalNode;
	public STRING(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(ASGrammarParser.STRING);
		} else {
			return this.getToken(ASGrammarParser.STRING, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ASGrammarParser.RULE_displayDialog; }
	// @Override
	public enterRule(listener: ASGrammarListener): void {
		if (listener.enterDisplayDialog) {
			listener.enterDisplayDialog(this);
		}
	}
	// @Override
	public exitRule(listener: ASGrammarListener): void {
		if (listener.exitDisplayDialog) {
			listener.exitDisplayDialog(this);
		}
	}
}


