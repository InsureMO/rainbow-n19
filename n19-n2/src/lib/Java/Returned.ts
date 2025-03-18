import {UnsupportedOperationException} from '../JavaExceptions';
import {Optional} from '../TsAddon';
import {IAnnotationConstructorArgs, IReturnedConstructorArgs} from './ConstructorArgs';
import {IAnnotatedType, IAnnotation, IClass, IClassLoader, IExecutable, IMethod, IReturned, IType} from './Interfaces';
import {AnnotatedElementReturnedSupport, TypeSupport} from './Supports';
import {ClassName, SimpleTypeName, TypeName, TypeOrNameOrTypeVariableRef} from './TypeAlias';

export class Returned implements IReturned {
	private readonly _executable: IExecutable;
	private readonly _typeSupport: TypeSupport<IReturned> = new TypeSupport<IReturned>(this);
	private readonly _annotatedElementSupport: AnnotatedElementReturnedSupport = new AnnotatedElementReturnedSupport(this);

	constructor(executable: IMethod,
	            more?: IReturnedConstructorArgs) {
		this._executable = executable;
		this.setTypeOrName(more?.typeOrName)
			.setDeclaredAnnotations(more?.declaredAnnotations?.(this));
	}

	get executable(): IExecutable {
		return this._executable;
	}

	get classLoader(): IClassLoader {
		return this.executable.classLoader;
	}

	/**
	 * exception type name
	 */
	get typeName(): ClassName {
		return this._typeSupport.name;
	}

	/**
	 * exception type class
	 */
	get type(): IClass {
		return this._typeSupport.type;
	}

	/**
	 * exception type name with generic info, if exists
	 */
	get genericTypeName(): TypeName {
		return this._typeSupport.genericName;
	}

	get simpleGenericTypeName(): SimpleTypeName {
		return this._typeSupport.simpleGenericName;
	}

	/**
	 * exception type with generic info, if exists
	 */
	get genericType(): IType {
		return this._typeSupport.genericType;
	}

	get annotatedType(): IAnnotatedType {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	setTypeOrName(typeOrName: TypeOrNameOrTypeVariableRef): this {
		this._typeSupport.setTypeOrName(typeOrName);
		return this;
	}

	get annotations(): Array<IAnnotation> {
		return this._annotatedElementSupport.annotations;
	}

	get declaredAnnotations(): Array<IAnnotation> {
		return this._annotatedElementSupport.declaredAnnotations;
	}

	setDeclaredAnnotations(annotations: Array<IAnnotation>): this {
		this._annotatedElementSupport.setDeclaredAnnotations(annotations);
		return this;
	}

	createDeclaredAnnotation(args?: IAnnotationConstructorArgs): IAnnotation {
		return this._annotatedElementSupport.createDeclaredAnnotation(args);
	}

	isAnnotationPresent(annotationTypeOrName: ClassName | IClass): boolean {
		return this._annotatedElementSupport.isAnnotationPresent(annotationTypeOrName);
	}

	getAnnotation(annotationTypeOrName: ClassName | IClass): Optional<IAnnotation> {
		return this._annotatedElementSupport.getAnnotation(annotationTypeOrName);
	}

	getAnnotationsByType(annotationTypeOrName: ClassName | IClass): Array<IAnnotation> {
		return this._annotatedElementSupport.getAnnotationsByType(annotationTypeOrName);
	}

	getDeclaredAnnotation(annotationTypeOrName: ClassName | IClass): Optional<IAnnotation> {
		return this._annotatedElementSupport.getDeclaredAnnotation(annotationTypeOrName);
	}

	getDeclaredAnnotationsByType(annotationTypeOrName: ClassName | IClass): Array<IAnnotation> {
		return this._annotatedElementSupport.getDeclaredAnnotationsByType(annotationTypeOrName);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof Returned)) {
			return false;
		}

		return this.executable.equals(o.executable);
	}

	/**
	 * use {@link #genericTypeName}.
	 */
	toString(): string {
		return this.genericTypeName;
	}
}
