import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class TupleExpression extends Expression {
	private readonly _expressions: Array<Expression> = [];

	constructor(expressions: Array<Expression>) {
		super();
		this._expressions.push(...(expressions ?? []));
	}

	addExpression(expression: Expression): this {
		this._expressions.push(expression);
		return this;
	}

	getExpression(i: number): Optional<Expression> {
		return this._expressions[i];
	}

	get expressions(): Array<Expression> {
		return this._expressions;
		// TODO COPY FROM GROOVY: return Collections.unmodifiableList(expressions);
		//  see also org.codehaus.groovy.ast.expr.MethodCallExpression.NO_ARGUMENTS
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitTupleExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new TupleExpression(this.transformExpressions(this.expressions, transformer));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get text(): string {
		return '(' + this.expressions.map(expr => expr.text).join(', ') + ')';
	}

	toString(): string {
		return super.toString() + '(' + this.expressions.map(expr => expr.text).join(',') + ')';
	}
}
