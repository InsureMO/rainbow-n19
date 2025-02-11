import {IGenericArrayType} from '../Interfaces';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IGenericArrayTypeConstructorArgs {
	genericComponentType?: (genericArrayType: IGenericArrayType) => TypeOrNameOrTypeVariableRef;
}