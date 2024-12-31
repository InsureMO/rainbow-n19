import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from './Statement';

export class SynchronizedStatement extends Statement {
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

	setCode(statement: Statement): void {
		this._code = statement;
	}

	get expression(): Expression {
		return this._expression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitSynchronizedStatement(this);
	}

	setExpression(expression: Expression): void {
		this._expression = expression;
	}
}
