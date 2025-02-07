import {IAnnotation, ITypeVariable} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface ITypeVariableConstructorArgs {
	name?: string;
	bounds?: (typeVariable: ITypeVariable) => Array<TypeOrName>;
	declaredAnnotations?: (typeVariable: ITypeVariable) => Array<IAnnotation>;
}
