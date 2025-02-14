import {Optional} from '../TsAddon';
import {IAnnotationConstructorArgs} from './ConstructorArgs';
import {IAnnotatedElement, IAnnotation, IClass, IClassLoader} from './Interfaces';
import {ClassSupport} from './Supports';
import {AnnotationClassValue, AnnotationRuntimeValue, AnnotationValue, ClassName} from './TypeAlias';

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

	private isAnnotatedByClass(value: AnnotationValue): value is AnnotationClassValue {
		return Array.isArray(value) && value.length > 0 && value[0] === 'c';
	}

	get<V extends AnnotationRuntimeValue>(name: string): Optional<V> {
		const v = this._values[name] as Optional<AnnotationValue>;
		if (v == null) {
			return null;
		} else if (this.isAnnotatedByClass(v)) {
			return (Array.isArray(v[1]) ? v[1] : [v[1]]).map(className => {
				return this.classLoader.findClass(className);
			}) as V;
		} else {
			return v as V;
		}
	}

	value<V extends AnnotationValue>(value: V): IAnnotation;
	value<V extends AnnotationRuntimeValue>(): Optional<V>;
	value<V extends AnnotationValue>(value?: V): IAnnotation | Optional<AnnotationRuntimeValue> {
		if (value == null) {
			return this.get('value');
		} else {
			return this.set('value', value);
		}
	}
}
