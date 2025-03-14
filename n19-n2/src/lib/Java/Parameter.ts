import {UnsupportedOperationException} from '../JavaExceptions';
import {Optional} from '../TsAddon';
import {IAnnotationConstructorArgs, IParameterConstructorArgs} from './ConstructorArgs';
import {Modifier} from './Helpers';
import {IAnnotatedType, IAnnotation, IClass, IClassLoader, IExecutable, IParameter, IType} from './Interfaces';
import {AnnotatedElementParameterSupport, ModifiersSupport, TypeSupport} from './Supports';
import {ClassName, ModifiersValue, TypeName, TypeOrNameOrTypeVariableRef} from './TypeAlias';

/**
 * Is attached on an {@link IExecutable}.<br>
 *
 * - {@link #executable}: executable where this parameter declared,<br>
 * - {@link #name}: name of this parameter,<br>
 * - {@link #type}, {@link #genericType}, {@link #parameterizedType}: type of this parameter,<br>
 * - {@link #modifiers}: modifiers of this parameter,<br>
 * - {@link #annotations}, {@link #declaredAnnotations}: declared annotations of this parameter.
 *   annotations in parameter has no inherit, which means {@link #annotations} is same as {@link #declaredAnnotations}.
 */
export class Parameter implements IParameter {
	private readonly _executable: IExecutable;
	private _name: string;
	private readonly _typeSupport: TypeSupport<IParameter> = new TypeSupport<IParameter>(this);
	private readonly _modifiersSupport: ModifiersSupport<IParameter> = new ModifiersSupport<IParameter>(this);
	private readonly _annotatedElementSupport: AnnotatedElementParameterSupport = new AnnotatedElementParameterSupport(this);

	constructor(executable: IExecutable,
	            more?: IParameterConstructorArgs) {
		this._executable = executable;
		this.setName(more?.name)
			.setTypeOrName(more?.typeOrName?.(this))
			.setModifiers(more?.modifiers)
			.setDeclaredAnnotations(more?.declaredAnnotations?.(this));
	}

	get executable(): IExecutable {
		return this._executable;
	}

	get classLoader(): IClassLoader {
		return this.executable.classLoader;
	}

	get index(): number {
		return this.executable.parameters.indexOf(this);
	}

	get isNamePresent(): boolean {
		return this._name != null && this._name.trim().length !== 0;
	}

	get name(): string {
		if (!this.isNamePresent) {
			return 'arg' + this.index;
		} else {
			return this._name;
		}
	}

	setName(name: string): this {
		this._name = name;
		return this;
	}

	/**
	 * parameter type name
	 */
	get typeName(): ClassName {
		return this._typeSupport.name;
	}

	/**
	 * parameter type class
	 */
	get type(): IClass {
		return this._typeSupport.type;
	}

	/**
	 * parameter type name with generic info, if exists
	 */
	get genericTypeName(): TypeName {
		return this._typeSupport.genericName;
	}

	/**
	 * parameter type with generic info, if exists
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

	/**
	 * alias of {@link #genericTypeName}
	 */
	get parameterizedTypeName(): TypeName {
		return this.genericTypeName;
	}

	/**
	 * alias of {@link #genericType}
	 */
	get parameterizedType(): IType {
		return this.genericType;
	}

	get modifiers(): ModifiersValue {
		return this._modifiersSupport.modifiers;
	}

	/**
	 * replace the modifiers of this field
	 */
	setModifiers(modifiers: ModifiersValue): this {
		this._modifiersSupport.setModifiers(modifiers);
		return this;
	}

	get isImplicit(): boolean {
		return Modifier.isMandated(this.modifiers);
	}

	get isFinal(): boolean {
		return Modifier.isFinal(this.modifiers);
	}

	get isSynthetic(): boolean {
		return Modifier.isSynthetic(this.modifiers);
	}

	get isVarArgs(): boolean {
		return this._executable.isVarArgs && this.index === (this.executable.parameterCount - 1);
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
		if (o == null || !(o instanceof Parameter)) {
			return false;
		}

		return this.executable.equals(o.executable) && this.index === o.index;
	}

	/**
	 * use {@link #parameterizedTypeName}.
	 */
	toString(): string {
		let sb: string = '';
		const typename = this.parameterizedTypeName;

		sb = sb + Modifier.toString(this.modifiers);
		if (0 != this.modifiers)
			sb = sb + ' ';

		if (this.isVarArgs)
			sb = sb + typename.replace(/\[]$/, '...');
		else
			sb = sb + typename;

		sb = sb + ' ' + this.name;

		return sb;
	}
}
