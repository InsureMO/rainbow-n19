import {IAnnotation, IField} from '../Interfaces';
import {ModifiersValue, TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IFieldConstructorArgs {
	/** field name */
	name?: string;
	/** field type */
	typeOrName?: (field: IField) => TypeOrNameOrTypeVariableRef;
	declaredAnnotations?: (field: IField) => Array<IAnnotation>;
	/** modifiers */
	modifiers?: ModifiersValue;
}
