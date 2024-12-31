import {IAnnotatedElement} from './IAnnotatedElement';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IExecutable} from './IExecutable';
import {IIndexedElement} from './IIndexedElement';
import {ITypedElement} from './ITypedElement';

/**
 * exception thrown by {@link IExecutable}
 */
export interface IThrown extends IIndexedElement, ITypedElement, IAnnotatedElement, IClassLoaderHolder {
	// executable
	readonly executable: IExecutable;
	// equation comparable
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
	// stringify
	toString(): string;
}
