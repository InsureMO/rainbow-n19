import {ClassName, TypeName, TypeOrName} from '../TypeAlias';
import {IAnnotatedType} from './IAnnotatedType';
import {IClass} from './IClass';
import {IType} from './IType';

/**
 * element which is typed.
 * @see IParameter
 * @see IThrown
 */
export interface ITypedElement {
	/**
	 * type class name
	 */
	get typeName(): ClassName;
	/**
	 * type class
	 */
	get type(): IClass;
	/**
	 * generic type name when generic info exists, or type name when generic info not exists
	 */
	get genericTypeName(): TypeName;
	/**
	 * generic type when generic info exists, or type class when generic info not exists
	 */
	get genericType(): IType;
	get annotatedType(): IAnnotatedType;
	setTypeOrName(typeOrName: TypeOrName): this;
}
