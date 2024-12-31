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
import {GroovyCodeVisitor} from './GroovyCodeVisitor';
import {GroovyCodeVisitorSupport} from './GroovyCodeVisitorSupport';

export class GroovyCodeVisitorAdapter implements GroovyCodeVisitor {
	private groovyCodeVisitorSupport: GroovyCodeVisitorSupport = new GroovyCodeVisitorSupport(this);

	visitAssertStatement(_statement: AssertStatement): void {
	}

	visitBlockStatement(_statement: BlockStatement): void {
	}

	visitBreakStatement(_statement: BreakStatement): void {
	}

	visitCaseStatement(_statement: CaseStatement): void {
	}

	visitCatchStatement(_statement: CatchStatement): void {
	}

	visitContinueStatement(_statement: ContinueStatement): void {
	}

	visitDoWhileLoop(_statement: DoWhileStatement): void {
	}

	visitEmptyStatement(_statement: EmptyStatement): void {
	}

	visitExpressionStatement(_statement: ExpressionStatement): void {
	}

	visitForLoop(_statement: ForStatement): void {
	}

	visitIfElse(_statement: IfStatement): void {
	}

	visitReturnStatement(_statement: ReturnStatement): void {
	}

	visitSwitch(_statement: SwitchStatement): void {
	}

	visitSynchronizedStatement(_statement: SynchronizedStatement): void {
	}

	visitThrowStatement(_statement: ThrowStatement): void {
	}

	visitTryCatchFinally(_statement: TryCatchStatement): void {
	}

	visitWhileLoop(_statement: WhileStatement): void {
	}

	visitArgumentListExpression(expression: ArgumentListExpression): void {
		this.visitTupleExpression(expression);
	}

	visitArrayExpression(_expression: ArrayExpression): void {
	}

	visitAttributeExpression(expression: AttributeExpression): void {
		this.visitPropertyExpression(expression);
	}

	visitBinaryExpression(_expression: BinaryExpression): void {
	}

	visitBitwiseNegationExpression(_expression: BitwiseNegationExpression): void {
	}

	visitBooleanExpression(_expression: BooleanExpression): void {
	}

	visitBytecodeExpression(_expression: BytecodeExpression): void {
	}

	visitCastExpression(_expression: CastExpression): void {
	}

	visitClassExpression(_expression: ClassExpression): void {
	}

	visitClosureExpression(_expression: ClosureExpression): void {
	}

	visitClosureListExpression(expression: ClosureListExpression): void {
		this.visitListExpression(expression);
	}

	visitConstantExpression(_expression: ConstantExpression): void {
	}

	visitConstructorCallExpression(_expression: ConstructorCallExpression): void {
	}

	visitDeclarationExpression(expression: DeclarationExpression): void {
		this.visitBinaryExpression(expression);
	}

	visitEmptyExpression(_expression: EmptyExpression): void {
	}

	visitFieldExpression(_expression: FieldExpression): void {
	}

	visitGStringExpression(_expression: GStringExpression): void {
	}

	visitLambdaExpression(expression: LambdaExpression): void {
		this.visitClosureExpression(expression);
	}

	visitListExpression(_expression: ListExpression): void {
	}

	visitMapExpression(_expression: MapExpression): void {
	}

	visitMapEntryExpression(_expression: MapEntryExpression): void {
	}

	visitMethodCallExpression(_expression: MethodCallExpression): void {
	}

	visitMethodPointerExpression(_expression: MethodPointerExpression): void {
	}

	visitMethodReferenceExpression(expression: MethodReferenceExpression): void {
		this.visitMethodPointerExpression(expression);
	}

	visitNotExpression(expression: NotExpression): void {
		this.visitBooleanExpression(expression);
	}

	visitPostfixExpression(_expression: PostfixExpression): void {
	}

	visitPrefixExpression(_expression: PrefixExpression): void {
	}

	visitPropertyExpression(_expression: PropertyExpression): void {
	}

	visitRangeExpression(_expression: RangeExpression): void {
	}

	visitShortTernaryExpression(expression: ElvisOperatorExpression): void {
		this.visitTernaryExpression(expression);
	}

	visitSpreadExpression(_expression: SpreadExpression): void {
	}

	visitSpreadMapExpression(_expression: SpreadMapExpression): void {
	}

	visitStaticMethodCallExpression(_expression: StaticMethodCallExpression): void {
	}

	visitTernaryExpression(_expression: TernaryExpression): void {
	}

	visitTupleExpression(_expression: TupleExpression): void {
	}

	visitVariableExpression(_expression: VariableExpression): void {
	}

	visitUnaryMinusExpression(_expression: UnaryMinusExpression): void {
	}

	visitUnaryPlusExpression(_expression: UnaryPlusExpression): void {
	}

	visit(statementOrExpression: Statement | Expression): void {
		this.groovyCodeVisitorSupport.visit(statementOrExpression);
	}

	visitListOfExpressions(list: Array<Expression>): void {
		this.groovyCodeVisitorSupport.visitListOfExpressions(list);
	}
}
