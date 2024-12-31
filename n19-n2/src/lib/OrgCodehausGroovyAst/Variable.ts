import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';
import {ClassNode} from './ClassNode';

export interface Variable {
	/**
	 * the type of the variable
	 */
	readonly type: ClassNode;
	/**
	 * the type before wrapping primitives type of the variable
	 */
	readonly originType: ClassNode;
	/**
	 * the name of the variable
	 */
	readonly name: string;
	/**
	 * expression used to initialize the variable or null of there
	 * is no initialization.
	 */
	readonly initialExpression: Optional<Expression>;
	/**
	 * returns true if there is an initialization expression
	 */
	hasInitialExpression(): boolean;
	/**
	 * returns true if this variable is used in a static context.
	 * A static context is any static initializer block, when this variable
	 * is declared as static or when this variable is used in a static method
	 */
	readonly isInStaticContext: boolean;
	readonly isDynamicTyped: boolean;
	readonly isClosureSharedVariable: boolean;
	setClosureSharedVariable(inClosure: boolean): void;
	readonly modifiers: number;
}
