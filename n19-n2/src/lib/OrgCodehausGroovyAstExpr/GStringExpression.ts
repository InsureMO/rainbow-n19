import {IllegalArgumentException} from '../JavaExceptions';
import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {ConstantExpression} from './ConstantExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class GStringExpression extends Expression {
	private readonly _verbatimText: string;
	private readonly _strings: Array<ConstantExpression> = [];
	private readonly _values: Array<Expression> = [];

	constructor(verbatimText: string, strings?: Array<ConstantExpression>, values?: Array<Expression>) {
		super();
		this._verbatimText = verbatimText;
		this._strings.push(...(strings ?? []));
		this._values.push(...(values ?? []));
		super.setType(ClassHelper.GSTRING_TYPE);
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitGStringExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new GStringExpression(
			this.verbatimText,
			this.transformExpressions(this.strings, transformer, expr => expr instanceof ConstantExpression, ConstantExpression.name),
			this.transformExpressions(this.values, transformer));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	toString(): string {
		return super.toString()
			+ '[strings: ' + '[' + this.strings.map(s => s.toString()).join(',') + ']'
			+ ' values: ' + '[' + this.values.map(v => v.toString()).join(',') + ']]';
	}

	get text(): string {
		return this._verbatimText;
	}

	protected get verbatimText(): string {
		return this._verbatimText;
	}

	get strings(): Array<ConstantExpression> {
		return this._strings;
	}

	get values(): Array<Expression> {
		return this._values;
	}

	addString(text: ConstantExpression): void {
		if (text == null) {
			throw new IllegalArgumentException('Cannot add a null text expression');
		}
		this._strings.push(text);
	}

	addValue(value: Expression): void {
		// If the first thing is a value, then we need a dummy empty string in front of it so that when we
		// toString it they come out in the correct order.
		if (this.strings.length === 0) {
			this._strings.push(ConstantExpression.EMPTY_STRING);
		}
		this._values.push(value);
	}

	getValue(idx: number): Optional<Expression> {
		return this.values[idx];
	}

	get isConstantString(): boolean {
		return this.values.length === 0;
	}

	asConstantString(): Expression {
		let buffer: string = '';
		for (const expression of this.strings) {
			const value = expression.value;
			if (value != null) {
				buffer = buffer + value;
			}
		}
		return new ConstantExpression(buffer.toString());
	}
}
