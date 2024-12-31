import {ITypeVariableConstructorArgs} from '../ConstructorArgs';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {ITypeVariable} from './ITypeVariable';

/**
 * could declare generic types
 * and all its implementations (class/method/constructor) are annotated element.
 */
export interface IGenericDeclaration extends IAnnotatedElement, IClassLoaderHolder {
	// type parameters
	readonly typeParameters: Array<ITypeVariable>;
	setTypeParameters(typeParameters: Array<ITypeVariable>): this;
	createTypeParameter(args?: ITypeVariableConstructorArgs): ITypeVariable;
	// equation comparable
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
}
