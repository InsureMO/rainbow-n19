import {TypeName} from '../TypeAlias';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IExecutable} from './IExecutable';
import {IIndexedElement} from './IIndexedElement';
import {IModifiers} from './IModifiers';
import {INamedElement} from './INamedElement';
import {IType} from './IType';
import {ITypedElement} from './ITypedElement';

/**
 * parameter of {@link IExecutable}
 */
export interface IParameter extends IIndexedElement, INamedElement, ITypedElement, IModifiers, IAnnotatedElement, IClassLoaderHolder {
	// executable
	readonly executable: IExecutable;
	// name
	readonly isNamePresent: boolean;
	// type
	readonly parameterizedTypeName: TypeName;
	readonly parameterizedType: IType;
	// modifiers
	readonly isImplicit: boolean;
	readonly isFinal: boolean;
	readonly isSynthetic: boolean;
	/** last parameter of executable could be var args */
	readonly isVarArgs: boolean;
	// equation comparable
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
	// stringify
	toString(): string;
}
