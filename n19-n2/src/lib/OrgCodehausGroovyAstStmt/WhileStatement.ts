import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {BooleanExpression} from '../OrgCodehausGroovyAstExpr';
import {LoopingStatement} from './LoopingStatement';
import {Statement} from './Statement';

export class WhileStatement extends Statement implements LoopingStatement {
	private _booleanExpression: BooleanExpression;
	private _loopBlock: Statement;

	constructor(booleanExpression: BooleanExpression, loopBlock: Statement) {
		super();
		this._booleanExpression = booleanExpression;
		this._loopBlock = loopBlock;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitWhileLoop(this);
	}

	get booleanExpression(): BooleanExpression {
		return this._booleanExpression;
	}

	get loopBlock(): Statement {
		return this._loopBlock;
	}

	setBooleanExpression(booleanExpression: BooleanExpression): void {
		this._booleanExpression = booleanExpression;
	}

	setLoopBlock(loopBlock: Statement) {
		this._loopBlock = loopBlock;
	}
}
