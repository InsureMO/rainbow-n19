import {Optional} from '../../TsAddon';
import {AnnotationValue, ClassName} from '../TypeAlias';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IClass} from './IClass';
import {IClassLoaderHolder} from './IClassLoaderHolder';

export interface IAnnotation extends IClassLoaderHolder {
	readonly annotatedElement: IAnnotatedElement;
	/** annotation class name */
	readonly typeName: ClassName;
	/** annotation class */
	readonly type: IClass;
	setTypeName(name: ClassName): this;
	set<V extends AnnotationValue>(name: string, value: V): IAnnotation;
	get<V extends AnnotationValue>(name: string): Optional<V>;
	value<V extends AnnotationValue>(value: V): IAnnotation;
	value<V extends AnnotationValue>(): Optional<V>;
}
