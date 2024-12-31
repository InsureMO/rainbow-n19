import {ModifiersValue} from '../TypeAlias';

export interface IModifiers {
	readonly modifiers: ModifiersValue;
	setModifiers(modifiers: ModifiersValue): this
}