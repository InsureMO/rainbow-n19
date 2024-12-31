import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from './Statement';

export class CaseStatement extends Statement {
	private _code: Statement;
	private _expression: Expression;

	constructor(expression: Expression, code: Statement) {
		super();
		this._expression = expression;
		this._code = code;
	}

	get code(): Statement {
		return this._code;
	}

	setCode(code: Statement): void {
		this._code = code;
	}

	get expression(): Expression {
		return this._expression;
	}

	setExpression(e: Expression): void {
		this._expression = e;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitCaseStatement(this);
	}

	toString(): string {
		return super.toString() + '[expression: ' + this.expression.toString() + '; code: ' + this.code.toString() + ']';
	}
}
