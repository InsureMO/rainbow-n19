import {IAnnotatedElement, IAnnotation, IType} from '../Interfaces';

export interface ITypeVariableConstructorArgs {
	name?: string;
	bounds?: Array<IType>;
	declaredAnnotations?: (annotatedElement: IAnnotatedElement) => Array<IAnnotation>;
}
