import {IAnnotation, IClass} from '../Interfaces';
import {ClassName} from './ClassName';

export type AnnotationClassValue = ['c', ClassName | Array<ClassName>]
export type AnnotationValue =
	| number | string | boolean
	| Array<number> | Array<string> | Array<boolean>
	| AnnotationClassValue
	| IAnnotation | Array<IAnnotation>;
export type AnnotationRuntimeValue = Exclude<AnnotationValue, AnnotationClassValue> | IClass | Array<IClass>