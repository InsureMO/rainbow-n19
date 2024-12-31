import {IAnnotation, IType} from '../Interfaces';

export interface ITypeVariableConstructorArgs {
	name?: string;
	bounds?: Array<IType>;
	declaredAnnotations?: Array<IAnnotation>;
}
