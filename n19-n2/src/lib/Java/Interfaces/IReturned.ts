import {IAnnotatedElement} from './IAnnotatedElement';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IExecutable} from './IExecutable';
import {ITypedElement} from './ITypedElement';

/**
 * returned by {@link IMethod}
 */
export interface IReturned extends ITypedElement, IAnnotatedElement, IClassLoaderHolder {
	// executable
	readonly executable: IExecutable;
	// equation comparable
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
	// stringify
	toString(): string;
}
