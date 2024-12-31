import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class RangeExpression extends Expression {
	private readonly _from: Expression;
	private readonly _to: Expression;
	private readonly _exclusiveLeft: boolean;
	private readonly _exclusiveRight: boolean;

	constructor(from: Expression, to: Expression, inclusiveOrExclusiveLeft: boolean, exclusiveRight?: boolean) {
		super();
		this._from = from;
		this._to = to;
		if (exclusiveRight == null) {
			this._exclusiveLeft = false;
			this._exclusiveRight = !inclusiveOrExclusiveLeft;
		} else {
			this._exclusiveLeft = inclusiveOrExclusiveLeft;
			this._exclusiveRight = exclusiveRight;
		}

		this.setType(ClassHelper.RANGE_TYPE.getPlainNodeReference());
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitRangeExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new RangeExpression(transformer.transform(this.from), transformer.transform(this.to), this.isExclusiveLeft, this.isExclusiveRight);
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get from(): Expression {
		return this._from;
	}

	get to(): Expression {
		return this._to;
	}

	get isInclusive(): boolean {
		return !this.isExclusiveRight;
	}

	get isExclusiveLeft(): boolean {
		return this._exclusiveLeft;
	}

	get isExclusiveRight(): boolean {
		return this._exclusiveRight;
	}

	get text(): string {
		return '(' + this.from.text + (this.isExclusiveLeft ? '<' : '') + '..' + (this.isExclusiveRight ? '<' : '') + this.to.text + ')';
	}
}
