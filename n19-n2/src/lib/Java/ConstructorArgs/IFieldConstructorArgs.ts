import {IAnnotation, IField} from '../Interfaces';
import {ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IFieldConstructorArgs {
	/** field name */
	name?: string;
	/** field type */
	typeOrName?: TypeOrName;
	declaredAnnotations?: (field: IField) => Array<IAnnotation>;
	/** modifiers */
	modifiers?: ModifiersValue;
}
