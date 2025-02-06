import {AnnotationValue, ClassName} from '../TypeAlias';

export interface IAnnotationConstructorArgs {
	/** class name */
	className: ClassName;
	values?: Array<[string, AnnotationValue]>;
}
