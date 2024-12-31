import {ModifiersValue} from '../Java';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';
import {AnnotatedNode} from './AnnotatedNode';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {Variable} from './Variable';

export class Parameter extends AnnotatedNode implements Variable {
	static readonly EMPTY_ARRAY: Array<Parameter> = [];

	private _type: ClassNode;
	private readonly _name: string;
	private _originType: ClassNode;
	private _dynamicTyped: boolean = false;
	private _closureShare: boolean = false;
	private _defaultValue: Expression;
	private _hasDefaultValue: boolean = false;
	private _inStaticContext: boolean = false;
	private _modifiers: ModifiersValue;

	constructor(type: ClassNode, name: string, defaultValue?: Expression) {
		super();
		this._name = name;
		this.setType(type);
		this._originType = type;
		this._defaultValue = defaultValue;
		this._hasDefaultValue = defaultValue != null;
	}

	toString(): string {
		return super.toString() + '[name: ' + this.name + (this.type == null ? '' : ', type: ' + this.type.toString(false)) + ', hasDefaultValue: ' + this.hasInitialExpression() + ']';
	}

	get name(): string {
		return this._name;
	}

	get type(): ClassNode {
		return this._type;
	}

	setType(type: ClassNode): void {
		this._type = type;
		this._dynamicTyped = this._dynamicTyped || ClassHelper.isDynamicTyped(type);
	}

	hasInitialExpression(): boolean {
		return this._hasDefaultValue;
	}

	/**
	 * @return the default value expression for this parameter or null if
	 * no default value is specified
	 */
	get initialExpression(): Optional<Expression> {
		return this._defaultValue;
	}

	setInitialExpression(init: Expression): void {
		this._defaultValue = init;
		this._hasDefaultValue = (init != null);
	}

	get isInStaticContext(): boolean {
		return this._inStaticContext;
	}

	setInStaticContext(inStaticContext: boolean): void {
		this._inStaticContext = inStaticContext;
	}

	get isDynamicTyped(): boolean {
		return this._dynamicTyped;
	}

	get isClosureSharedVariable(): boolean {
		return this._closureShare;
	}

	setClosureSharedVariable(inClosure: boolean): void {
		this._closureShare = inClosure;
	}

	get modifiers(): ModifiersValue {
		return this._modifiers;
	}

	get originType(): ClassNode {
		return this._originType;
	}

	setOriginType(cn: ClassNode): void {
		this._originType = cn;
	}

	setModifiers(modifiers: ModifiersValue): void {
		this._modifiers = modifiers;
	}

	get defaultValue(): Optional<Expression> {
		return this._defaultValue;
	}
}
