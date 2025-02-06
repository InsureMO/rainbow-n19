import {IAnnotation, IField, IGenericDeclaration} from '../Interfaces';
import {ModifiersValue, TypeOrName} from '../TypeAlias';

export interface IFieldConstructorArgs {
	/** field name */
	name?: string;
	/** field type */
	typeOrName?: (declaration: IGenericDeclaration) => TypeOrName;
	declaredAnnotations?: (field: IField) => Array<IAnnotation>;
	/** modifiers */
	modifiers?: ModifiersValue;
}
