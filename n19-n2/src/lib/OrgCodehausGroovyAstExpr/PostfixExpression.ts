import {ClassNode, GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Token} from '../OrgCodehausGroovySyntax';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class PostfixExpression extends Expression {
	private readonly _operation: Token;
	private _expression: Expression;

	constructor(expression: Expression, operation: Token) {
		super();
		this._operation = operation;
		this._expression = expression;
	}

	toString(): string {
		return super.toString() + '[' + this.expression.toString() + this.operation.toString() + ']';
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitPostfixExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new PostfixExpression(transformer.transform(this.expression), this.operation);
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
		return '(' + this.expression.text + this.operation.text + ')';
	}

	get type(): ClassNode {
		return this.expression.type;
	}
}
