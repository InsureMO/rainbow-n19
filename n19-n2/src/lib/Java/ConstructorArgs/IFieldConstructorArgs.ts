import {IAnnotation, IField} from '../Interfaces';
import {ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IFieldConstructorArgs {
	/** field name */
	name?: string;
	/** field type */
	typeOrName?: (field: IField) => TypeOrName;
	declaredAnnotations?: (field: IField) => Array<IAnnotation>;
	/** modifiers */
	modifiers?: ModifiersValue;
}
