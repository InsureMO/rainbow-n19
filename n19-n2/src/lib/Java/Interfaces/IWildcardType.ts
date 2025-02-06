import {TypeOrName} from '../TypeAlias';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IGenericDeclaration} from './IGenericDeclaration';
import {IType} from './IType';

export interface IWildcardType extends IType, IClassLoaderHolder {
	readonly genericDeclaration: IGenericDeclaration;
	readonly upperBounds: Array<IType>;
	setUpperBounds(bounds: Array<TypeOrName>): this;
	readonly lowerBounds: Array<IType>;
	setLowerBounds(bounds: Array<TypeOrName>): this;
	toString(): string;
}
