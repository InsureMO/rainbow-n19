import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from './Statement';

export class ThrowStatement extends Statement {
	private _expression: Expression;

	constructor(expression: Expression) {
		super();
		this._expression = expression;
	}

	get expression(): Expression {
		return this._expression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitThrowStatement(this);
	}

	setExpression(expression: Expression): void {
		this._expression = expression;
	}

	get text(): string {
		return 'throw ' + this.expression.text;
	}
}
