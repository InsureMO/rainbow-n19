import {GroovyBugError} from '../OrgCodehausGroovy';
import {GroovyCodeVisitor} from '../OrgCodehausGroovyAst';
import {Token} from '../OrgCodehausGroovySyntax';
import {Optional} from '../TsAddon';
import {BinaryExpression} from './BinaryExpression';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';
import {TupleExpression} from './TupleExpression';
import {VariableExpression} from './VariableExpression';

export class DeclarationExpression extends BinaryExpression {
	/**
	 * VariableExpression: Creates a DeclarationExpression for VariableExpressions like "def x" or "String y = 'foo'".<br>
	 * Expression: Creates a DeclarationExpression for Expressions like "def (x, y) = [1, 2]"
	 * @param left
	 *      the left hand side of a variable declaration
	 * @param operation
	 *      the operation, typically an assignment operator
	 * @param right
	 *      the right hand side of a declaration
	 */
	constructor(left: Expression | VariableExpression, operation: Token, right: Expression) {
		super(left, Token.newSymbol('=', operation.startLine, operation.startColumn), right);
		DeclarationExpression.check(left);
	}

	private static check(left: Expression): void {
		if (left instanceof VariableExpression) {
			//nothing
		} else if (left instanceof TupleExpression) {
			if (left.expressions.length === 0) {
				throw new GroovyBugError('one element required for left side');
			}
		} else {
			throw new GroovyBugError('illegal left expression for declaration: ' + left);
		}
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitDeclarationExpression(this);
	}

	/**
	 * This method returns the left hand side of the declaration cast to the VariableExpression type.
	 * This is an unsafe method to call. In a multiple assignment statement, the left hand side will
	 * be a TupleExpression and a ClassCastException will occur. If you invoke this method then
	 * be sure to invoke isMultipleAssignmentDeclaration() first to check that it is safe to do so.
	 * If that method returns true then this method is safe to call.
	 *
	 * @return left hand side of normal variable declarations
	 * @throws ClassCastException if the left hand side is not a VariableExpression (and is probably a multiple assignment statement).
	 */
	get variableExpression(): Optional<VariableExpression> {
		const leftExpression = this.leftExpression;

		return leftExpression instanceof VariableExpression ? leftExpression : null;
	}

	/**
	 * This method returns the left hand side of the declaration cast to the TupleExpression type.
	 * This is an unsafe method to call. In a single assignment statement, the left hand side will
	 * be a VariableExpression and a ClassCastException will occur. If you invoke this method then
	 * be sure to invoke isMultipleAssignmentDeclaration() first to check that it is safe to do so.
	 * If that method returns true then this method is safe to call.
	 * @return
	 *      left hand side of multiple assignment declarations
	 * @throws ClassCastException
	 *      if the left hand side is not a TupleExpression (and is probably a VariableExpression).
	 *
	 */
	get tupleExpression(): Optional<TupleExpression> {
		const leftExpression = this.leftExpression;

		return leftExpression instanceof TupleExpression ? leftExpression : null;
	}

	get text(): string {
		let text: string = '';

		if (!this.isMultipleAssignmentDeclaration) {
			const v = this.variableExpression;
			if (v.isDynamicTyped) {
				text = text + 'def';
			} else {
				text = text + ClassNodeUtils.formatTypeName(v.type);
			}
			text = text + ' ' + v.text;
		} else {
			const t = this.tupleExpression;
			text = text + 'def (';
			text = text + t.expressions.map(expr => {
				if (expr instanceof VariableExpression) {
					return expr.isDynamicTyped ? expr.text : (ClassNodeUtils.formatTypeName(expr.type) + ' ');
				} else {
					return expr.text;
				}
			}).join(', ');
			text = text + ')';
		}
		text = text + ' ' + this.operation.text;
		text = text + ' ' + this.rightExpression.text;

		return text.toString();
	}

	/**
	 * This method sets the leftExpression for this BinaryExpression. The parameter must be
	 * either a VariableExpression or a TupleExpression with one or more elements.
	 * @param leftExpression
	 *      either a VariableExpression or a TupleExpression with one or more elements.
	 */
	setLeftExpression(leftExpression: Expression): void {
		DeclarationExpression.check(leftExpression);
		super.setLeftExpression(leftExpression);
	}

	setRightExpression(rightExpression: Expression): void {
		super.setRightExpression(rightExpression);
	}

	transformExpression(transformer: ExpressionTransformer): Expression {
		const ret = new DeclarationExpression(transformer.transform(this.leftExpression),
			this.operation, transformer.transform(this.rightExpression));
		ret.setSourcePosition(this);
		ret.addAnnotations(this.annotations);
		ret.setDeclaringClass(this.declaringClass);
		ret.copyNodeMetaData(this);
		return ret;
	}

	/**
	 * This method tells you if this declaration is a multiple assignment declaration, which
	 * has the form "def (x, y) = ..." in Groovy. If this method returns true, then the left
	 * hand side is an ArgumentListExpression. Do not call "getVariableExpression()" on this
	 * object if this method returns true, instead use "getLeftExpression()".
	 * @return
	 *      true if this declaration is a multiple assignment declaration, which means the
	 *      left hand side is an ArgumentListExpression.
	 */
	get isMultipleAssignmentDeclaration(): boolean {
		return this.leftExpression instanceof TupleExpression;
	}
}
