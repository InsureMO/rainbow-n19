import {IAnnotatedType} from './IAnnotatedType';

export interface IAnnotatedParameterizedType extends IAnnotatedType {
	readonly annotatedActualTypeArguments: Array<IAnnotatedType>;
}
