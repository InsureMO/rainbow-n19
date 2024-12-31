import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {BooleanExpression, Expression} from '../OrgCodehausGroovyAstExpr';
import {GeneralUtils} from '../OrgCodehausGroovyAstTools';
import {Statement} from './Statement';

export class AssertStatement extends Statement {
	private _booleanExpression: BooleanExpression;
	private _messageExpression: Expression;

	constructor(booleanExpression: BooleanExpression, messageExpression?: Expression) {
		super();
		this._booleanExpression = booleanExpression;
		this._messageExpression = messageExpression ?? GeneralUtils.nullX();
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitAssertStatement(this);
	}

	get messageExpression(): Expression {
		return this._messageExpression;
	}

	get booleanExpression(): BooleanExpression {
		return this._booleanExpression;
	}

	setBooleanExpression(booleanExpression: BooleanExpression): void {
		this._booleanExpression = booleanExpression;
	}

	setMessageExpression(messageExpression: Expression): void {
		this._messageExpression = messageExpression;
	}
}
