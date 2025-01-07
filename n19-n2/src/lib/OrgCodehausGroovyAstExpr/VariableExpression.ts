import {ClassHelper, ClassNode, GroovyCodeVisitor, Variable} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';
import {Expression} from './Expression';
import {ExpressionTransformer} from './ExpressionTransformer';

export class VariableExpression extends Expression implements Variable {
	// The following fields are only used internally; every occurrence of a user-defined expression of the same kind
	// has its own instance so as to preserve line information. Consequently, to test for such an expression, don't
	// compare against the field but call isXXXExpression() instead.
	static readonly THIS_EXPRESSION = new VariableExpression('this', ClassHelper.dynamicType());
	static readonly SUPER_EXPRESSION = new VariableExpression('super', ClassHelper.dynamicType());

	private readonly _variable: string;
	private _modifiers: number;
	private _inStaticContext: boolean = false;
	private _isDynamicTyped: boolean = false;
	private _accessedVariable: Optional<Variable>;
	private _closureShare: boolean = false;
	private _useRef: boolean = false;
	private readonly _originType: ClassNode;

	get accessedVariable(): Variable {
		return this._accessedVariable;
	}

	setAccessedVariable(origin: Variable): void {
		this._accessedVariable = origin;
	}

	constructor(nameOrVariable: string | Variable, type?: ClassNode) {
		super();
		if (typeof nameOrVariable === 'string') {
			this._variable = nameOrVariable;
			if (type == null) {
				type = ClassHelper.dynamicType();
			}
			this._originType = type;
			this.setType(ClassHelper.isPrimitiveType(type) ? ClassHelper.getWrapper(type) : type);
		} else {
			this._originType = nameOrVariable.originType;
			this.setAccessedVariable(nameOrVariable);
			this.setModifiers(nameOrVariable.modifiers);
		}
	}

	visit(visitor: GroovyCodeVisitor): void {
		visitor.visitVariableExpression(this);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	transformExpression(_transformer: ExpressionTransformer): Expression {
		return this;
	}

	get text(): string {
		return this._variable;
	}

	get name(): string {
		return this._variable;
	}

	toString(): string {
		return super.toString() + '[variable: ' + this.name + (this.isDynamicTyped ? '' : ' type: ' + this.type.text) + ']';
	}

	/**
	 * always returns null
	 */
	get initialExpression(): Optional<Expression> {
		return null;
	}

	/**
	 * always returns false
	 */
	hasInitialExpression(): boolean {
		return false;
	}

	get isInStaticContext(): boolean {
		if (this.accessedVariable != null && this.accessedVariable !== this) {
			return this.accessedVariable.isInStaticContext;
		}
		return this._inStaticContext;
	}

	setInStaticContext(inStaticContext: boolean): void {
		this._inStaticContext = inStaticContext;
	}

	/**
	 * Set the type of this variable. If you call this method from an AST transformation and that
	 * the {@link #getAccessedVariable() accessed variable} is ({@link #isClosureSharedVariable() shared},
	 * this operation is unsafe and may lead to a verify error at compile time. Instead, set the type of
	 * the {@link #getAccessedVariable() accessed variable}
	 *
	 * @param cn the type to be set on this variable
	 */
	setType(cn: ClassNode): void {
		super.setType(cn);
		this._isDynamicTyped = this._isDynamicTyped || ClassHelper.isDynamicTyped(cn);
	}

	get isDynamicTyped(): boolean {
		if (this.accessedVariable != null && this.accessedVariable !== this) {
			return this.accessedVariable.isDynamicTyped;
		}
		return this._isDynamicTyped;
	}

	/**
	 * Tells if this variable or the accessed variable is used in a closure context, like in the following
	 * example :
	 * <pre>def str = 'Hello'
	 * def cl = { println str }
	 * </pre>
	 * The "str" variable is closure shared.
	 *
	 * @return true if this variable is used in a closure
	 */
	get isClosureSharedVariable(): boolean {
		if (this.accessedVariable != null && this.accessedVariable !== this) {
			return this.accessedVariable.isClosureSharedVariable;
		}
		return this._closureShare;
	}

	/**
	 * Use this method to tell if a variable is used in a closure, like in the following example:
	 * <pre>def str = 'Hello'
	 * def cl = { println str }
	 * </pre>
	 * The "str" variable is closure shared. The variable expression inside the closure references an
	 * accessed variable "str" which must have the closure shared flag set.
	 *
	 * @param inClosure tells if this variable is later referenced in a closure
	 */
	setClosureSharedVariable(inClosure: boolean): void {
		this._closureShare = inClosure;
	}

	get modifiers(): number {
		return this._modifiers;
	}

	/**
	 * For internal use only. This flag is used by compiler internals and should probably
	 * be converted to a node metadata in the future.
	 *
	 * @param useRef
	 */
	setUseReferenceDirectly(useRef: boolean): void {
		this._useRef = useRef;
	}

	/**
	 * For internal use only. This flag is used by compiler internals and should probably
	 * be converted to a node metadata in the future.
	 */
	get isUseReferenceDirectly(): boolean {
		return this._useRef;
	}

	getType(): ClassNode {
		if (this.accessedVariable != null && this.accessedVariable !== this) {
			return this.accessedVariable.type;
		}
		return super.type;
	}

	/**
	 * Returns the type which was used when this variable expression was created. For example,
	 * {@link #getType()} may return a boxed type while this method would return the primitive type.
	 *
	 * @return the type which was used to define this variable expression
	 */
	get originType(): ClassNode {
		if (this.accessedVariable != null && this.accessedVariable !== this) {
			return this.accessedVariable.originType;
		}
		return this._originType;
	}

	get isThisExpression(): boolean {
		return 'this' === this.name;
	}

	get isSuperExpression(): boolean {
		return 'super' === this.name;
	}

	setModifiers(modifiers: number): void {
		this._modifiers = modifiers;
	}
}
