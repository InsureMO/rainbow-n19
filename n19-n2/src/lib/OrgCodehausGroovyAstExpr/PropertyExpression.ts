import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {ConstantExpression} from './ConstantExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class PropertyExpression extends Expression {
	private _objectExpression: Expression;
	private readonly _property: Expression;
	private _safe: boolean = false;
	private _spreadSafe: boolean = false;
	private _isStatic: boolean = false;
	private _implicitThis: boolean = false;

	constructor(objectExpression: Expression, propertyOrName: string | Expression, safe: boolean = false) {
		super();
		this._objectExpression = objectExpression;
		if (typeof propertyOrName === 'string') {
			this._property = new ConstantExpression(propertyOrName);
		} else {
			this._property = propertyOrName;
		}
		this._safe = safe;
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new PropertyExpression(transformer.transform(this.objectExpression), transformer.transform(this.property), this.isSafe);
		ret.setImplicitThis(this.isImplicitThis);
		ret.setSpreadSafe(this.isSpreadSafe);
		ret.setStatic(this._isStatic);
		ret.setType(this.type);
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitPropertyExpression(this);
	}

	get objectExpression(): Expression {
		return this._objectExpression;
	}

	setObjectExpression(objectExpression: Expression): void {
		this._objectExpression = objectExpression;
	}

	get property(): Expression {
		return this._property;
	}

	get propertyAsString(): Optional<string> {
		return this.property instanceof ConstantExpression ? this.property.text : null;
	}

	get text(): string {
		let sb: string = this.objectExpression.text;
		if (this.isSpreadSafe) {
			sb = sb + '*';
		}
		if (this.isSafe) {
			sb = sb + '?';
		}
		sb = sb + '.';

		return sb = sb + this.property.text;
	}

	get isDynamic(): boolean {
		return true;
	}

	get isImplicitThis(): boolean {
		return this._implicitThis;
	}

	setImplicitThis(implicitThis: boolean): void {
		this._implicitThis = implicitThis;
	}

	/**
	 * @return is this a safe navigation, i.e. if true then if the source object
	 * is null then this navigation will return null
	 */
	get isSafe(): boolean {
		return this._safe;
	}

	get isSpreadSafe(): boolean {
		return this._spreadSafe;
	}

	setSpreadSafe(spreadSafe: boolean): void {
		this._spreadSafe = spreadSafe;
	}

	get isStatic(): boolean {
		return this._isStatic;
	}

	setStatic(isStatic: boolean): void {
		this._isStatic = isStatic;
	}

	toString(): string {
		return super.toString() + '[object: ' + this.objectExpression.toString() + ' property: ' + this.property.toString() + ']';
	}
}
