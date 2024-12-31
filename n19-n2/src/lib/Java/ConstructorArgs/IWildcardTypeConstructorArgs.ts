import {IType} from '../Interfaces';

export interface IWildcardTypeConstructorArgs {
	upperBounds?: Array<IType>;
	lowerBounds?: Array<IType>;
}
