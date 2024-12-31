import {ModifiersValue} from '../Java';
import {IllegalArgumentException} from '../JavaExceptions';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Statement} from '../OrgCodehausGroovyAstStmt';
import {Opcodes} from '../OrgObjectwebAsm';
import {Optional} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {FieldNode} from './FieldNode';
import {Parameter} from './Parameter';
import {Variable} from './Variable';

export class PropertyNode extends AnnotatedNode implements Variable {
	private _field: FieldNode;
	private _getterBlock: Optional<Statement>;
	private _setterBlock: Optional<Statement>;
	private _getterName: Optional<string> = null;
	private _setterName: Optional<string> = null;
	private _modifiers: ModifiersValue;

	constructor(nameOrField: string | FieldNode, modifiers: ModifiersValue,
	            getterBlock: Statement,
	            setterBlock: Statement,
	            type?: ClassNode, owner?: ClassNode, initialValueExpression?: Expression) {
		super();
		if (typeof nameOrField === 'string') {
			this._field = new FieldNode(nameOrField, modifiers & Opcodes.ACC_STATIC, type, owner, initialValueExpression);
		} else {
			this._field = nameOrField;
		}
		this._modifiers = modifiers;
		this._getterBlock = getterBlock;
		this._setterBlock = setterBlock;
	}

	get getterBlock(): Optional<Statement> {
		return this._getterBlock;
	}

	get initialExpression(): Expression {
		return this.field.initialExpression;
	}

	setGetterBlock(getterBlock: Statement): void {
		this._getterBlock = getterBlock;
	}

	setSetterBlock(setterBlock: Statement): void {
		this._setterBlock = setterBlock;
	}

	get getterName(): Optional<string> {
		return this._getterName;
	}

	/**
	 * If an explicit getterName has been set, return that, otherwise return the default name for the property.
	 * For a property {@code foo}, the default name is {@code getFoo} except for a boolean property where
	 * {@code isFoo} is the default if no {@code getFoo} method exists in the declaring class.
	 */
	get getterNameOrDefault(): string {
		if (this.getterName != null) {
			return this.getterName;
		}
		let defaultName = 'get' + this.capitalize(this.name);
		if (ClassHelper.boolean_TYPE.equals(this.originType)
			&& !this.declaringClass.hasMethod(defaultName, Parameter.EMPTY_ARRAY)) {
			defaultName = 'is' + this.capitalize(this.name);
		}
		return defaultName;
	}

	setGetterName(getterName: string): void {
		if (`${getterName}`.length === 0) {
			throw new IllegalArgumentException('A non-null non-empty getter name is required');
		}
		this._getterName = getterName;
	}

	get setterName(): Optional<string> {
		return this._setterName;
	}

	get setterNameOrDefault(): string {
		return this.setterName != null ? this.setterName : MetaProperty.getSetterName(this.name);
	}

	setSetterName(setterName: string): void {
		if (`${setterName}`.length === 0) {
			throw new IllegalArgumentException('A non-null non-empty setter name is required');
		}
		this._setterName = setterName;
	}

	get modifiers(): ModifiersValue {
		return this._modifiers;
	}

	setModifiers(modifiers: ModifiersValue): void {
		this._modifiers = modifiers;
	}

	get name(): string {
		return this.field.name;
	}

	get setterBlock(): Optional<Statement> {
		return this._setterBlock;
	}

	get type(): ClassNode {
		return this.field.type;
	}

	setType(t: ClassNode): void {
		this.field.setType(t);
	}

	get field(): FieldNode {
		return this._field;
	}

	setField(fn: FieldNode): void {
		this._field = fn;
	}

	get isPrivate(): boolean {
		return (this.modifiers & Opcodes.ACC_PRIVATE) != 0;
	}

	get isPublic(): boolean {
		return (this.modifiers & Opcodes.ACC_PUBLIC) != 0;
	}

	get isStatic(): boolean {
		return (this.modifiers & Opcodes.ACC_STATIC) != 0;
	}

	hasInitialExpression(): boolean {
		return this.field.hasInitialExpression();
	}

	get isInStaticContext(): boolean {
		return this.field.isInStaticContext;
	}

	get isDynamicTyped(): boolean {
		return this.field.isDynamicTyped;
	}

	get isClosureSharedVariable(): boolean {
		return false;
	}

	/**
	 * @deprecated not used anymore, has no effect
	 */

	setClosureSharedVariable(inClosure: boolean): void {
		// unused
	}

	get originType(): ClassNode {
		return this.type;
	}

	private capitalize(property: string): string {
		const first = property.substring(0, 1);
		const upperCasedFirst = first.toUpperCase();
		const rest = property.substring(1);

		// Funky rule so that names like 'pNAME' will still work.
		if (first !== upperCasedFirst && rest.length > 0) {
			const firstOfRest = rest.substring(0, 1);
			const upperCasedFistOfRest = firstOfRest.toUpperCase();
			if (firstOfRest === upperCasedFistOfRest) {
				return property;
			}
		}

		return upperCasedFirst + rest;
	}
}
