import {ClassHelper, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class ListExpression extends Expression {
	private readonly _expressions: Array<Expression> = [];
	private _wrapped: boolean = false;

	constructor(expressions?: Array<Expression>) {
		super();
		this._expressions.push(...(expressions ?? []));
		// TODO COPY FROM GROOVY: get the type's of the expressions to specify the
		//  list type to List<X> if possible.
		this.setType(ClassHelper.LIST_TYPE);
	}

	addExpression(expression: Expression): void {
		this._expressions.push(expression);
	}

	get expressions(): Array<Expression> {
		return this._expressions;
	}

	setWrapped(value: boolean): void {
		this._wrapped = value;
	}

	get isWrapped(): boolean {
		return this._wrapped;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitListExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret: Expression = new ListExpression(this.transformExpressions(this.expressions, transformer));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	getExpression(i: number): Expression {
		return this.expressions[i];
	}

	get text(): string {
		return '[' + this.expressions.map(expr => expr.text).join(', ') + ']';
	}

	toString(): string {
		return super.toString() + '[' + this.expressions.map(expr => expr.toString()).join(',') + ']';
	}
}
