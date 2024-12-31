import {Expression} from './Expression';

export interface ExpressionTransformer {
	/**
	 * Transforms the given expression into another expression
	 */
	transform(expression: Expression): Expression;
}
