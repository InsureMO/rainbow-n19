import {TypeOrName} from '../TypeAlias';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IAnnotatedType} from './IAnnotatedType';
import {IGenericDeclaration} from './IGenericDeclaration';
import {IType} from './IType';

export interface ITypeVariable extends IAnnotatedElement, IType {
	readonly genericDeclaration: IGenericDeclaration;
	readonly name: string;
	setName(name: string): this;
	readonly index: number;
	readonly bounds: Array<IType>;
	setBounds(bounds: Array<TypeOrName>): this;
	readonly annotatedBounds: Array<IAnnotatedType>;
	setAnnotatedBounds(bounds: Array<IAnnotatedType>): this;
	toString(): string;
}
