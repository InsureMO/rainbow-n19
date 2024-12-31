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

export abstract class CodeVisitorSupport implements GroovyCodeVisitor {
	private groovyCodeVisitorSupport: GroovyCodeVisitorSupport = new GroovyCodeVisitorSupport(this);

	visitBlockStatement(block: BlockStatement): void {
		for (const statement of block.statements) {
			statement.visit(this);
		}
	}

	visitForLoop(forLoop: ForStatement): void {
		forLoop.collectionExpression.visit(this);
		forLoop.loopBlock.visit(this);
	}

	visitWhileLoop(loop: WhileStatement): void {
		loop.booleanExpression.visit(this);
		loop.loopBlock.visit(this);
	}

	visitDoWhileLoop(loop: DoWhileStatement): void {
		loop.loopBlock.visit(this);
		loop.booleanExpression.visit(this);
	}

	visitIfElse(ifElse: IfStatement): void {
		ifElse.booleanExpression.visit(this);
		ifElse.ifBlock.visit(this);
		ifElse.elseBlock.visit(this);
	}

	visitExpressionStatement(statement: ExpressionStatement): void {
		statement.expression.visit(this);
	}

	visitReturnStatement(statement: ReturnStatement): void {
		statement.expression.visit(this);
	}

	visitAssertStatement(statement: AssertStatement): void {
		statement.booleanExpression.visit(this);
		statement.messageExpression.visit(this);
	}

	visitTryCatchFinally(statement: TryCatchStatement): void {
		statement.tryStatement.visit(this);
		for (const catchStatement of statement.catchStatements) {
			catchStatement.visit(this);
		}
		statement.finallyStatement.visit(this);
	}

	visitEmptyStatement(_statement: EmptyStatement): void {
	}

	visitSwitch(statement: SwitchStatement): void {
		statement.expression.visit(this);
		this.afterSwitchConditionExpressionVisited(statement);
		for (const caseStatement of statement.caseStatements) {
			caseStatement.visit(this);
		}
		statement.defaultStatement.visit(this);
	}

	protected afterSwitchConditionExpressionVisited(_statement: SwitchStatement): void {
	}

	visitCaseStatement(statement: CaseStatement): void {
		statement.expression.visit(this);
		statement.code.visit(this);
	}

	visitBreakStatement(_statement: BreakStatement): void {
	}

	visitContinueStatement(_statement: ContinueStatement): void {
	}

	visitSynchronizedStatement(statement: SynchronizedStatement): void {
		statement.expression.visit(this);
		statement.code.visit(this);
	}

	visitThrowStatement(statement: ThrowStatement): void {
		statement.expression.visit(this);
	}

	visitMethodCallExpression(call: MethodCallExpression): void {
		call.objectExpression.visit(this);
		call.method.visit(this);
		call.arguments.visit(this);
	}

	visitStaticMethodCallExpression(call: StaticMethodCallExpression): void {
		call.arguments.visit(this);
	}

	visitConstructorCallExpression(call: ConstructorCallExpression): void {
		call.arguments.visit(this);
	}

	visitBinaryExpression(expression: BinaryExpression): void {
		expression.leftExpression.visit(this);
		expression.rightExpression.visit(this);
	}

	visitTernaryExpression(expression: TernaryExpression): void {
		expression.booleanExpression.visit(this);
		expression.trueExpression.visit(this);
		expression.falseExpression.visit(this);
	}

	visitShortTernaryExpression(expression: ElvisOperatorExpression): void {
		this.visitTernaryExpression(expression);
	}

	visitPostfixExpression(expression: PostfixExpression): void {
		expression.expression.visit(this);
	}

	visitPrefixExpression(expression: PrefixExpression): void {
		expression.expression.visit(this);
	}

	visitBooleanExpression(expression: BooleanExpression): void {
		expression.expression.visit(this);
	}

	visitNotExpression(expression: NotExpression): void {
		expression.expression.visit(this);
	}

	visitClosureExpression(expression: ClosureExpression): void {
		expression.code.visit(this);
	}

	visitLambdaExpression(expression: LambdaExpression): void {
		this.visitClosureExpression(expression);
	}

	visitTupleExpression(expression: TupleExpression): void {
		this.visitListOfExpressions(expression.expressions);
	}

	visitListExpression(expression: ListExpression): void {
		this.visitListOfExpressions(expression.expressions);
	}

	visitArrayExpression(expression: ArrayExpression): void {
		this.visitListOfExpressions(expression.expressions);
		this.visitListOfExpressions(expression.sizeExpressions);
	}

	visitMapExpression(expression: MapExpression): void {
		this.visitListOfExpressions(expression.mapEntryExpressions);
	}

	visitMapEntryExpression(expression: MapEntryExpression): void {
		expression.keyExpression.visit(this);
		expression.valueExpression.visit(this);
	}

	visitRangeExpression(expression: RangeExpression): void {
		expression.from.visit(this);
		expression.to.visit(this);
	}

	visitSpreadExpression(expression: SpreadExpression): void {
		expression.expression.visit(this);
	}

	visitSpreadMapExpression(expression: SpreadMapExpression): void {
		expression.expression.visit(this);
	}

	visitMethodPointerExpression(expression: MethodPointerExpression): void {
		expression.expression.visit(this);
		expression.methodName.visit(this);
	}

	visitMethodReferenceExpression(expression: MethodReferenceExpression): void {
		this.visitMethodPointerExpression(expression);
	}

	visitUnaryMinusExpression(expression: UnaryMinusExpression): void {
		expression.expression.visit(this);
	}

	visitUnaryPlusExpression(expression: UnaryPlusExpression): void {
		expression.expression.visit(this);
	}

	visitBitwiseNegationExpression(expression: BitwiseNegationExpression): void {
		expression.expression.visit(this);
	}

	visitCastExpression(expression: CastExpression): void {
		expression.expression.visit(this);
	}

	visitConstantExpression(_expression: ConstantExpression): void {
	}

	visitClassExpression(_expression: ClassExpression): void {
	}

	visitVariableExpression(_expression: VariableExpression): void {
	}

	visitDeclarationExpression(expression: DeclarationExpression): void {
		this.visitBinaryExpression(expression);
	}

	visitPropertyExpression(expression: PropertyExpression): void {
		expression.objectExpression.visit(this);
		expression.property.visit(this);
	}

	visitAttributeExpression(expression: AttributeExpression): void {
		expression.objectExpression.visit(this);
		expression.property.visit(this);
	}

	visitFieldExpression(_expression: FieldExpression): void {
	}

	visitGStringExpression(expression: GStringExpression): void {
		this.visitListOfExpressions(expression.strings);
		this.visitListOfExpressions(expression.values);
	}

	visitCatchStatement(statement: CatchStatement): void {
		statement.code.visit(this);
	}

	visitArgumentListExpression(expression: ArgumentListExpression): void {
		this.visitTupleExpression(expression);
	}

	visitClosureListExpression(expression: ClosureListExpression): void {
		this.visitListOfExpressions(expression.expressions);
	}

	visitBytecodeExpression(_expression: BytecodeExpression): void {
	}

	visitEmptyExpression(statement: EmptyExpression): void {
		this.groovyCodeVisitorSupport.visitEmptyExpression(statement);
	}

	visitListOfExpressions(list: Array<Expression>): void {
		this.groovyCodeVisitorSupport.visitListOfExpressions(list);
	}

	visit(statementOrExpression: Statement | Expression): void {
		this.groovyCodeVisitorSupport.visit(statementOrExpression);
	}
}
