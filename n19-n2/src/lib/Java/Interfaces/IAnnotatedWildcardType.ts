import {IAnnotatedType} from './IAnnotatedType';

export interface IAnnotatedWildcardType extends IAnnotatedType {
	readonly annotatedLowerBounds: Array<IAnnotatedType>;
	readonly annotatedUpperBounds: Array<IAnnotatedType>;
}
