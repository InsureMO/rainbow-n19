import {UnsupportedOperationException} from '../JavaExceptions';
import {Optional} from '../TsAddon';
import {IAnnotationConstructorArgs, IFieldConstructorArgs} from './ConstructorArgs';
import {Modifier} from './Helpers';
import {IAnnotatedType, IAnnotation, IClass, IClassLoader, IField, IType, MemberType} from './Interfaces';
import {AnnotatedElementMemberSupport, ModifiersSupport, TypeSupport} from './Supports';
import {ClassName, ModifiersValue, TypeName, TypeOrName} from './TypeAlias';

export class Field implements IField {
	private readonly _declaringClass: IClass;
	private _name: string;
	private readonly _typeSupport: TypeSupport<IField> = new TypeSupport<IField>(this);
	private readonly _modifiersSupport: ModifiersSupport<IField> = new ModifiersSupport(this);
	private readonly _annotatedElementSupport: AnnotatedElementMemberSupport<IField> = new AnnotatedElementMemberSupport<IField>(this);

	constructor(declaringClass: IClass,
	            more?: IFieldConstructorArgs) {
		this._declaringClass = declaringClass;
		this.setName(more?.name)
			.setTypeOrName(more?.typeOrName?.(this))
			.setDeclaredAnnotations(more?.declaredAnnotations?.(this))
			.setModifiers(more?.modifiers);
	}

	get memberType(): MemberType.FIELD {
		return MemberType.FIELD;
	}

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
	 * field name
	 */
	get name(): string {
		return this._name;
	}

	setName(name: string): this {
		this._name = name;
		return this;
	}

	/**
	 * field type name
	 */
	get typeName(): ClassName {
		return this._typeSupport.name;
	}

	/**
	 * field type class
	 */
	get type(): IClass {
		return this._typeSupport.type;
	}

	/**
	 * field type name with generic info, if exists
	 */
	get genericTypeName(): TypeName {
		return this._typeSupport.genericName;
	}

	get genericType(): IType {
		return this._typeSupport.genericType;
	}

	get annotatedType(): IAnnotatedType {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	setTypeOrName(typeOrName: TypeOrName): this {
		this._typeSupport.setTypeOrName(typeOrName);
		return this;
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

	get isStatic(): boolean {
		return Modifier.isStatic(this.modifiers);
	}

	get isFinal(): boolean {
		return Modifier.isFinal(this.modifiers);
	}

	get isTransient(): boolean {
		return Modifier.isTransient(this.modifiers);
	}

	get isVolatile(): boolean {
		return Modifier.isVolatile(this.modifiers);
	}

	get isEnumConstant(): boolean {
		return (this.modifiers & Modifier.ENUM) != 0;
	}

	get isSynthetic(): boolean {
		return Modifier.isSynthetic(this.modifiers);
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
		if (o == null || !(o instanceof Field)) {
			return false;
		}
		const other = o;
		return (this.declaringClassName == other.declaringClassName)
			&& (this.name == other.name)
			&& (this.typeName == other.typeName);
	}

	asKey(): string {
		return this.name;
	}

	toString(): string {
		const mod: ModifiersValue = this.modifiers;
		return (((mod == 0) ? '' : (Modifier.toString(mod) + ' '))
			+ this.typeName + ' '
			+ this.declaringClass.typeName + '.'
			+ this.name);
	}

	toGenericString(): string {
		const mod: ModifiersValue = this.modifiers;
		return (((mod == 0) ? '' : (Modifier.toString(mod) + ' '))
			+ this.genericTypeName + ' '
			+ this.declaringClass.typeName + '.'
			+ this.name);
	}

	toShortString(): string {
		return 'field ' + this.declaringClass.typeName + '.' + this.name;
	}
}
