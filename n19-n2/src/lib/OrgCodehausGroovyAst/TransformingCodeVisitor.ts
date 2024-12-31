import {
	ArgumentListExpression,
	ArrayExpression,
	AttributeExpression,
	BinaryExpression,
	BitwiseNegationExpression,
	BooleanExpression,
	CastExpression,
	ClassExpression,
	ClosureExpression,
	ClosureListExpression,
	ConstantExpression,
	DeclarationExpression,
	ElvisOperatorExpression,
	FieldExpression,
	GStringExpression,
	ListExpression,
	MapEntryExpression,
	MapExpression,
	MethodPointerExpression,
	NotExpression,
	PostfixExpression,
	PrefixExpression,
	PropertyExpression,
	RangeExpression,
	SpreadExpression,
	SpreadMapExpression,
	StaticMethodCallExpression,
	TernaryExpression,
	TupleExpression,
	UnaryMinusExpression,
	UnaryPlusExpression,
	VariableExpression
} from '../OrgCodehausGroovyAstExpr';
import {
	AssertStatement,
	BlockStatement,
	BreakStatement,
	CaseStatement,
	CatchStatement,
	ContinueStatement,
	DoWhileStatement,
	ExpressionStatement,
	ForStatement,
	IfStatement,
	ReturnStatement,
	SwitchStatement,
	SynchronizedStatement,
	ThrowStatement,
	TryCatchStatement,
	WhileStatement
} from '../OrgCodehausGroovyAstStmt';
import {BytecodeExpression} from '../OrgCodehausGroovyClassgen';
import {ClassCodeExpressionTransformer} from './ClassCodeExpressionTransformer';
import {CodeVisitorSupport} from './CodeVisitorSupport';

export class TransformingCodeVisitor extends CodeVisitorSupport {
	private readonly _trn: ClassCodeExpressionTransformer;

	constructor(trn: ClassCodeExpressionTransformer) {
		super();
		this._trn = trn;
	}

	visitBlockStatement(block: BlockStatement): void {
		super.visitBlockStatement(block);
		this._trn.visitBlockStatement(block);
	}

	visitForLoop(forLoop: ForStatement): void {
		super.visitForLoop(forLoop);
		this._trn.visitForLoop(forLoop);
	}

	visitWhileLoop(loop: WhileStatement): void {
		super.visitWhileLoop(loop);
		this._trn.visitWhileLoop(loop);
	}

	visitDoWhileLoop(loop: DoWhileStatement): void {
		super.visitDoWhileLoop(loop);
		this._trn.visitDoWhileLoop(loop);
	}

	visitIfElse(ifElse: IfStatement): void {
		super.visitIfElse(ifElse);
		this._trn.visitIfElse(ifElse);
	}

	visitExpressionStatement(statement: ExpressionStatement): void {
		super.visitExpressionStatement(statement);
		this._trn.visitExpressionStatement(statement);
	}

	visitReturnStatement(statement: ReturnStatement): void {
		super.visitReturnStatement(statement);
		this._trn.visitReturnStatement(statement);
	}

	visitAssertStatement(statement: AssertStatement): void {
		super.visitAssertStatement(statement);
		this._trn.visitAssertStatement(statement);
	}

	visitTryCatchFinally(statement: TryCatchStatement): void {
		super.visitTryCatchFinally(statement);
		this._trn.visitTryCatchFinally(statement);
	}

	visitSwitch(statement: SwitchStatement): void {
		super.visitSwitch(statement);
		this._trn.visitSwitch(statement);
	}

	visitCaseStatement(statement: CaseStatement): void {
		super.visitCaseStatement(statement);
		this._trn.visitCaseStatement(statement);
	}

	visitBreakStatement(statement: BreakStatement): void {
		super.visitBreakStatement(statement);
		this._trn.visitBreakStatement(statement);
	}

	visitContinueStatement(statement: ContinueStatement): void {
		super.visitContinueStatement(statement);
		this._trn.visitContinueStatement(statement);
	}

	visitSynchronizedStatement(statement: SynchronizedStatement): void {
		super.visitSynchronizedStatement(statement);
		this._trn.visitSynchronizedStatement(statement);
	}

	visitThrowStatement(statement: ThrowStatement): void {
		super.visitThrowStatement(statement);
		this._trn.visitThrowStatement(statement);
	}

	visitStaticMethodCallExpression(call: StaticMethodCallExpression): void {
		super.visitStaticMethodCallExpression(call);
		this._trn.visitStaticMethodCallExpression(call);
	}

	visitBinaryExpression(expression: BinaryExpression): void {
		super.visitBinaryExpression(expression);
		this._trn.visitBinaryExpression(expression);
	}

	visitTernaryExpression(expression: TernaryExpression): void {
		super.visitTernaryExpression(expression);
		this._trn.visitTernaryExpression(expression);
	}

	visitShortTernaryExpression(expression: ElvisOperatorExpression): void {
		super.visitShortTernaryExpression(expression);
		this._trn.visitShortTernaryExpression(expression);
	}

	visitPostfixExpression(expression: PostfixExpression): void {
		super.visitPostfixExpression(expression);
		this._trn.visitPostfixExpression(expression);
	}

	visitPrefixExpression(expression: PrefixExpression): void {
		super.visitPrefixExpression(expression);
		this._trn.visitPrefixExpression(expression);
	}

	visitBooleanExpression(expression: BooleanExpression): void {
		super.visitBooleanExpression(expression);
		this._trn.visitBooleanExpression(expression);
	}

	visitNotExpression(expression: NotExpression): void {
		super.visitNotExpression(expression);
		this._trn.visitNotExpression(expression);
	}

	visitClosureExpression(expression: ClosureExpression): void {
		super.visitClosureExpression(expression);
		this._trn.visitClosureExpression(expression);
	}

	visitTupleExpression(expression: TupleExpression): void {
		super.visitTupleExpression(expression);
		this._trn.visitTupleExpression(expression);
	}

	visitListExpression(expression: ListExpression): void {
		super.visitListExpression(expression);
		this._trn.visitListExpression(expression);
	}

	visitArrayExpression(expression: ArrayExpression): void {
		super.visitArrayExpression(expression);
		this._trn.visitArrayExpression(expression);
	}

	visitMapExpression(expression: MapExpression): void {
		super.visitMapExpression(expression);
		this._trn.visitMapExpression(expression);
	}

	visitMapEntryExpression(expression: MapEntryExpression): void {
		super.visitMapEntryExpression(expression);
		this._trn.visitMapEntryExpression(expression);
	}

	visitRangeExpression(expression: RangeExpression): void {
		super.visitRangeExpression(expression);
		this._trn.visitRangeExpression(expression);
	}

	visitSpreadExpression(expression: SpreadExpression): void {
		super.visitSpreadExpression(expression);
		this._trn.visitSpreadExpression(expression);
	}

	visitSpreadMapExpression(expression: SpreadMapExpression): void {
		super.visitSpreadMapExpression(expression);
		this._trn.visitSpreadMapExpression(expression);
	}

	visitMethodPointerExpression(expression: MethodPointerExpression): void {
		super.visitMethodPointerExpression(expression);
		this._trn.visitMethodPointerExpression(expression);
	}

	visitUnaryMinusExpression(expression: UnaryMinusExpression): void {
		super.visitUnaryMinusExpression(expression);
		this._trn.visitUnaryMinusExpression(expression);
	}

	visitUnaryPlusExpression(expression: UnaryPlusExpression): void {
		super.visitUnaryPlusExpression(expression);
		this._trn.visitUnaryPlusExpression(expression);
	}

	visitBitwiseNegationExpression(expression: BitwiseNegationExpression): void {
		super.visitBitwiseNegationExpression(expression);
		this._trn.visitBitwiseNegationExpression(expression);
	}

	visitCastExpression(expression: CastExpression): void {
		super.visitCastExpression(expression);
		this._trn.visitCastExpression(expression);
	}

	visitConstantExpression(expression: ConstantExpression): void {
		super.visitConstantExpression(expression);
		this._trn.visitConstantExpression(expression);
	}

	visitClassExpression(expression: ClassExpression): void {
		super.visitClassExpression(expression);
		this._trn.visitClassExpression(expression);
	}

	visitVariableExpression(expression: VariableExpression): void {
		super.visitVariableExpression(expression);
		this._trn.visitVariableExpression(expression);
	}

	visitDeclarationExpression(expression: DeclarationExpression): void {
		super.visitDeclarationExpression(expression);
		this._trn.visitDeclarationExpression(expression);
	}

	visitPropertyExpression(expression: PropertyExpression): void {
		super.visitPropertyExpression(expression);
		this._trn.visitPropertyExpression(expression);
	}

	visitAttributeExpression(expression: AttributeExpression): void {
		super.visitAttributeExpression(expression);
		this._trn.visitAttributeExpression(expression);
	}

	visitFieldExpression(expression: FieldExpression): void {
		super.visitFieldExpression(expression);
		this._trn.visitFieldExpression(expression);
	}

	visitGStringExpression(expression: GStringExpression): void {
		super.visitGStringExpression(expression);
		this._trn.visitGStringExpression(expression);
	}

	visitCatchStatement(statement: CatchStatement): void {
		super.visitCatchStatement(statement);
		this._trn.visitCatchStatement(statement);
	}

	visitArgumentListExpression(ale: ArgumentListExpression): void {
		super.visitArgumentListExpression(ale);
		this._trn.visitArgumentListExpression(ale);
	}

	visitClosureListExpression(cle: ClosureListExpression): void {
		super.visitClosureListExpression(cle);
		this._trn.visitClosureListExpression(cle);
	}

	visitBytecodeExpression(cle: BytecodeExpression): void {
		super.visitBytecodeExpression(cle);
		this._trn.visitBytecodeExpression(cle);
	}
}
