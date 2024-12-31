import {BuiltInConstants} from '../Helpers';
import {IAnnotation, IClass} from '../Interfaces';
import {AbstractAnnotatedElementSupport} from './AbstractAnnotatedElementSupport';

/**
 * support class annotations
 */
export class AnnotatedElementClassSupport extends AbstractAnnotatedElementSupport<IClass> {
	constructor(target: IClass) {
		super(target);
	}

	get annotations(): Array<IAnnotation> {
		const annotations: Array<IAnnotation> = [...this.declaredAnnotations];

		const map: Record<string, true> = {};
		annotations.forEach(annotation => map[annotation.typeName] = true);

		const superclass = this.target.superclass;
		if (superclass != null) {
			superclass.annotations.forEach(annotation => {
				// declared in this class, ignored from superclasses
				if (map[annotation.typeName] === true) {
					return;
				}
				// check inherited or not
				const inherited = annotation.type.isAnnotationPresent(BuiltInConstants.LANG_ANNOTATION_INHERITED);
				if (inherited) {
					annotations.push(annotation);
					map[annotation.typeName] = true;
				}
			});
		}

		return annotations;
	}
}
