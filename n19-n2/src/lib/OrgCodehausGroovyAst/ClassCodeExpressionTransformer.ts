import {BooleanExpression, Expression, ExpressionTransformer, PropertyExpression} from '../OrgCodehausGroovyAstExpr';
import {
	AssertStatement,
	CaseStatement,
	DoWhileStatement,
	ExpressionStatement,
	ForStatement,
	IfStatement,
	ReturnStatement,
	SwitchStatement,
	SynchronizedStatement,
	ThrowStatement,
	WhileStatement
} from '../OrgCodehausGroovyAstStmt';
import {Optional} from '../TsAddon';
import {AnnotationNode} from './AnnotationNode';
import {ClassCodeVisitorSupport} from './ClassCodeVisitorSupport';
import {FieldNode} from './FieldNode';
import {MethodNode} from './MethodNode';
import {PropertyNode} from './PropertyNode';

export abstract class ClassCodeExpressionTransformer extends ClassCodeVisitorSupport implements ExpressionTransformer {
	/**
	 * <strong>NOTE</strong>: This method does not visit Expressions within Closures,
	 * for performance and historical reasons.
	 * If you want those Expressions to be visited, you can do this:
	 * <pre>
	 * {@code
	 * class YourTransformer extends ClassCodeExpressionTransformer {
	 *   ...
	 *
	 *
	 *   Expression transform(final Expression expr) {
	 *     if (expr instanceof ClosureExpression) {
	 *       expr.visit(this);
	 *
	 *       return expr;
	 *     }
	 *     // ...
	 *   }
	 * }}
	 * </pre>
	 */
	transform(expr: Expression): Optional<Expression> {
		if (expr == null) {
			return null;
		}
		return expr.transformExpression(this);
	}

	protected visitAnnotation(node: AnnotationNode): void {
		for (const key of node.members.keys()) {
			const old = node.members.get(key);
			node.setMember(key, this.transform(old));
		}
	}

	protected visitConstructorOrMethod(node: MethodNode, isConstructor: boolean): void {
		for (const p of node.parameters) {
			if (p.hasInitialExpression()) {
				const init = p.initialExpression;
				p.setInitialExpression(this.transform(init));
			}
		}
		super.visitConstructorOrMethod(node, isConstructor);
	}

	visitField(node: FieldNode): void {
		this.visitAnnotations(node);
		const init = node.initialExpression;
		node.setInitialValueExpression(this.transform(init));
	}

	visitProperty(node: PropertyNode): void {
		this.visitAnnotations(node);
		let statement = node.getterBlock;
		this.visitClassCodeContainer(statement);

		statement = node.setterBlock;
		this.visitClassCodeContainer(statement);
	}

	// statements:

	visitAssertStatement(stmt: AssertStatement): void {
		stmt.setBooleanExpression(this.transform(stmt.booleanExpression) as BooleanExpression);
		stmt.setMessageExpression(this.transform(stmt.messageExpression));
	}

	visitCaseStatement(stmt: CaseStatement): void {
		stmt.setExpression(this.transform(stmt.expression));
		stmt.code.visit(this);
	}

	visitDoWhileLoop(stmt: DoWhileStatement) {
		stmt.setBooleanExpression(this.transform(stmt.booleanExpression) as BooleanExpression);
		super.visitDoWhileLoop(stmt);
	}

	visitExpressionStatement(stmt: ExpressionStatement): void {
		stmt.setExpression(this.transform(stmt.expression));
	}

	visitForLoop(stmt: ForStatement): void {
		stmt.setCollectionExpression(this.transform(stmt.collectionExpression));
		super.visitForLoop(stmt);
	}

	visitIfElse(stmt: IfStatement): void {
		stmt.setBooleanExpression(this.transform(stmt.booleanExpression) as BooleanExpression);
		stmt.ifBlock.visit(this);
		stmt.elseBlock.visit(this);
	}

	visitReturnStatement(stmt: ReturnStatement): void {
		stmt.setExpression(this.transform(stmt.expression));
	}

	visitSwitch(stmt: SwitchStatement): void {
		const exp = stmt.expression;
		stmt.setExpression(this.transform(exp));
		for (const caseStatement of stmt.caseStatements) {
			caseStatement.visit(this);
		}
		stmt.defaultStatement.visit(this);
	}

	visitSynchronizedStatement(stmt: SynchronizedStatement) {
		stmt.setExpression(this.transform(stmt.expression));
		super.visitSynchronizedStatement(stmt);
	}

	visitThrowStatement(stmt: ThrowStatement) {
		stmt.setExpression(this.transform(stmt.expression));
	}

	visitWhileLoop(stmt: WhileStatement) {
		stmt.setBooleanExpression(this.transform(stmt.booleanExpression) as BooleanExpression);
		super.visitWhileLoop(stmt);
	}

	/**
	 * Set the source position of toSet including its property expression if it has one.
	 *
	 * @param toSet resulting node
	 * @param origNode original node
	 */
	protected static setSourcePosition(toSet: Expression, origNode: Expression): void {
		toSet.setSourcePosition(origNode);
		if (toSet instanceof PropertyExpression) {
			toSet.property.setSourcePosition(origNode);
		}
	}
}
