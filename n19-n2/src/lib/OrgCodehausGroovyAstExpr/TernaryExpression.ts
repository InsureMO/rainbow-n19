import {ClassHelper, ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {BooleanExpression} from './BooleanExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class TernaryExpression extends Expression {
	private readonly _booleanExpression: BooleanExpression;
	private readonly _trueExpression: Expression;
	private readonly _falseExpression: Expression;

	constructor(booleanExpression: BooleanExpression, trueExpression: Expression, falseExpression: Expression) {
		super();
		this._booleanExpression = booleanExpression;
		this._trueExpression = trueExpression;
		this._falseExpression = falseExpression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitTernaryExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new TernaryExpression(
			transformer.transform(this.booleanExpression) as BooleanExpression,
			transformer.transform(this.trueExpression),
			transformer.transform(this.falseExpression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	toString(): string {
		return super.toString() + '[' + this.booleanExpression.toString() + ' ? ' + this.trueExpression.toString() + ' : ' + this.falseExpression.toString() + ']';
	}

	get booleanExpression(): BooleanExpression {
		return this._booleanExpression;
	}

	get falseExpression(): Expression {
		return this._falseExpression;
	}

	get trueExpression(): Expression {
		return this._trueExpression;
	}

	get text(): string {
		return '(' + this.booleanExpression.text + ') ? ' + this.trueExpression.text + ' : ' + this.falseExpression.text;
	}

	get type(): ClassNode {
		return ClassHelper.OBJECT_TYPE;
	}
}
