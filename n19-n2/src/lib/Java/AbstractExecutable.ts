import {Optional} from '../TsAddon';
import {
	IAnnotationConstructorArgs,
	IExecutableConstructorArgs,
	IParameterConstructorArgs,
	IThrownConstructorArgs,
	ITypeVariableConstructorArgs
} from './ConstructorArgs';
import {TypeVariable} from './GenericTypes';
import {Modifier} from './Helpers';
import {
	IAnnotatedType,
	IAnnotation,
	IClass,
	IClassLoader,
	IExecutable,
	IParameter,
	IThrown,
	IType,
	ITypeVariable,
	MemberType
} from './Interfaces';
import {Parameter} from './Parameter';
import {AnnotatedElementMemberSupport, ModifiersSupport} from './Supports';
import {Thrown} from './Thrown';
import {ClassName, ModifiersValue} from './TypeAlias';

/**
 * Is attached on a {@link IClass}.<br>
 *
 * - {@link #declaringClass}: class where this executable declared,<br>
 * - {@link #name}: name of this executable,<br>
 * - {@link #parameters}: parameters of this executable,<br>
 * - {@link #throwns}: exceptions thrown by this executable,<br>
 * - {@link #modifiers}: modifiers of this executable,<br>
 * - {@link #declaredAnnotations}: declared annotations of this executable.
 *   annotations in executable has no inherit, which means {@link #annotations} is same as {@link #declaredAnnotations},<br>
 * - {@link #typeParameters}: type parameters of this executable.
 */
export abstract class AbstractExecutable implements IExecutable {
	private readonly _declaringClass: IClass;
	private _name: string;
	private readonly _parameters: Array<IParameter> = [];
	private readonly _throwns: Array<IThrown> = [];
	private readonly _modifiersSupport: ModifiersSupport<IExecutable> = new ModifiersSupport<IExecutable>(this);
	private readonly _annotatedElementSupport: AnnotatedElementMemberSupport<IExecutable> = new AnnotatedElementMemberSupport<IExecutable>(this);
	private readonly _typeParameters: Array<ITypeVariable> = [];

	protected constructor(declaringClass: IClass,
	                      more?: IExecutableConstructorArgs) {
		this._declaringClass = declaringClass;
		this.setName(more?.name)
			.setParameters(more?.parameters)
			.setThrowns(more?.throwns)
			.setModifiers(more?.modifiers)
			.setDeclaredAnnotations(more?.declaredAnnotations)
			.setTypeParameters(more?.typeParameters);
	}

	abstract get memberType(): MemberType;

	get declaringClass(): IClass {
		return this._declaringClass;
	}

	get declaringClassName(): ClassName {
		return this.declaringClass.name;
	}

	get classLoader(): IClassLoader {
		return this.declaringClass.classLoader;
	}

	/**
	 * executable name
	 */
	get name(): string {
		return this._name;
	}

	setName(name: string): this {
		this._name = name;
		return this;
	}

	get parameters(): Array<IParameter> {
		return this._parameters ?? [];
	}

	setParameters(parameters: Array<IParameter>): this {
		this._parameters.length = 0;
		this._parameters.push(...(parameters ?? []));
		return this;
	}

	createParameter(args?: IParameterConstructorArgs): IParameter {
		return new Parameter(this, args);
	}

	get parameterCount(): number {
		return this.parameters.length;
	}

	get parameterTypes(): Array<IClass> {
		return this.parameters.map(p => p.type);
	}

	get genericParameterTypes(): Array<IType> {
		return this.parameters.map(p => p.genericType);
	}

	get annotatedParameterTypes(): Array<IAnnotatedType> {
		return this.parameters.map(p => p.annotatedType);
	}

	get throwns(): Array<IThrown> {
		return this._throwns ?? [];
	}

	setThrowns(throwns: Array<IThrown>): this {
		this._throwns.length = 0;
		this._throwns.push(...(throwns ?? []));
		return this;
	}

	createThrown(args?: IThrownConstructorArgs): IThrown {
		return new Thrown(this, args);
	}

	get thrownCount(): number {
		return this.throwns.length;
	}

	get thrownTypes(): Array<IClass> {
		return this.throwns.map(t => t.type);
	}

	get genericThrownTypes(): Array<IType> {
		return this.throwns.map(t => t.genericType);
	}

	get annotatedThrownTypes(): Array<IAnnotatedType> {
		return this.throwns.map(t => t.annotatedType);
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

	get isPublic(): boolean {
		return Modifier.isPublic(this.modifiers);
	}

	get isProtected(): boolean {
		return Modifier.isProtected(this.modifiers);
	}

	get isPrivate(): boolean {
		return Modifier.isPrivate(this.modifiers);
	}

	get isFriendly(): boolean {
		return Modifier.isFriendly(this.modifiers);
	}

	get isSynthetic(): boolean {
		return Modifier.isSynthetic(this.modifiers);
	}

	get isVarArgs(): boolean {
		return (this.modifiers & Modifier.VARARGS) !== 0;
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

	get typeParameters(): Array<ITypeVariable> {
		return this._typeParameters ?? [];
	}

	setTypeParameters(typeParameters: Array<ITypeVariable>): this {
		this._typeParameters.length = 0;
		this._typeParameters.push(...(typeParameters ?? []));
		return this;
	}

	/**
	 * create type parameter on this executable
	 */
	createTypeParameter(args?: ITypeVariableConstructorArgs): ITypeVariable {
		return new TypeVariable(this, args);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	abstract equals(o: any): boolean;

	abstract asKey(): string;

	protected printModifiersIfNonzero(sb: string, mask: ModifiersValue, isDefault: boolean): string {
		let mod: ModifiersValue = this.modifiers & mask;

		if (mod != 0 && !isDefault) {
			sb = sb + Modifier.toString(mod) + ' ';
		} else {
			const access_mod: ModifiersValue = mod & Modifier.ACCESS_MODIFIERS;
			if (access_mod != 0)
				sb = sb + Modifier.toString(access_mod) + ' ';
			if (isDefault)
				sb = sb + 'default ';
			mod = (mod & ~Modifier.ACCESS_MODIFIERS);
			if (mod != 0)
				sb = sb + Modifier.toString(mod) + ' ';
		}
		return sb;
	}

	protected abstract specificToStringHeader(sb: string): string;

	protected sharedToString(modifierMask: ModifiersValue, isDefault: boolean, parameterTypes: Array<IClass>, thrownTypes: Array<IClass>): string {
		try {
			// modifiers
			let sb = this.printModifiersIfNonzero('', modifierMask, isDefault);
			// returned, class, and name
			sb = this.specificToStringHeader(sb);
			// parameters
			sb = sb + '(';
			sb = sb + parameterTypes.map(parameterType => {
				return parameterType.typeName;
			}).join(',');
			sb = sb + ')';

			const throwns = thrownTypes.map(thrownType => {
				return thrownType.typeName;
			}).join(',');
			if (throwns.length !== 0) {
				sb = sb + ' throws ' + throwns;
			}
			return sb;
		} catch (e) {
			return '<' + e.message + '>';
		}
	}

	abstract toString(): string;

	protected abstract specificToGenericStringHeader(sb: string): string;

	protected sharedToGenericString(modifierMask: ModifiersValue, isDefault: boolean): string {
		try {
			// modifiers
			let sb = this.printModifiersIfNonzero('', modifierMask, isDefault);

			// type parameters
			const types = this.typeParameters.map(typeParameter => {
				return typeParameter.typeName;
			}).join(',');
			if (types.length !== 0) {
				sb = sb + '<' + types + '>';
			}

			// returned, class, and name
			sb = this.specificToGenericStringHeader(sb);

			// parameters
			sb = sb + '(';
			const parameterTypes = this.genericParameterTypes;
			const lastParameterIndex = parameterTypes.length - 1;
			sb = sb + parameterTypes.map((parameterType, parameterIndex) => {
				let parameterTypeName = parameterType.typeName;
				if (this.isVarArgs && parameterIndex === lastParameterIndex) {
					parameterTypeName = parameterTypeName.replace(/\[]$/, '...');
				}
				return parameterTypeName;
			}).join(',');
			sb = sb + ')';

			// throwns
			const throwns = this.genericThrownTypes.map(thrownType => {
				return thrownType.typeName;
			}).join(',');
			if (throwns.length !== 0) {
				sb = sb + ' throws ' + throwns;
			}
			return sb;
		} catch (e) {
			return '<' + e.message + '>';
		}
	}

	abstract toGenericString(): string;

	abstract toShortString(): string;
}
