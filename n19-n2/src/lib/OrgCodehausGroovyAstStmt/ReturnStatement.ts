import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {ConstantExpression, Expression} from '../OrgCodehausGroovyAstExpr';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {ExpressionStatement} from './ExpressionStatement';
import {Statement} from './Statement';

export class ReturnStatement extends Statement {
	/**
	 * Only used for synthetic return statements emitted by the compiler.
	 * For comparisons use isReturningNullOrVoid() instead.
	 */
	static readonly RETURN_NULL_OR_VOID = new ReturnStatement(GeneralUtils.nullX());

	private _expression: Expression;

	constructor(statementOrExpression: ExpressionStatement | Expression) {
		super();
		if (statementOrExpression instanceof ExpressionStatement) {
			this.setExpression(statementOrExpression.expression);
			this.copyStatementLabels(statementOrExpression);
		} else {
			this.setExpression(statementOrExpression);
		}
	}

	get expression(): Expression {
		return this._expression;
	}

	setExpression(expression: Expression): void {
		this._expression = expression;
	}

	get text(): string {
		return 'return ' + this.expression.text;
	}

	get isReturningNullOrVoid(): boolean {
		return this.expression instanceof ConstantExpression && this.expression.isNullExpression;
	}

	toString(): string {
		return super.toString() + '[expression:' + this.expression.toString() + ']';
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitReturnStatement(this);
	}
}
