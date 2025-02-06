import {TypeOrName} from '../TypeAlias';

export interface IWildcardTypeConstructorArgs {
	upperBounds?: Array<TypeOrName>;
	lowerBounds?: Array<TypeOrName>;
}
