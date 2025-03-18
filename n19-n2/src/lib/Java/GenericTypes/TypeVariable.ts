import {UnsupportedOperationException} from '../../JavaExceptions';
import {Optional} from '../../TsAddon';
import {IAnnotationConstructorArgs, ITypeVariableConstructorArgs} from '../ConstructorArgs';
import {
	IAnnotatedType,
	IAnnotation,
	IClass,
	IClassLoader,
	IGenericDeclaration,
	IType,
	ITypeVariable
} from '../Interfaces';
import {AnnotatedElementTypeVariableSupport, TypeSupport} from '../Supports';
import {ClassName, SimpleTypeName, TypeName, TypeOrNameOrTypeVariableRef} from '../TypeAlias';

/**
 * T refers to type parameter \<T\> which defined in class/constructor/method.<br/>
 * e.g.
 * <pre>
 *     class A<T> {
 *       T field;
 *     }
 * </pre>
 */
export class TypeVariable implements ITypeVariable {
	/** define on where, could be class, constructor or method */
	private readonly _declaration: IGenericDeclaration;
	private _name: string;
	private readonly _typeSupportOfBounds: Array<TypeSupport<ITypeVariable>> = [];
	private readonly _annotatedElementSupport: AnnotatedElementTypeVariableSupport = new AnnotatedElementTypeVariableSupport(this);

	constructor(declaration: IGenericDeclaration,
	            more?: ITypeVariableConstructorArgs) {
		this._declaration = declaration;
		this.setName(more?.name)
			.setBounds(more?.bounds?.(this))
			.setDeclaredAnnotations(more?.declaredAnnotations?.(this));
	}

	get genericDeclaration(): IGenericDeclaration {
		return this._declaration;
	}

	get classLoader(): IClassLoader {
		return this.genericDeclaration.classLoader;
	}

	get name(): string {
		return this._name;
	}

	setName(name: string): this {
		this._name = name;
		return this;
	}

	get index(): number {
		return this.genericDeclaration.typeParameters.indexOf(this);
	}

	get typeName(): TypeName {
		return this.name;
	}

	get simpleTypeName(): SimpleTypeName {
		return this.name;
	}

	get bounds(): Array<IType> {
		return this._typeSupportOfBounds.map(bound => bound.genericType);
	}

	setBounds(bounds: Array<TypeOrNameOrTypeVariableRef>): this {
		this._typeSupportOfBounds.length = 0;
		this._typeSupportOfBounds.push(...(bounds ?? []).map(bound => new TypeSupport<ITypeVariable>(this).setTypeOrName(bound)));
		return this;
	}

	/**
	 * throws {@link UnsupportedOperationException}
	 */
	get annotatedBounds(): Array<IAnnotatedType> {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	/**
	 * throws {@link UnsupportedOperationException}
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setAnnotatedBounds(_bounds: Array<IAnnotatedType>): this {
		throw new UnsupportedOperationException('Not implemented yet.');
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
		if (o == null || !(o instanceof TypeVariable)) {
			return false;
		}

		return this.name === o.name && this.genericDeclaration.equals(o.genericDeclaration);
	}

	toString(): string {
		return this.name;
	}
}
