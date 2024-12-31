import {IAnnotatedType} from './IAnnotatedType';

export interface IAnnotatedArrayType extends IAnnotatedType {
	readonly annotatedGenericComponentType: IAnnotatedType;
}
