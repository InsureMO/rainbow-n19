import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class ConstantExpression extends Expression {
	// The following fields are only used internally; every occurrence of a user-defined expression of the same kind
	// has its own instance so as to preserve line information. Consequently, to test for such an expression, don't
	// compare against the field but call isXXXExpression() instead.
	static NULL: ConstantExpression = new ConstantExpression(null);
	static TRUE: ConstantExpression = new ConstantExpression(true);
	static FALSE: ConstantExpression = new ConstantExpression(false);
	static EMPTY_STRING: ConstantExpression = new ConstantExpression('');
	static PRIM_TRUE: ConstantExpression = new ConstantExpression(true, true);
	static PRIM_FALSE: ConstantExpression = new ConstantExpression(false, true);
	// the following fields are only used internally; there are no user-defined expressions of the same kind
	static VOID: ConstantExpression = new ConstantExpression(Void.class);
	static EMPTY_EXPRESSION: ConstantExpression = new ConstantExpression(null);

	private readonly _value: any;
	private _constantName: string;

	constructor(value: any, keepPrimitive: boolean = false) {
		super();
		this._value = value;
		if (value != null) {
			if (keepPrimitive) {
				if (value instanceof Integer) {
					this.setType(ClassHelper.int_TYPE);
				} else if (value instanceof Long) {
					this.setType(ClassHelper.long_TYPE);
				} else if (value instanceof Boolean) {
					this.setType(ClassHelper.boolean_TYPE);
				} else if (value instanceof Double) {
					this.setType(ClassHelper.double_TYPE);
				} else if (value instanceof Float) {
					this.setType(ClassHelper.float_TYPE);
				} else if (value instanceof Character) {
					this.setType(ClassHelper.char_TYPE);
				} else {
					this.setType(ClassHelper.make(value.getClass()));
				}
				// TODO COPY FROM GROOVY: more cases here
			} else {
				this.setType(ClassHelper.make(value.getClass()));
			}
		}
	}

	toString(): string {
		return super.toString() + '[' + this.value + ']';
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitConstantExpression(this);
	}

	transformExpression(_transformer: ExpressionTransformer): Expression {
		return this;
	}

	/**
	 * @return the value of this constant expression
	 */
	get value(): Optional<any> {
		return this._value;
	}

	get text(): string {
		return this.value == null ? 'null' : this.value.toString();
	}

	get constantName(): string {
		return this._constantName;
	}

	setConstantName(constantName: string): void {
		this._constantName = constantName;
	}

	get isNullExpression(): boolean {
		return this.value == null;
	}

	get isTrueExpression(): boolean {
		return this.value === true;
	}

	get isFalseExpression(): boolean {
		return this.value === false;
	}

	get isEmptyStringExpression(): boolean {
		return '' === this.value;
	}
}