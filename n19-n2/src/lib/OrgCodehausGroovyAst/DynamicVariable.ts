import {ModifiersValue} from '../Java';
import {Expression} from '../OrgCodehausGroovyAstExpr';
import {Optional} from '../TsAddon';
import {ClassHelper} from './ClassHelper';
import {ClassNode} from './ClassNode';
import {Variable} from './Variable';

export class DynamicVariable implements Variable {
	private readonly _name: string;
	private _closureShare: boolean = false;
	private _staticContext: boolean = false;

	constructor(name: string, context: boolean) {
		this._name = name;
		this._staticContext = context;
	}

	get type(): ClassNode {
		return ClassHelper.dynamicType();
	}

	get name(): string {
		return this._name;
	}

	get initialExpression(): Optional<Expression> {
		return null;
	}

	hasInitialExpression(): boolean {
		return false;
	}

	get isInStaticContext(): boolean {
		return this._staticContext;
	}

	get isDynamicTyped(): boolean {
		return true;
	}

	get isClosureSharedVariable(): boolean {
		return this._closureShare;
	}

	setClosureSharedVariable(inClosure: boolean): void {
		this._closureShare = inClosure;
	}

	get modifiers(): ModifiersValue {
		return 0;
	}

	get originType(): ClassNode {
		return this.type;
	}
}
