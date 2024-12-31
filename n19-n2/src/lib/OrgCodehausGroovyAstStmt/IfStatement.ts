import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {BooleanExpression} from '../OrgCodehausGroovyAstExpr';
import {BlockStatement} from './BlockStatement';
import {Statement} from './Statement';

export class IfStatement extends Statement {
	private _booleanExpression: BooleanExpression;
	private _ifBlock: Statement;
	private _elseBlock: Statement;

	constructor(booleanExpression: BooleanExpression, ifBlock: Statement, elseBlock: Statement) {
		super();
		this.setBooleanExpression(booleanExpression);
		this.setIfBlock(ifBlock);
		this.setElseBlock(elseBlock);
	}

	setBooleanExpression(booleanExpression: BooleanExpression): void {
		this._booleanExpression = booleanExpression;
	}

	setIfBlock(statement: Statement): void {
		this._ifBlock = statement;
	}

	setElseBlock(statement: Statement): void {
		this._elseBlock = statement;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitIfElse(this);
	}

	get booleanExpression(): BooleanExpression {
		return this._booleanExpression;
	}

	get ifBlock(): Statement {
		return this._ifBlock;
	}

	get elseBlock(): Statement {
		return this._elseBlock;
	}

	get text(): string {
		const thenStmt: Statement = this.ifBlock;
		const elseStmt = this.elseBlock;

		let text = 'if (';
		text = text + this.booleanExpression.text;
		text = text + ') ';
		text = text + thenStmt.text;
		if (elseStmt != null && !elseStmt.isEmpty) {
			if (!(thenStmt instanceof BlockStatement)) {
				text = text + ';';
			}
			text = text + ' else ';
			text = text + elseStmt.text;
		}
		return text.toString();
	}
}
