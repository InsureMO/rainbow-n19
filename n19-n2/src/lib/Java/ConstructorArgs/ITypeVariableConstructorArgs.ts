import {IAnnotation, ITypeVariable} from '../Interfaces';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface ITypeVariableConstructorArgs {
	name?: string;
	bounds?: (typeVariable: ITypeVariable) => Array<TypeOrNameOrTypeVariableRef>;
	declaredAnnotations?: (typeVariable: ITypeVariable) => Array<IAnnotation>;
}
