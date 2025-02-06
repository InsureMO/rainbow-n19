import {Optional} from '../TsAddon';
import {IAnnotationConstructorArgs} from './ConstructorArgs';
import {IAnnotatedElement, IAnnotation, IClass, IClassLoader} from './Interfaces';
import {ClassSupport} from './Supports';
import {AnnotationValue, ClassName} from './TypeAlias';

/**
 * annotation must be declared in {@link IAnnotatedElement}.
 */
export class Annotation implements IAnnotation {
	private readonly _annotatedElement: IAnnotatedElement;
	private readonly _typeSupport: ClassSupport<IAnnotation> = new ClassSupport<IAnnotation>(this);
	private readonly _values: Record<string, AnnotationValue> = {};

	constructor(annotatedElement: IAnnotatedElement,
	            more?: IAnnotationConstructorArgs) {
		this._annotatedElement = annotatedElement;
		this.setTypeName(more.className);
		(more.values ?? []).forEach(([name, value]) => this.set(name, value));
	}

	get annotatedElement(): IAnnotatedElement {
		return this._annotatedElement;
	}

	get classLoader(): IClassLoader {
		return this.annotatedElement.classLoader;
	}

	get typeName(): ClassName {
		return this._typeSupport.name;
	}

	get type(): IClass {
		return this._typeSupport.class;
	}

	setTypeName(className: ClassName): this {
		this._typeSupport.setClassName(className);
		return this;
	}

	set<V extends AnnotationValue>(name: string, value: V): IAnnotation {
		this._values[name] = value;
		return this;
	}

	get<V extends AnnotationValue>(name: string): Optional<V> {
		return this._values[name] as V;
	}

	value<V extends AnnotationValue>(value?: V): IAnnotation | Optional<V> {
		if (value == null) {
			return this.get('value');
		} else {
			return this.set('value', value);
		}
	}
}
