import {IClass, ModifiersValue} from '../Java';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {Variable} from './Variable';

export class FieldNode extends AnnotatedNode implements Variable {
	private _name: string;
	private _modifiers: ModifiersValue;
	private _type: ClassNode;
	private _owner: ClassNode;
	private _initialValueExpression: Expression;
	private _dynamicTyped: boolean;
	private _holder: boolean;
	private _originType: ClassNode;

	static newStatic(theClass: IClass, name: string): FieldNode /* throws SecurityException, NoSuchFieldException */ {
		const field = theClass.getField(name);
		const fieldType = ClassHelper.make(field.type);
		return new FieldNode(name, Opcodes.ACC_PUBLIC | Opcodes.ACC_STATIC, fieldType, ClassHelper.make(theClass), null);
	}

	constructor(name: string, modifiers: ModifiersValue, type: ClassNode, owner: ClassNode, initialValueExpression: Expression) {
		super();
		this._name = name;
		this._modifiers = modifiers;
		this.setType(type);
		this._owner = owner;
		this._initialValueExpression = initialValueExpression;
	}

	get initialExpression(): Optional<Expression> {
		return this._initialValueExpression;
	}

	get modifiers(): ModifiersValue {
		return this._modifiers;
	}

	get name(): string {
		return this._name;
	}

	get type(): ClassNode {
		return this._type;
	}

	setType(type: ClassNode): void {
		this._type = type;
		this._originType = type;
		this._dynamicTyped = this._dynamicTyped || ClassHelper.isDynamicTyped(type);
	}

	get owner(): ClassNode {
		return this._owner;
	}

	get isHolder(): boolean {
		return this._holder;
	}

	setHolder(holder: boolean): void {
		this._holder = holder;
	}

	get isDynamicTyped(): boolean {
		return this._dynamicTyped;
	}

	setModifiers(modifiers: ModifiersValue): void {
		this._modifiers = modifiers;
	}

	/**
	 * @return true if the field is static
	 */
	get isStatic(): boolean {
		return (this._modifiers & Opcodes.ACC_STATIC) != 0;
	}

	/**
	 * @return true if the field is an enum
	 */
	get isEnum(): boolean {
		return (this._modifiers & Opcodes.ACC_ENUM) != 0;
	}

	/**
	 * @return true if the field is final
	 */
	get isFinal(): boolean {
		return (this._modifiers & Opcodes.ACC_FINAL) != 0;
	}

	/**
	 * @return true if the field is volatile
	 */
	get isVolatile(): boolean {
		return (this._modifiers & Opcodes.ACC_VOLATILE) != 0;
	}

	/**
	 * @return true if the field is public
	 */
	get isPublic(): boolean {
		return (this._modifiers & Opcodes.ACC_PUBLIC) != 0;
	}

	/**
	 * @return true if the field is protected
	 */
	get isProtected(): boolean {
		return (this._modifiers & Opcodes.ACC_PROTECTED) != 0;
	}

	/**
	 * @return true if the field is private
	 * @since 2.5.0
	 */
	get isPrivate(): boolean {
		return (this._modifiers & Opcodes.ACC_PRIVATE) != 0;
	}

	/**
	 * @param owner The owner to set.
	 */
	setOwner(owner: ClassNode): void {
		this._owner = owner;
	}

	hasInitialExpression(): boolean {
		return this._initialValueExpression != null;
	}

	get isInStaticContext(): boolean {
		return this.isStatic;
	}

	get initialValueExpression(): Optional<Expression> {
		return this._initialValueExpression;
	}

	setInitialValueExpression(initialValueExpression: Expression): void {
		this._initialValueExpression = initialValueExpression;
	}

	/**
	 * @deprecated
	 */
	get isClosureSharedVariable(): boolean {
		return false;
	}

	/**
	 * @deprecated
	 */
	setClosureSharedVariable(inClosure: boolean): void {
	}

	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof FieldNode)) {
			return false;
		}

		// TODO SEEMS NEVER HAPPEN, BUT YOU NEVER KNOW THAT.
		if (Object.getPrototypeOf(o).constructor.name === 'LazyFieldNode') {
			// obj.getClass().getName().equals('org.codehaus.groovy.ast.decompiled.LazyFieldNode')) {
			return o.equals(this);
		}
		return false;
	}

	get originType(): ClassNode {
		return this._originType;
	}

	setOriginType(cn: ClassNode): void {
		this._originType = cn;
	}

	rename(name: string): void {
		this.declaringClass.renameField(this.name, name);
		this._name = name;
	}
}
