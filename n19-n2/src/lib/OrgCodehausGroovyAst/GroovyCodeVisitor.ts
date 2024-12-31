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
	ConstructorCallExpression,
	DeclarationExpression,
	ElvisOperatorExpression,
	EmptyExpression,
	Expression,
	FieldExpression,
	GStringExpression,
	LambdaExpression,
	ListExpression,
	MapEntryExpression,
	MapExpression,
	MethodCallExpression,
	MethodPointerExpression,
	MethodReferenceExpression,
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
	EmptyStatement,
	ExpressionStatement,
	ForStatement,
	IfStatement,
	ReturnStatement,
	Statement,
	SwitchStatement,
	SynchronizedStatement,
	ThrowStatement,
	TryCatchStatement,
	WhileStatement
} from '../OrgCodehausGroovyAstStmt';
import {BytecodeExpression} from '../OrgCodehausGroovyClassgen';

export interface GroovyCodeVisitor {
	//--------------------------------------------------------------------------
	// statements
	visitBlockStatement(statement: BlockStatement): void;
	visitForLoop(statement: ForStatement): void;
	visitWhileLoop(statement: WhileStatement): void;
	visitDoWhileLoop(statement: DoWhileStatement): void;
	visitIfElse(statement: IfStatement): void;
	visitExpressionStatement(statement: ExpressionStatement): void;
	visitReturnStatement(statement: ReturnStatement): void;
	visitAssertStatement(statement: AssertStatement): void;
	visitTryCatchFinally(statement: TryCatchStatement): void;
	visitSwitch(statement: SwitchStatement): void;
	visitCaseStatement(statement: CaseStatement): void;
	visitBreakStatement(statement: BreakStatement): void;
	visitContinueStatement(statement: ContinueStatement): void;
	visitThrowStatement(statement: ThrowStatement): void;
	visitSynchronizedStatement(statement: SynchronizedStatement): void;
	visitCatchStatement(statement: CatchStatement): void;
	visitEmptyStatement(statement: EmptyStatement): void;
	visit(statement: Statement): void;
	//--------------------------------------------------------------------------
	// expressions
	visitMethodCallExpression(statement: MethodCallExpression): void;
	visitStaticMethodCallExpression(statement: StaticMethodCallExpression): void;
	visitConstructorCallExpression(statement: ConstructorCallExpression): void;
	visitTernaryExpression(statement: TernaryExpression): void;
	visitShortTernaryExpression(statement: ElvisOperatorExpression): void;
	visitBinaryExpression(statement: BinaryExpression): void;
	visitPrefixExpression(statement: PrefixExpression): void;
	visitPostfixExpression(statement: PostfixExpression): void;
	visitBooleanExpression(statement: BooleanExpression): void;
	visitClosureExpression(statement: ClosureExpression): void;
	visitLambdaExpression(statement: LambdaExpression): void;
	visitTupleExpression(statement: TupleExpression): void;
	visitMapExpression(statement: MapExpression): void;
	visitMapEntryExpression(statement: MapEntryExpression): void;
	visitListExpression(statement: ListExpression): void;
	visitRangeExpression(statement: RangeExpression): void;
	visitPropertyExpression(statement: PropertyExpression): void;
	visitAttributeExpression(statement: AttributeExpression): void;
	visitFieldExpression(statement: FieldExpression): void;
	visitMethodPointerExpression(statement: MethodPointerExpression): void;
	visitMethodReferenceExpression(statement: MethodReferenceExpression): void;
	visitConstantExpression(statement: ConstantExpression): void;
	visitClassExpression(statement: ClassExpression): void;
	visitVariableExpression(statement: VariableExpression): void;
	visitDeclarationExpression(statement: DeclarationExpression): void;
	visitGStringExpression(statement: GStringExpression): void;
	visitArrayExpression(statement: ArrayExpression): void;
	visitSpreadExpression(statement: SpreadExpression): void;
	visitSpreadMapExpression(statement: SpreadMapExpression): void;
	visitNotExpression(statement: NotExpression): void;
	visitUnaryMinusExpression(statement: UnaryMinusExpression): void;
	visitUnaryPlusExpression(statement: UnaryPlusExpression): void;
	visitBitwiseNegationExpression(statement: BitwiseNegationExpression): void;
	visitCastExpression(statement: CastExpression): void;
	visitArgumentListExpression(statement: ArgumentListExpression): void;
	visitClosureListExpression(statement: ClosureListExpression): void;
	visitBytecodeExpression(statement: BytecodeExpression): void;
	visitEmptyExpression(statement: EmptyExpression): void;
	visitListOfExpressions(list: Array<Expression>): void;
	visit(expression: Expression): void;
}
