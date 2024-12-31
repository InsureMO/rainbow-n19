import {ClassNode, GroovyCodeVisitor, Variable} from '../OrgCodehausGroovyAst';
import {Token, Types} from '../OrgCodehausGroovySyntax';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {VariableExpression} from './VariableExpression';

export class BinaryExpression extends Expression {
	private _leftExpression: Expression;
	private _rightExpression: Expression;
	private readonly _operation: Token;
	private _safe: boolean = false;

	constructor(leftExpression: Expression, operation: Token, rightExpression: Expression, safe: boolean = false) {
		super();
		this._leftExpression = leftExpression;
		this._operation = operation;
		this._rightExpression = rightExpression;
		this._safe = safe;
	}

	toString(): string {
		return super.toString() + '[' + this.leftExpression.toString() + this.operation.toString() + this.rightExpression.toString() + ']';
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitBinaryExpression(this);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new BinaryExpression(transformer.transform(this.leftExpression), this.operation, transformer.transform(this.rightExpression), this.isSafe);
		ret.setSourcePosition(this);
		ret.copyNodeMetaData(this);
		return ret;
	}

	get leftExpression(): Expression {
		return this._leftExpression;
	}

	setLeftExpression(leftExpression: Expression): void {
		this._leftExpression = leftExpression;
	}

	setRightExpression(rightExpression: Expression): void {
		this._rightExpression = rightExpression;
	}

	get operation(): Token {
		return this._operation;
	}

	get rightExpression(): Expression {
		return this._rightExpression;
	}

	getText(): string {
		if (this.operation.type == Types.LEFT_SQUARE_BRACKET) {
			return this.leftExpression.text + (this.isSafe ? '?' : '') + '[' + this.rightExpression.text + ']';
		}
		return '(' + this.leftExpression.text + ' ' + this.operation.text + ' ' + this.rightExpression.text + ')';
	}

	get isSafe(): boolean {
		return this._safe;
	}

	setIsSafe(safe: boolean): void {
		this._safe = safe;
	}

	/**
	 * Creates an assignment expression in which the specified expression
	 * is written into the specified variable name.
	 */

	static newAssignmentExpression(variable: Variable, rhs: Expression): BinaryExpression {
		const lhs = new VariableExpression(variable);
		const operator: Token = Token.newPlaceholder(Types.ASSIGN);

		return new BinaryExpression(lhs, operator, rhs);
	}

	/**
	 * Creates variable initialization expression in which the specified expression
	 * is written into the specified variable name.
	 */

	static newInitializationExpression(variable: string, type: ClassNode, rhs: Expression): BinaryExpression {
		const lhs = new VariableExpression(variable);

		if (type != null) {
			lhs.setType(type);
		}

		const operator: Token = Token.newPlaceholder(Types.ASSIGN);

		return new BinaryExpression(lhs, operator, rhs);
	}
}
