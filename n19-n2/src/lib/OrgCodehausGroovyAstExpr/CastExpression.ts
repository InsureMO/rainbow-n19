import {UnsupportedOperationException} from '../JavaExceptions';
import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class CastExpression extends Expression {
	private _expression: Expression;
	private readonly _ignoreAutoboxing: boolean;
	private _coerce: boolean;
	private _strict: boolean;

	static asExpression(type: ClassNode, expression: Expression): CastExpression {
		const answer = new CastExpression(type, expression);
		answer.setCoerce(true);
		return answer;
	}

	constructor(type: ClassNode, expression: Expression, ignoreAutoboxing: boolean = false) {
		super();
		this._expression = expression;
		this._ignoreAutoboxing = ignoreAutoboxing;
		super.setType(type);
	}

	get expression(): Expression {
		return this._expression;
	}

	setExpression(expression: Expression): void {
		this._expression = expression;
	}

	get isIgnoringAutoboxing(): boolean {
		return this._ignoreAutoboxing;
	}

	get isCoerce(): boolean {
		return this._coerce;
	}

	setCoerce(coerce: boolean): void {
		this._coerce = coerce;
	}

	/**
	 * If strict mode is true, then when the compiler generates a cast, it will
	 * disable Groovy casts and rely on a strict cast (CHECKCAST).
	 */
	get isStrict(): boolean {
		return this._strict;
	}

	/**
	 * If strict mode is true, then when the compiler generates a cast, it will
	 * disable Groovy casts and rely on a strict cast (CHECKCAST).
	 */
	setStrict(strict: boolean): void {
		this._strict = strict;
	}

	toString(): string {
		return super.toString() + '[' + this.text + ']';
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitCastExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new CastExpression(this.type, transformer.transform(this.expression), this.isIgnoringAutoboxing);
		ret.setCoerce(this.isCoerce);
		ret.setStrict(this.isStrict);
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get text(): string {
		if (this.isCoerce) {
			return this.expression.text + ' as ' + this.type.toString(false);
		}
		return '(' + this.type.toString(false) + ') ' + this.expression.text;
	}

	setType(_type: ClassNode): void {
		throw new UnsupportedOperationException();
	}
}
