import {ClassName, ModifiersValue} from '../TypeAlias';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IClass} from './IClass';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {MemberType} from './MemberType';

export const PublicMember = 0;
export const DeclaredMember = 1;

export interface IMember extends IAnnotatedElement, IClassLoaderHolder {
	readonly memberType: MemberType;
	// declaring class
	/**
	 * class name of class where this member declared
	 */
	readonly declaringClassName: ClassName;
	/**
	 * class where this member declared
	 */
	readonly declaringClass: IClass;
	// name
	readonly name: string;
	setName(name: string): this;
	// modifiers
	readonly modifiers: ModifiersValue;
	setModifiers(modifiers: ModifiersValue): this;
	readonly isSynthetic: boolean;
	// equation comparable
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean;
	asKey(): string;
	// stringify
	toString(): string;
	toGenericString(): string;
	toShortString(): string;
}
