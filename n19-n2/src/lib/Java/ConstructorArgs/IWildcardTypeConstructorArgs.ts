import {IWildcardType} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export interface IWildcardTypeConstructorArgs {
	upperBounds?: (wildcardType: IWildcardType) => Array<TypeOrName>;
	lowerBounds?: (wildcardType: IWildcardType) => Array<TypeOrName>;
}
