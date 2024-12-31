import {ModifiersValue} from '../TypeAlias';

export class ModifiersSupport<T> {
	private readonly _target: T;
	private _modifiers: ModifiersValue = 0;

	constructor(target: T) {
		this._target = target;
	}

	get target(): T {
		return this._target;
	}

	get modifiers(): ModifiersValue {
		return this._modifiers;
	}

	/**
	 * replace the modifiers of this field
	 */
	setModifiers(modifiers: ModifiersValue): this {
		this._modifiers = modifiers ?? 0;
		return this;
	}
}
