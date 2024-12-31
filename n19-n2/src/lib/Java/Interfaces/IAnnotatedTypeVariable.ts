import {IAnnotatedType} from './IAnnotatedType';

export interface IAnnotatedTypeVariable extends IAnnotatedType {
	readonly annotatedBounds: Array<IAnnotatedType>;
}
