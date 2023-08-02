// Generated from ASGrammar.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AddContext } from "./ASGrammarParser";
import { SubtractContext } from "./ASGrammarParser";
import { MultiplyContext } from "./ASGrammarParser";
import { DivideContext } from "./ASGrammarParser";
import { ModuloContext } from "./ASGrammarParser";
import { ExponentContext } from "./ASGrammarParser";
import { UnequalContext } from "./ASGrammarParser";
import { EqualsContext } from "./ASGrammarParser";
import { GreaterThanContext } from "./ASGrammarParser";
import { LessThanContext } from "./ASGrammarParser";
import { GreaterThanEqualContext } from "./ASGrammarParser";
import { LessThanEqualContext } from "./ASGrammarParser";
import { ConcatContext } from "./ASGrammarParser";
import { AndContext } from "./ASGrammarParser";
import { OrContext } from "./ASGrammarParser";
import { NotContext } from "./ASGrammarParser";
import { ContainsContext } from "./ASGrammarParser";
import { WhoseContext } from "./ASGrammarParser";
import { OfContext } from "./ASGrammarParser";
import { InContext } from "./ASGrammarParser";
import { ProgramContext } from "./ASGrammarParser";
import { DelayContext } from "./ASGrammarParser";
import { ClickContext } from "./ASGrammarParser";
import { OpenLocationContext } from "./ASGrammarParser";
import { ActivateContext } from "./ASGrammarParser";
import { OpenFileContext } from "./ASGrammarParser";
import { SaveContext } from "./ASGrammarParser";
import { KeystrokeContext } from "./ASGrammarParser";
import { UsingContext } from "./ASGrammarParser";
import { LoopStatementContext } from "./ASGrammarParser";
import { RepeatLoopContext } from "./ASGrammarParser";
import { WhileLoopContext } from "./ASGrammarParser";
import { ExitContext } from "./ASGrammarParser";
import { TellContext } from "./ASGrammarParser";
import { TellAppContext } from "./ASGrammarParser";
import { TellArgContext } from "./ASGrammarParser";
import { AppTypeContext } from "./ASGrammarParser";
import { TellIdContext } from "./ASGrammarParser";
import { ExistsContext } from "./ASGrammarParser";
import { IfBlockContext } from "./ASGrammarParser";
import { ElseIfContext } from "./ASGrammarParser";
import { ElseStatementContext } from "./ASGrammarParser";
import { IfStatementContext } from "./ASGrammarParser";
import { ToStatementContext } from "./ASGrammarParser";
import { StatementListContext } from "./ASGrammarParser";
import { ReturnStatementContext } from "./ASGrammarParser";
import { StatementContext } from "./ASGrammarParser";
import { ParameterListContext } from "./ASGrammarParser";
import { OnRunContext } from "./ASGrammarParser";
import { FunctionDeclarationContext } from "./ASGrammarParser";
import { FunctionBodyContext } from "./ASGrammarParser";
import { FunctionCallContext } from "./ASGrammarParser";
import { ArgumentsContext } from "./ASGrammarParser";
import { RangeContext } from "./ASGrammarParser";
import { OperatorContext } from "./ASGrammarParser";
import { SetContext } from "./ASGrammarParser";
import { SetPropertyContext } from "./ASGrammarParser";
import { ListenerContext } from "./ASGrammarParser";
import { ErrorHandlerContext } from "./ASGrammarParser";
import { OperationContext } from "./ASGrammarParser";
import { ExpressionContext } from "./ASGrammarParser";
import { ValueContext } from "./ASGrammarParser";
import { WithPropertiesContext } from "./ASGrammarParser";
import { MakeNewContext } from "./ASGrammarParser";
import { VariableContext } from "./ASGrammarParser";
import { ModifierContext } from "./ASGrammarParser";
import { PropertyContext } from "./ASGrammarParser";
import { RecordContext } from "./ASGrammarParser";
import { ListContext } from "./ASGrammarParser";
import { BasicDataContext } from "./ASGrammarParser";
import { MissingValueContext } from "./ASGrammarParser";
import { DisplayDialogContext } from "./ASGrammarParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ASGrammarParser`.
 */
export interface ASGrammarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `add`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterAdd?: (ctx: AddContext) => void;
	/**
	 * Exit a parse tree produced by the `add`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitAdd?: (ctx: AddContext) => void;

	/**
	 * Enter a parse tree produced by the `subtract`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterSubtract?: (ctx: SubtractContext) => void;
	/**
	 * Exit a parse tree produced by the `subtract`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitSubtract?: (ctx: SubtractContext) => void;

	/**
	 * Enter a parse tree produced by the `multiply`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterMultiply?: (ctx: MultiplyContext) => void;
	/**
	 * Exit a parse tree produced by the `multiply`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitMultiply?: (ctx: MultiplyContext) => void;

	/**
	 * Enter a parse tree produced by the `divide`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterDivide?: (ctx: DivideContext) => void;
	/**
	 * Exit a parse tree produced by the `divide`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitDivide?: (ctx: DivideContext) => void;

	/**
	 * Enter a parse tree produced by the `modulo`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterModulo?: (ctx: ModuloContext) => void;
	/**
	 * Exit a parse tree produced by the `modulo`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitModulo?: (ctx: ModuloContext) => void;

	/**
	 * Enter a parse tree produced by the `exponent`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterExponent?: (ctx: ExponentContext) => void;
	/**
	 * Exit a parse tree produced by the `exponent`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitExponent?: (ctx: ExponentContext) => void;

	/**
	 * Enter a parse tree produced by the `unequal`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterUnequal?: (ctx: UnequalContext) => void;
	/**
	 * Exit a parse tree produced by the `unequal`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitUnequal?: (ctx: UnequalContext) => void;

	/**
	 * Enter a parse tree produced by the `equals`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterEquals?: (ctx: EqualsContext) => void;
	/**
	 * Exit a parse tree produced by the `equals`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitEquals?: (ctx: EqualsContext) => void;

	/**
	 * Enter a parse tree produced by the `greaterThan`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterGreaterThan?: (ctx: GreaterThanContext) => void;
	/**
	 * Exit a parse tree produced by the `greaterThan`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitGreaterThan?: (ctx: GreaterThanContext) => void;

	/**
	 * Enter a parse tree produced by the `lessThan`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterLessThan?: (ctx: LessThanContext) => void;
	/**
	 * Exit a parse tree produced by the `lessThan`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitLessThan?: (ctx: LessThanContext) => void;

	/**
	 * Enter a parse tree produced by the `greaterThanEqual`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterGreaterThanEqual?: (ctx: GreaterThanEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `greaterThanEqual`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitGreaterThanEqual?: (ctx: GreaterThanEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `lessThanEqual`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterLessThanEqual?: (ctx: LessThanEqualContext) => void;
	/**
	 * Exit a parse tree produced by the `lessThanEqual`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitLessThanEqual?: (ctx: LessThanEqualContext) => void;

	/**
	 * Enter a parse tree produced by the `concat`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterConcat?: (ctx: ConcatContext) => void;
	/**
	 * Exit a parse tree produced by the `concat`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitConcat?: (ctx: ConcatContext) => void;

	/**
	 * Enter a parse tree produced by the `and`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterAnd?: (ctx: AndContext) => void;
	/**
	 * Exit a parse tree produced by the `and`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitAnd?: (ctx: AndContext) => void;

	/**
	 * Enter a parse tree produced by the `or`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOr?: (ctx: OrContext) => void;
	/**
	 * Exit a parse tree produced by the `or`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOr?: (ctx: OrContext) => void;

	/**
	 * Enter a parse tree produced by the `not`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterNot?: (ctx: NotContext) => void;
	/**
	 * Exit a parse tree produced by the `not`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitNot?: (ctx: NotContext) => void;

	/**
	 * Enter a parse tree produced by the `contains`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterContains?: (ctx: ContainsContext) => void;
	/**
	 * Exit a parse tree produced by the `contains`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitContains?: (ctx: ContainsContext) => void;

	/**
	 * Enter a parse tree produced by the `whose`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterWhose?: (ctx: WhoseContext) => void;
	/**
	 * Exit a parse tree produced by the `whose`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitWhose?: (ctx: WhoseContext) => void;

	/**
	 * Enter a parse tree produced by the `of`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOf?: (ctx: OfContext) => void;
	/**
	 * Exit a parse tree produced by the `of`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOf?: (ctx: OfContext) => void;

	/**
	 * Enter a parse tree produced by the `in`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterIn?: (ctx: InContext) => void;
	/**
	 * Exit a parse tree produced by the `in`
	 * labeled alternative in `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitIn?: (ctx: InContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.delay`.
	 * @param ctx the parse tree
	 */
	enterDelay?: (ctx: DelayContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.delay`.
	 * @param ctx the parse tree
	 */
	exitDelay?: (ctx: DelayContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.click`.
	 * @param ctx the parse tree
	 */
	enterClick?: (ctx: ClickContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.click`.
	 * @param ctx the parse tree
	 */
	exitClick?: (ctx: ClickContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.openLocation`.
	 * @param ctx the parse tree
	 */
	enterOpenLocation?: (ctx: OpenLocationContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.openLocation`.
	 * @param ctx the parse tree
	 */
	exitOpenLocation?: (ctx: OpenLocationContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.activate`.
	 * @param ctx the parse tree
	 */
	enterActivate?: (ctx: ActivateContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.activate`.
	 * @param ctx the parse tree
	 */
	exitActivate?: (ctx: ActivateContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.openFile`.
	 * @param ctx the parse tree
	 */
	enterOpenFile?: (ctx: OpenFileContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.openFile`.
	 * @param ctx the parse tree
	 */
	exitOpenFile?: (ctx: OpenFileContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.save`.
	 * @param ctx the parse tree
	 */
	enterSave?: (ctx: SaveContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.save`.
	 * @param ctx the parse tree
	 */
	exitSave?: (ctx: SaveContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.keystroke`.
	 * @param ctx the parse tree
	 */
	enterKeystroke?: (ctx: KeystrokeContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.keystroke`.
	 * @param ctx the parse tree
	 */
	exitKeystroke?: (ctx: KeystrokeContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.using`.
	 * @param ctx the parse tree
	 */
	enterUsing?: (ctx: UsingContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.using`.
	 * @param ctx the parse tree
	 */
	exitUsing?: (ctx: UsingContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	enterLoopStatement?: (ctx: LoopStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.loopStatement`.
	 * @param ctx the parse tree
	 */
	exitLoopStatement?: (ctx: LoopStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.repeatLoop`.
	 * @param ctx the parse tree
	 */
	enterRepeatLoop?: (ctx: RepeatLoopContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.repeatLoop`.
	 * @param ctx the parse tree
	 */
	exitRepeatLoop?: (ctx: RepeatLoopContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.whileLoop`.
	 * @param ctx the parse tree
	 */
	enterWhileLoop?: (ctx: WhileLoopContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.whileLoop`.
	 * @param ctx the parse tree
	 */
	exitWhileLoop?: (ctx: WhileLoopContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.exit`.
	 * @param ctx the parse tree
	 */
	enterExit?: (ctx: ExitContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.exit`.
	 * @param ctx the parse tree
	 */
	exitExit?: (ctx: ExitContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.tell`.
	 * @param ctx the parse tree
	 */
	enterTell?: (ctx: TellContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.tell`.
	 * @param ctx the parse tree
	 */
	exitTell?: (ctx: TellContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.tellApp`.
	 * @param ctx the parse tree
	 */
	enterTellApp?: (ctx: TellAppContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.tellApp`.
	 * @param ctx the parse tree
	 */
	exitTellApp?: (ctx: TellAppContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.tellArg`.
	 * @param ctx the parse tree
	 */
	enterTellArg?: (ctx: TellArgContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.tellArg`.
	 * @param ctx the parse tree
	 */
	exitTellArg?: (ctx: TellArgContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.appType`.
	 * @param ctx the parse tree
	 */
	enterAppType?: (ctx: AppTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.appType`.
	 * @param ctx the parse tree
	 */
	exitAppType?: (ctx: AppTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.tellId`.
	 * @param ctx the parse tree
	 */
	enterTellId?: (ctx: TellIdContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.tellId`.
	 * @param ctx the parse tree
	 */
	exitTellId?: (ctx: TellIdContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.exists`.
	 * @param ctx the parse tree
	 */
	enterExists?: (ctx: ExistsContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.exists`.
	 * @param ctx the parse tree
	 */
	exitExists?: (ctx: ExistsContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.ifBlock`.
	 * @param ctx the parse tree
	 */
	enterIfBlock?: (ctx: IfBlockContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.ifBlock`.
	 * @param ctx the parse tree
	 */
	exitIfBlock?: (ctx: IfBlockContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.elseIf`.
	 * @param ctx the parse tree
	 */
	enterElseIf?: (ctx: ElseIfContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.elseIf`.
	 * @param ctx the parse tree
	 */
	exitElseIf?: (ctx: ElseIfContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	enterElseStatement?: (ctx: ElseStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.elseStatement`.
	 * @param ctx the parse tree
	 */
	exitElseStatement?: (ctx: ElseStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	enterIfStatement?: (ctx: IfStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.ifStatement`.
	 * @param ctx the parse tree
	 */
	exitIfStatement?: (ctx: IfStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.toStatement`.
	 * @param ctx the parse tree
	 */
	enterToStatement?: (ctx: ToStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.toStatement`.
	 * @param ctx the parse tree
	 */
	exitToStatement?: (ctx: ToStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.statementList`.
	 * @param ctx the parse tree
	 */
	enterStatementList?: (ctx: StatementListContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.statementList`.
	 * @param ctx the parse tree
	 */
	exitStatementList?: (ctx: StatementListContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	enterReturnStatement?: (ctx: ReturnStatementContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.returnStatement`.
	 * @param ctx the parse tree
	 */
	exitReturnStatement?: (ctx: ReturnStatementContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	enterParameterList?: (ctx: ParameterListContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.parameterList`.
	 * @param ctx the parse tree
	 */
	exitParameterList?: (ctx: ParameterListContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.onRun`.
	 * @param ctx the parse tree
	 */
	enterOnRun?: (ctx: OnRunContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.onRun`.
	 * @param ctx the parse tree
	 */
	exitOnRun?: (ctx: OnRunContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	enterFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.functionDeclaration`.
	 * @param ctx the parse tree
	 */
	exitFunctionDeclaration?: (ctx: FunctionDeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.functionBody`.
	 * @param ctx the parse tree
	 */
	enterFunctionBody?: (ctx: FunctionBodyContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.functionBody`.
	 * @param ctx the parse tree
	 */
	exitFunctionBody?: (ctx: FunctionBodyContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.functionCall`.
	 * @param ctx the parse tree
	 */
	enterFunctionCall?: (ctx: FunctionCallContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.functionCall`.
	 * @param ctx the parse tree
	 */
	exitFunctionCall?: (ctx: FunctionCallContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.arguments`.
	 * @param ctx the parse tree
	 */
	enterArguments?: (ctx: ArgumentsContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.arguments`.
	 * @param ctx the parse tree
	 */
	exitArguments?: (ctx: ArgumentsContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.range`.
	 * @param ctx the parse tree
	 */
	enterRange?: (ctx: RangeContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.range`.
	 * @param ctx the parse tree
	 */
	exitRange?: (ctx: RangeContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	enterOperator?: (ctx: OperatorContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.operator`.
	 * @param ctx the parse tree
	 */
	exitOperator?: (ctx: OperatorContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.set`.
	 * @param ctx the parse tree
	 */
	enterSet?: (ctx: SetContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.set`.
	 * @param ctx the parse tree
	 */
	exitSet?: (ctx: SetContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.setProperty`.
	 * @param ctx the parse tree
	 */
	enterSetProperty?: (ctx: SetPropertyContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.setProperty`.
	 * @param ctx the parse tree
	 */
	exitSetProperty?: (ctx: SetPropertyContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.listener`.
	 * @param ctx the parse tree
	 */
	enterListener?: (ctx: ListenerContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.listener`.
	 * @param ctx the parse tree
	 */
	exitListener?: (ctx: ListenerContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.errorHandler`.
	 * @param ctx the parse tree
	 */
	enterErrorHandler?: (ctx: ErrorHandlerContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.errorHandler`.
	 * @param ctx the parse tree
	 */
	exitErrorHandler?: (ctx: ErrorHandlerContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.operation`.
	 * @param ctx the parse tree
	 */
	enterOperation?: (ctx: OperationContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.operation`.
	 * @param ctx the parse tree
	 */
	exitOperation?: (ctx: OperationContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.withProperties`.
	 * @param ctx the parse tree
	 */
	enterWithProperties?: (ctx: WithPropertiesContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.withProperties`.
	 * @param ctx the parse tree
	 */
	exitWithProperties?: (ctx: WithPropertiesContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.makeNew`.
	 * @param ctx the parse tree
	 */
	enterMakeNew?: (ctx: MakeNewContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.makeNew`.
	 * @param ctx the parse tree
	 */
	exitMakeNew?: (ctx: MakeNewContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.variable`.
	 * @param ctx the parse tree
	 */
	enterVariable?: (ctx: VariableContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.variable`.
	 * @param ctx the parse tree
	 */
	exitVariable?: (ctx: VariableContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.modifier`.
	 * @param ctx the parse tree
	 */
	enterModifier?: (ctx: ModifierContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.modifier`.
	 * @param ctx the parse tree
	 */
	exitModifier?: (ctx: ModifierContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.property`.
	 * @param ctx the parse tree
	 */
	enterProperty?: (ctx: PropertyContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.property`.
	 * @param ctx the parse tree
	 */
	exitProperty?: (ctx: PropertyContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.record`.
	 * @param ctx the parse tree
	 */
	enterRecord?: (ctx: RecordContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.record`.
	 * @param ctx the parse tree
	 */
	exitRecord?: (ctx: RecordContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.list`.
	 * @param ctx the parse tree
	 */
	enterList?: (ctx: ListContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.list`.
	 * @param ctx the parse tree
	 */
	exitList?: (ctx: ListContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.basicData`.
	 * @param ctx the parse tree
	 */
	enterBasicData?: (ctx: BasicDataContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.basicData`.
	 * @param ctx the parse tree
	 */
	exitBasicData?: (ctx: BasicDataContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.missingValue`.
	 * @param ctx the parse tree
	 */
	enterMissingValue?: (ctx: MissingValueContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.missingValue`.
	 * @param ctx the parse tree
	 */
	exitMissingValue?: (ctx: MissingValueContext) => void;

	/**
	 * Enter a parse tree produced by `ASGrammarParser.displayDialog`.
	 * @param ctx the parse tree
	 */
	enterDisplayDialog?: (ctx: DisplayDialogContext) => void;
	/**
	 * Exit a parse tree produced by `ASGrammarParser.displayDialog`.
	 * @param ctx the parse tree
	 */
	exitDisplayDialog?: (ctx: DisplayDialogContext) => void;
}

