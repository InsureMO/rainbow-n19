import {IGenericArrayType} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IGenericArrayTypeConstructorArgs {
	genericComponentType?: (genericArrayType: IGenericArrayType) => TypeOrName;
}