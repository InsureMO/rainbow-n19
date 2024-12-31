import {Optional} from '../../TsAddon';
import {IAnnotationConstructorArgs} from '../ConstructorArgs';
import {ClassName} from '../TypeAlias';
import {IAnnotation} from './IAnnotation';
import {IClass} from './IClass';
import {IClassLoaderHolder} from './IClassLoaderHolder';

export interface IAnnotatedElement extends IClassLoaderHolder {
	/** ignore the repeatable annotations */
	readonly annotations: Array<IAnnotation>;
	/** ignore the repeatable annotations */
	readonly declaredAnnotations: Array<IAnnotation>;
	/** replace declared annotations */
	setDeclaredAnnotations(annotations: Array<IAnnotation>): this;
	/** create annotation which attached to this annotated element */
	createDeclaredAnnotation(args?: IAnnotationConstructorArgs): IAnnotation;
	/** check given annotation is present or not, using annotations, not declared annotations only */
	isAnnotationPresent(annotationTypeOrName: ClassName | IClass): boolean;
	/** ignore the repeatable annotations */
	getAnnotation(annotationTypeOrName: ClassName | IClass): Optional<IAnnotation>;
	/** also find repeatable annotations, for only 1 level */
	getAnnotationsByType(annotationTypeOrName: ClassName | IClass): Array<IAnnotation>;
	/** ignore the repeatable annotations */
	getDeclaredAnnotation(annotationTypeOrName: ClassName | IClass): Optional<IAnnotation>;
	/** also find repeatable annotations, for only 1 level */
	getDeclaredAnnotationsByType(annotationTypeOrName: ClassName | IClass): Array<IAnnotation>;
}
