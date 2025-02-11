import {IWildcardType} from '../Interfaces';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export interface IWildcardTypeConstructorArgs {
	upperBounds?: (wildcardType: IWildcardType) => Array<TypeOrNameOrTypeVariableRef>;
	lowerBounds?: (wildcardType: IWildcardType) => Array<TypeOrNameOrTypeVariableRef>;
}
