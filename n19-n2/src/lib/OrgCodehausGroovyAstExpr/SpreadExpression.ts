import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class SpreadExpression extends Expression {
	private readonly _expression: Expression;

	constructor(expression: Expression) {
		super();
		this._expression = expression;
	}

	get expression(): Expression {
		return this._expression;
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitSpreadExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new SpreadExpression(transformer.transform(this.expression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get text(): string {
		return '*' + this.expression.text;
	}

	get type(): ClassNode {
		return this.expression.type;
	}
}
