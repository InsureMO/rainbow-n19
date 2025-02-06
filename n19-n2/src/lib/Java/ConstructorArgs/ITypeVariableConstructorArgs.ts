import {IAnnotatedElement, IAnnotation, IGenericDeclaration} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface ITypeVariableConstructorArgs {
	name?: string;
	bounds?: (declaration: IGenericDeclaration) => Array<TypeOrName>;
	declaredAnnotations?: (annotatedElement: IAnnotatedElement) => Array<IAnnotation>;
}
