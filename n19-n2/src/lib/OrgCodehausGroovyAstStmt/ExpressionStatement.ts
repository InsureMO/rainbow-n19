import {IllegalArgumentException} from '../JavaExceptions';
import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from './Statement';

export class ExpressionStatement extends Statement {
	private _expression: Expression;

	constructor(expression: Expression) {
		super();
		if (expression == null) {
			throw new IllegalArgumentException('expression cannot be null');
		}
		this._expression = expression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitExpressionStatement(this);
	}

	get expression(): Expression {
		return this._expression;
	}

	setExpression(expression: Expression): void {
		this._expression = expression;
	}

	get text(): string {
		return this.expression.text;
	}

	toString(): string {
		return super.toString() + '[expression:' + this.expression.toString() + ']';
	}
}
