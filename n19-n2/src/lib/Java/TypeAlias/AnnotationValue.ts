import {IAnnotation} from '../Interfaces';
import {ClassName} from './ClassName';

export type AnnotationValue =
	| number | string | boolean
	| Array<number> | Array<string> | Array<boolean>
	| ClassName | Array<ClassName>
	| IAnnotation | Array<IAnnotation>;
