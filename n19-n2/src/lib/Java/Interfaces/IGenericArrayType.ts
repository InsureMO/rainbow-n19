import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IGenericDeclaration} from './IGenericDeclaration';
import {IType} from './IType';

export interface IGenericArrayType extends IType, IClassLoaderHolder {
	readonly genericDeclaration: IGenericDeclaration;
	readonly genericComponentType: IType;
	setGenericComponentType(genericComponentType: IType): this;
	toString(): string;
}
