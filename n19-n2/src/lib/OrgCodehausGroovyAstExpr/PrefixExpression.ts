import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Token} from '../OrgCodehausGroovySyntax';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class PrefixExpression extends Expression {
	private readonly _operation: Token;
	private _expression: Expression;

	constructor(operation: Token, expression: Expression) {
		super();
		this._operation = operation;
		this._expression = expression;
	}

	toString(): string {
		return super.toString() + '[' + this.operation.toString() + this.expression.toString() + ']';
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitPrefixExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new PrefixExpression(this.operation, transformer.transform(this.expression));
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	setExpression(expression: Expression): void {
		this._expression = expression;
	}

	get operation(): Token {
		return this._operation;
	}

	get expression(): Expression {
		return this._expression;
	}

	get text(): string {
		return '(' + this.operation.text + this.expression.text + ')';
	}

	get type(): ClassNode {
		return this.expression.type;
	}
}
