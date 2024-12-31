import {ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IFieldConstructorArgs {
	/** field name */
	name?: string;
	/** field type */
	typeOrName?: TypeOrName;
	/** modifiers */
	modifiers?: ModifiersValue;
}
