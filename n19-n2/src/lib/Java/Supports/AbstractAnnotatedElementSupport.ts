import {Optional} from '../../TsAddon';
import {Annotation} from '../Annotation';
import {IAnnotationConstructorArgs} from '../ConstructorArgs';
import {BuiltInConstants} from '../Helpers';
import {IAnnotatedElement, IAnnotation, IClass} from '../Interfaces';
import {ClassName} from '../TypeAlias';
import {UnexpectedError} from '../UnexpectedError';
import {AbstractClassLoaderDelegate} from './AbstractClassLoaderDelegate';

/**
 * to support an element which is annotated, which means annotations can be declared on this element
 */
export abstract class AbstractAnnotatedElementSupport<T extends IAnnotatedElement> extends AbstractClassLoaderDelegate<T> {
	private readonly _declaredAnnotations: Array<IAnnotation> = [];

	protected constructor(target: T) {
		super(target);
	}

	get annotations(): Array<IAnnotation> {
		return this.declaredAnnotations;
	}

	get declaredAnnotations(): Array<IAnnotation> {
		return this._declaredAnnotations;
	}

	setDeclaredAnnotations(annotations: Array<IAnnotation>): this {
		this.declaredAnnotations.length = 0;
		this.declaredAnnotations.push(...(annotations ?? []));
		return this;
	}

	createDeclaredAnnotation(args?: IAnnotationConstructorArgs): IAnnotation {
		return new Annotation(this.target, args);
	}

	isAnnotationPresent(annotationTypeOrName: ClassName | IClass): boolean {
		const name = this.getNameOf(annotationTypeOrName);
		return this.annotations.some(annotation => annotation.typeName === name);
	}

	protected getNameOf(annotationTypeOrName: ClassName | IClass): ClassName {
		return typeof annotationTypeOrName === 'string' ? annotationTypeOrName : annotationTypeOrName.name;
	}

	protected getClassOf(annotationTypeOrName: ClassName | IClass): IClass {
		return typeof annotationTypeOrName === 'string' ? this.classLoader.findClass(annotationTypeOrName) : annotationTypeOrName;
	}

	protected getDirectOrIndirectAnnotationsByType(annotationTypeOrName: ClassName | IClass,
	                                               find: (annotationClassName: ClassName) => Optional<IAnnotation>): Array<IAnnotation> {
		// check class first
		const clazz = this.getClassOf(annotationTypeOrName);
		if (clazz == null) {
			throw new UnexpectedError(`Annotation class not found: ${this.getNameOf(annotationTypeOrName)}`);
		}

		// to find the exact annotation type by given one
		// if repeatable, find by repeatable container; otherwise find by given one
		let toFindAnnotationTypeName: ClassName;
		const repeatable = clazz.getDeclaredAnnotation(BuiltInConstants.LANG_ANNOTATION_REPEATABLE);
		if (repeatable != null) {
			// repeatable, find by repeatable container
			const repeatableContainerClass = this.classLoader.findClass(repeatable.value<ClassName>());
			toFindAnnotationTypeName = repeatableContainerClass.name;
		} else {
			// not repeatable, find by given one
			toFindAnnotationTypeName = this.getNameOf(annotationTypeOrName);
		}

		// find
		const annotation = find(toFindAnnotationTypeName);
		if (annotation == null) {
			return [];
		}
		if (repeatable != null) {
			// repeatable container found, return its value
			return annotation.value<Array<IAnnotation>>();
		} else {
			return [annotation];
		}
	}

	getAnnotation(annotationTypeOrName: ClassName | IClass): Optional<IAnnotation> {
		const name = this.getNameOf(annotationTypeOrName);
		return this.annotations.find(annotation => annotation.typeName === name);
	}

	getAnnotationsByType(annotationTypeOrName: ClassName | IClass): Array<IAnnotation> {
		return this.getDirectOrIndirectAnnotationsByType(annotationTypeOrName, annotationTypeName => this.getAnnotation(annotationTypeName));
	}

	getDeclaredAnnotation(annotationTypeOrName: ClassName | IClass): Optional<IAnnotation> {
		const name = this.getNameOf(annotationTypeOrName);
		return this.declaredAnnotations.find(annotation => annotation.typeName === name);
	}

	getDeclaredAnnotationsByType(annotationTypeOrName: ClassName | IClass): Array<IAnnotation> {
		return this.getDirectOrIndirectAnnotationsByType(annotationTypeOrName, annotationTypeName => this.getDeclaredAnnotation(annotationTypeName));
	}
}
