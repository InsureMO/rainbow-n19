import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class MapEntryExpression extends Expression {
	private _keyExpression: Expression;
	private _valueExpression: Expression;

	constructor(keyExpression: Expression, valueExpression: Expression) {
		super();
		this._keyExpression = keyExpression;
		this._valueExpression = valueExpression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitMapEntryExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new MapEntryExpression(transformer.transform(this.keyExpression), transformer.transform(this.valueExpression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	toString(): string {
		return super.toString() + '(key: ' + this.keyExpression.toString() + ', value: ' + this.valueExpression.toString() + ')';
	}

	get keyExpression(): Expression {
		return this._keyExpression;
	}

	get valueExpression(): Expression {
		return this._valueExpression;
	}

	setKeyExpression(keyExpression: Expression): void {
		this._keyExpression = keyExpression;
	}

	setValueExpression(valueExpression: Expression): void {
		this._valueExpression = valueExpression;
	}
}
