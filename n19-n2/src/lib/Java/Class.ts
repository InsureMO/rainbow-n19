import {UnsupportedOperationException} from '../JavaExceptions';
import {Optional} from '../TsAddon';
import {Constructor} from './Constructor';
import {
	IAnnotationConstructorArgs,
	IClassConstructorArgs,
	IConstructorConstructorArgs,
	IFieldConstructorArgs,
	IMethodConstructorArgs,
	ITypeVariableConstructorArgs
} from './ConstructorArgs';
import {Field} from './Field';
import {TypeVariable} from './GenericTypes';
import {BuiltInConstants, ClassBaseHelper, Modifier, ParameterHelper} from './Helpers';
import {
	IAnnotatedType,
	IAnnotation,
	IClass,
	IClassLoader,
	IConstructor,
	IField,
	IMethod,
	IPackage,
	IType,
	ITypeVariable
} from './Interfaces';
import {Method} from './Method';
import {AnnotatedElementClassSupport, ClassSupport, ModifiersSupport, SuperclassSupport, TypeSupport} from './Supports';
import {
	ClassName,
	ClassOrName,
	EnumValue,
	ModifiersValue,
	PackageName,
	SimpleClassName,
	TypeName,
	TypeOrName
} from './TypeAlias';

/**
 * class.<br>
 *
 * name rule:<br>
 * - array:<br>
 *   1. boolean: {@link BuiltInConstants#ARR_BOOLEAN},<br>
 *   2. byte: {@link BuiltInConstants#ARR_BYTE},<br>
 *   3. char: {@link BuiltInConstants#ARR_CHAR},<br>
 *   4. double: {@link BuiltInConstants#ARR_DOUBLE},<br>
 *   5. float: {@link BuiltInConstants#ARR_FLOAT},<br>
 *   6. int: {@link BuiltInConstants#ARR_INT},<br>
 *   7. long: {@link BuiltInConstants#ARR_LONG},<br>
 *   8. short: {@link BuiltInConstants#ARR_SHORT},<br>
 *   9. class or interface: "[Lpackage name.classname[...[$classnameN]];",
 *      starts with {@link BuiltInConstants#ARR_CLASS_HEAD} and ends with {@link BuiltInConstants#ARR_CLASS_TAIL}<br>
 * - multiple dimension array: with multiple "[" heading, count of "[" is same as dimension count,<br>
 * - class or interface: "package name.classname",<br>
 * - enclosed class (subclass): "package name.enclosing classname$classname",<br>
 * - multiple level enclosed class: "package name.enclosing classname$classname1$classname2[...[$classnameN]]".<br>
 *
 * with properties:<br>
 * - {@link #name}: name of this class,<br>
 * - {@link #modifiers}: modifiers of this class,<br>
 * - {@link #declaredAnnotations}: declared annotations of this executable.
 *   annotations in class has inherited feature, which means {@link #annotations} might be not same as {@link #declaredAnnotations},<br>
 * - {@link #typeParameters}: type parameters of this executable,<br>
 * - {@link #isArray} and {@link #componentType}: component type of this class, when this class is an array,<br>
 * - {@link #superclass}: super class of this class,<br>
 *   1. java.lang.Object: when it is an array,<br>
 *   2. null: when it is primitive,<br>
 *   3. java.lang.Enum: when it is an enumeration,<br>
 *   4. null: when it is an interface,<br>
 * - {@link #interfaces}: interfaces of this class,<br>
 *   1. java.lang.Cloneable, java.lang.Serializable: when it is an array,<br>
 *   2. []: when it is primitive,<br>
 *   3. java.lang.annotation.Annotation: when it is an annotation,<br>
 * - {@link #package}: package of this class,<br>
 * - {@link #declaredConstructors}, {@link #constructors}:<br>
 * - {@link #declaredMethods}, {@link #methods}:<br>
 * - {@link #declaredFields}, {@link #fields}:<br>
 * - {@link #enclosingClass}, {@link enclosingConstructor}, {@link enclosingMethod}.<br>
 */
export class Class implements IClass {
	private readonly _classLoader: IClassLoader;
	private _name: ClassName;
	private _simpleName: SimpleClassName;
	private readonly _modifiersSupport: ModifiersSupport<Class> = new ModifiersSupport(this);
	private readonly _superclassSupport: SuperclassSupport<IClass> = new SuperclassSupport<IClass>(this);
	private readonly _interfacesSupport: Array<TypeSupport<IClass>> = [];
	private _packageName: PackageName;
	private readonly _annotatedElementSupport: AnnotatedElementClassSupport = new AnnotatedElementClassSupport(this);
	private readonly _typeParameters: Array<ITypeVariable> = [];
	private _isArray: boolean = false;
	private _arrayDimensions: number = 0;
	private readonly _componentTypeSupport: ClassSupport<IClass> = new ClassSupport<IClass>(this);
	private readonly _constructors: Array<IConstructor> = [];
	private readonly _methods: Array<IMethod> = [];
	private readonly _fields: Array<IField> = [];
	private readonly _enumValues: Array<EnumValue> = [];
	private _isMemberClass: boolean = false;
	private _isAnonymousClass: boolean = false;
	private _isLocalClass: boolean = false;
	private _enclosingConstructor: Optional<IConstructor> = null;
	private _enclosingMethod: Optional<IMethod> = null;

	/**
	 * class can be created based on class (share class loader), constructor/method (local or anonymous)
	 *
	 * @param classLoaderOrClassOrConstructorOrMethod
	 * @param more
	 */
	constructor(classLoaderOrClassOrConstructorOrMethod: IClassLoader | IClass | IConstructor | IMethod,
	            more?: IClassConstructorArgs) {
		if (ClassBaseHelper.isClass(classLoaderOrClassOrConstructorOrMethod)) {
			this._classLoader = classLoaderOrClassOrConstructorOrMethod.classLoader;
		} else if (ClassBaseHelper.isConstructor(classLoaderOrClassOrConstructorOrMethod)) {
			this._classLoader = classLoaderOrClassOrConstructorOrMethod.classLoader;
			this._enclosingConstructor = classLoaderOrClassOrConstructorOrMethod;
		} else if (ClassBaseHelper.isMethod(classLoaderOrClassOrConstructorOrMethod)) {
			this._classLoader = classLoaderOrClassOrConstructorOrMethod.classLoader;
			this._enclosingMethod = classLoaderOrClassOrConstructorOrMethod;
		} else if (ClassBaseHelper.isClassLoader(classLoaderOrClassOrConstructorOrMethod)) {
			this._classLoader = classLoaderOrClassOrConstructorOrMethod;
		} else {
			throw new Error(`Given parameter[classLoaderOrClassOrConstructorOrMethod] is not one of class/constructor/method/classloader.`);
		}
		this.setName(more?.name)
			.setModifiers(more?.modifiers)
			.setTypeParameters(more?.typeParameters?.(this))
			.setSuperclass(more?.superclassTypeOrName?.(this))
			.setInterfaces(more?.interfaceTypesOrNames?.(this))
			.setDeclaredAnnotations(more?.declaredAnnotations?.(this))
			.setDeclaredConstructors(more?.declaredConstructors?.(this))
			.setDeclaredMethods(more?.declaredMethods?.(this))
			.setDeclaredFields(more?.declaredFields?.(this));
	}

	get classLoader(): IClassLoader {
		return this._classLoader;
	}

	get name(): ClassName {
		return this._name;
	}

	setName(name: ClassName): this {
		this._name = name;
		this.initByName();
		return this;
	}

	get simpleName(): SimpleClassName {
		return this._simpleName;
	}

	private findComponentType(name: ClassName): ClassName {
		const extractComponentTypeOnMultipleDimensional = (): string => name.substring(1);

		const rule = [
			{
				match: (): boolean => name.endsWith(BuiltInConstants.ARR_CLASS_TAIL),
				oneDimensional: (): boolean => name.startsWith(BuiltInConstants.ARR_CLASS_HEAD),
				extractComponentTypeOnOneDimensional: (): string => name.substring(BuiltInConstants.ARR_CLASS_HEAD.length, name.length - 1),
				extractComponentTypeOnMultipleDimensional
			},
			...[
				[BuiltInConstants.ARR_BOOLEAN, BuiltInConstants.P_BOOLEAN],
				[BuiltInConstants.ARR_BYTE, BuiltInConstants.P_BYTE],
				[BuiltInConstants.ARR_CHAR, BuiltInConstants.P_CHAR],
				[BuiltInConstants.ARR_DOUBLE, BuiltInConstants.P_DOUBLE],
				[BuiltInConstants.ARR_FLOAT, BuiltInConstants.P_FLOAT],
				[BuiltInConstants.ARR_INT, BuiltInConstants.P_INT],
				[BuiltInConstants.ARR_LONG, BuiltInConstants.P_LONG],
				[BuiltInConstants.ARR_SHORT, BuiltInConstants.P_SHORT]
			].map(([primitiveArrayHead, primitiveClassName]) => {
				return {
					match: (): boolean => name.endsWith(primitiveArrayHead),
					oneDimensional: (): boolean => name.length === 2,
					extractComponentTypeOnOneDimensional: (): string => primitiveClassName,
					extractComponentTypeOnMultipleDimensional
				};
			})
		].find(({match}) => match());

		if (rule == null) {
			// given class name is not an array, no component type
			return (void 0);
		} else {
			if (rule.oneDimensional()) {
				return rule.extractComponentTypeOnOneDimensional();
			} else {
				return rule.extractComponentTypeOnMultipleDimensional();
			}
		}
	}

	/**
	 * init properties (if can) according to class name.
	 *
	 * - name not given:<br>
	 *   1. clear simple name,<br>
	 *   2. set member/anonymous/local class to false,  which means this class is top level class,<br>
	 *   3. set array to false, array dimension to 0, clear component type,<br>
	 *   4. clear package name,<br>
	 *   5. clear enclosing constructor and method,<br>
	 * - name starts with {@link BuiltInConstants#ARR_HEAD},<br>
	 *   1. set member/anonymous/local class to false,  which means this class is top level class,<br>
	 *   2. set array to true, compute array dimensions and component type,<br>
	 *   3. set simple name,<br>
	 *   4. set superclass with {@link BuiltInConstants#LANG_OBJECT},<br>
	 *   5. set interfaces to {@link BuiltInConstants#LANG_CLONEABLE} and {@link BuiltInConstants#LANG_SERIALIZABLE},<br>
	 *   6. set package name to {@link BuiltInConstants#LANG_PACKAGE},<br>
	 *   7. clear enclosing constructor and method,<br>
	 * - is primitive type, see {@link BuiltInConstants#PRIMITIVE_TYPES},<br>
	 *   1. set array to false, array dimension to 0, clear component type,<br>
	 *   2. set simple name with name,<br>
	 *   3. set member/anonymous/local class to false,  which means this class is top level class,<br>
	 *   4. remove superclass,<br>
	 *   5. clear interfaces,<br>
	 *   6. set package name to {@link BuiltInConstants#LANG_PACKAGE},<br>
	 *   7. clear enclosing constructor and method,<br>
	 * - others:<br>
	 *   1. set array to false, array dimension to 0, clear component type,<br>
	 *   2. check name,
	 *      2.1 part after {@link BuiltInConstants#SUB_CLASS_$} starts with number, and no other char but number:
	 *          set as anonymous class, simple name is empty string. (e.g. A$1, A$B$2),<br>
	 *      2.2 part after {@link BuiltInConstants#SUB_CLASS_$} starts with number, and has other char rather than number:
	 *          set as local class, set simple name with all number prefixed removed. (e.g. A$1B -> B, A$B$2C3 -> C3),<br>
	 *      2.3 part after {@link BuiltInConstants#SUB_CLASS_$} doesn't start with number:
	 *          set as member class, set simple name. (e.g. A$B -> B, A$B$C -> C), clear enclosing constructor and method,<br>
	 *    3. set package name with part before first ".".
	 */
	private initByName(): void {
		if (this.name != null && this.name.trim().length !== 0) {
			if (this.name.startsWith(BuiltInConstants.ARR_HEAD)) {
				this._isMemberClass = false;
				this._isAnonymousClass = false;
				this._isLocalClass = false;
				this._isArray = true;
				this._arrayDimensions = this.name.split(BuiltInConstants.ARR_HEAD).length - 1;
				this._componentTypeSupport.setClassName(this.findComponentType(this.name));
				this._simpleName = this.componentType.simpleName + '[]';
				// array type, super class is java.lang.Object
				this.setSuperclass(BuiltInConstants.LANG_OBJECT);
				// interfaces are java.lang.Cloneable and java.lang.Serializable
				this.setInterfaces([BuiltInConstants.LANG_CLONEABLE, BuiltInConstants.LANG_SERIALIZABLE]);
				// package following component type's
				const baseComponentName = this.name.replace(/^\[+/, '').replace(/;$/, '');
				if (BuiltInConstants.CHAR_OF_PRIMITIVE_TYPES.includes(baseComponentName)) {
					// primitive type array
					this._packageName = BuiltInConstants.LANG_PACKAGE;
				} else {
					// follow base component type
					this._packageName = baseComponentName.substring(0, baseComponentName.lastIndexOf('.'));
				}
				// no enclosing info
				this._enclosingConstructor = (void 0);
				this._enclosingMethod = (void 0);
			} else {
				// ignore the member/anonymous/local class properties, don't know that yet
				this._isArray = false;
				this._arrayDimensions = 0;
				this._componentTypeSupport.setClassName((void 0));
				if (this.isPrimitive) {
					this._simpleName = this.name;
					this._isMemberClass = false;
					this._isAnonymousClass = false;
					this._isLocalClass = false;
					// primitive type, no super class, no interface
					this.setSuperclass((void 0));
					this.setInterfaces([]);
					// package is java.lang
					this._packageName = BuiltInConstants.LANG_PACKAGE;
					// no enclosing info
					this._enclosingConstructor = (void 0);
					this._enclosingMethod = (void 0);
				} else {
					let lastIndex = this.name.lastIndexOf(BuiltInConstants.SUB_CLASS_$);
					if (lastIndex < 0) {
						// top level class
						this._isMemberClass = false;
						this._isAnonymousClass = false;
						this._isLocalClass = false;
						/**
						 * lastIndex is an integer property representing the index position of the last occurrence of a specified value within a string, array, or similar iterable structure. This property is commonly utilized in scenarios where tracking the most recent match position is crucial, such as in regular expression operations or custom search algorithms.
						 *
						 * Note: The actual implementation and context of `lastIndex` depend on the specific environment or method it is associated with. In JavaScript, for instance, `lastIndex` is a property of the RegExp object used to track the position for global and sticky regex matches.
						 */
						lastIndex = this.name.lastIndexOf('.');
						this._simpleName = this.name.substring(lastIndex + 1);
						// no enclosing info
						this._enclosingConstructor = (void 0);
						this._enclosingMethod = (void 0);
					} else {
						// is one of member, anonymous and local class
						// TODO for groovy class, even it is starts with a number, still can be inner class
						let isLocalOrAnonymousClass = false;
						let countIn = false;
						this._simpleName = this.name.substring(lastIndex + 1).split('').filter((char) => {
							if (!countIn && '0123456789'.includes(char)) {
								isLocalOrAnonymousClass = true;
								return '';
							} else {
								countIn = true;
								return char;
							}
						}).join('');
						this._isMemberClass = !isLocalOrAnonymousClass;
						if (this.isMemberClass) {
							// no enclosing info
							this._enclosingConstructor = (void 0);
							this._enclosingMethod = (void 0);
						} else {
							this._isAnonymousClass = this.simpleName.length === 0;
							this._isLocalClass = !this.isAnonymousClass;
						}
					}
					this._packageName = this.name.substring(0, this.name.lastIndexOf('.'));
				}
			}
		} else {
			// name is removed or not set yet
			this._simpleName = BuiltInConstants.EMPTY_CLASS_SIMPLE_NAME;
			// remove class properties
			this._isMemberClass = false;
			this._isAnonymousClass = false;
			this._isLocalClass = false;
			// remove array flag and component type
			this._isArray = false;
			this._arrayDimensions = 0;
			this._componentTypeSupport.setClassName((void 0));
			// no name, clear package
			this._packageName = BuiltInConstants.EMPTY_PACKAGE_NAME;
			// remove enclosing info
			this._enclosingConstructor = (void 0);
			this._enclosingMethod = (void 0);
		}
	}

	get typeName(): TypeName {
		if (this.isArray) {
			try {
				// eslint-disable-next-line @typescript-eslint/no-this-alias
				let component: IClass = this;
				let dimensions: number = 0;
				do {
					dimensions++;
					component = component.componentType;
				} while (component.isArray);
				let sb: string = '';
				sb = sb + component.name;
				for (let i = 0; i < dimensions; i++) {
					sb = sb + '[]';
				}
				return sb.toString();
			} catch { /* fall through */
			}
		}
		return this.name;
	}

	get modifiers(): ModifiersValue {
		return this._modifiersSupport.modifiers;
	}

	/**
	 * replace the modifiers of this field
	 */
	setModifiers(modifiers: ModifiersValue): this {
		if (this.isPrimitive || this.isArray) {
			// 1041 for primitive and array type
			this._modifiersSupport.setModifiers(Modifier.PUBLIC & Modifier.BRIDGE & Modifier.SYNTHETIC);
		} else {
			this._modifiersSupport.setModifiers(modifiers);
		}
		this.initByModifiers();
		return this;
	}

	private initByModifiers(): void {
		if (this.isEnum) {
			// enumeration, super class is java.lang.Enum
			this.setSuperclass(BuiltInConstants.LANG_ENUM);
		} else if (this.isAnnotation) {
			this.setSuperclass((void 0));
			this.setInterfaces([BuiltInConstants.LANG_ANNOTATION_ANNOTATION]);
		} else if (this.isInterface) {
			this.setSuperclass((void 0));
		}
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

	get isAnnotation(): boolean {
		return (this.modifiers & Modifier.ANNOTATION) !== 0;
	}

	get isSynthetic(): boolean {
		return (this.modifiers & Modifier.SYNTHETIC) !== 0;
	}

	get isEnum(): boolean {
		return (this.modifiers & Modifier.ENUM) !== 0 && this.superclassName === BuiltInConstants.LANG_ENUM;
	}

	get enumConstants(): Array<EnumValue> {
		return this._enumValues ?? [];
	}

	setEnumConstants(values: Array<EnumValue>): this {
		this._enumValues.length = 0;
		this._enumValues.push(...(values ?? []));
		return this;
	}

	get isInterface(): boolean {
		return Modifier.isInterface(this.modifiers);
	}

	get isAbstract(): boolean {
		return Modifier.isAbstract(this.modifiers);
	}

	get isStrict(): boolean {
		return Modifier.isStrict(this.modifiers);
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

	get superclassName(): Optional<ClassName> {
		return this._superclassSupport.name;
	}

	get superclass(): Optional<IClass> {
		return this._superclassSupport.type;
	}

	setSuperclass(superclassTypeOrName?: TypeOrName): this {
		this._superclassSupport.setTypeOrName(superclassTypeOrName);
		return this;
	}

	get allSuperclasses(): Array<IClass> {
		const superclass = this.superclass;
		if (superclass == null) {
			return [];
		} else {
			return [superclass, ...superclass.allSuperclasses];
		}
	}

	get genericSuperclassName(): Optional<TypeName> {
		return this._superclassSupport.genericName;
	}

	get genericSuperclass(): Optional<IType> {
		return this._superclassSupport.genericType;
	}

	get annotatedSuperclass(): Optional<IAnnotatedType> {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get interfaceNames(): Array<ClassName> {
		return this._interfacesSupport.map(support => support.name);
	}

	get interfaces(): Array<IClass> {
		return this._interfacesSupport.map(support => support.type);
	}

	setInterfaces(interfaceTypesOrNames: Array<TypeOrName>): this {
		this._interfacesSupport.length = 0;
		this._interfacesSupport.push(...(interfaceTypesOrNames ?? []).map(typeOrName => {
			const support = new TypeSupport<IClass>(this);
			support.setTypeOrName(typeOrName);
			return support;
		}));
		return this;
	}

	get allInterfaces(): Array<IClass> {
		const interfaces = this.interfaces;
		if (interfaces.length === 0) {
			return [];
		}
		const classes: Array<IClass> = [];
		const map: Record<ClassName, boolean> = {};
		interfaces.forEach(interfaceClass => {
			if (map[interfaceClass.name] !== true) {
				map[interfaceClass.name] = true;
				classes.push(interfaceClass);
			}
			interfaceClass.allInterfaces.forEach(indirectInterfaceClass => {
				if (map[indirectInterfaceClass.name] !== true) {
					map[indirectInterfaceClass.name] = true;
					classes.push(indirectInterfaceClass);
				}
			});
		});
		return classes;
	}

	get genericInterfaceNames(): Array<TypeName> {
		return this._interfacesSupport.map(support => support.genericName);
	}

	get genericInterfaces(): Array<IType> {
		return this._interfacesSupport.map(support => support.genericType);
	}

	get annotatedInterfaces(): Array<IAnnotatedType> {
		throw new UnsupportedOperationException('Not implemented yet.');
	}

	get packageName(): Optional<PackageName> {
		if (this._packageName == null || this._packageName.length === 0) {
			return BuiltInConstants.EMPTY_PACKAGE_NAME;
		} else {
			return this._packageName;
		}
	}

	get package(): Optional<IPackage> {
		if (this.packageName == null) {
			return (void 0);
		} else {
			return this.classLoader.findPackage(this.packageName);
		}
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

	get isArray(): boolean {
		return this._isArray;
	}

	get arrayDimensions(): number {
		return this._arrayDimensions;
	}

	get componentType(): Optional<IClass> {
		if (this.isArray) {
			return this._componentTypeSupport.class;
		} else {
			return (void 0);
		}
	}

	get baseComponentType(): Optional<IClass> {
		const componentType = this.componentType;
		if (componentType == null) {
			return (void 0);
		} else if (!componentType.isArray) {
			return componentType;
		} else {
			return componentType.baseComponentType;
		}
	}

	get isPrimitive(): boolean {
		return !this.isArray && BuiltInConstants.PRIMITIVE_TYPES.includes(this.name);
	}

	get isAnonymousClass(): boolean {
		return this._isAnonymousClass;
	}

	get isLocalClass(): boolean {
		return this._isLocalClass;
	}

	get isLocalOrAnonymousClass(): boolean {
		return this._isAnonymousClass || this._isLocalClass;
	}

	get isMemberClass(): boolean {
		return this._isMemberClass;
	}

	get isTopLevelClass(): boolean {
		return !(this._isMemberClass || this._isAnonymousClass || this._isLocalClass);
	}

	isAssignableFrom(clazz: IClass): boolean {
		if (this.name === clazz.name) {
			return true;
		}
		// primitive type is not assignable from any class except itself
		if (this.isPrimitive) {
			return false;
		}
		// annotation is not assignable from any class except itself
		if (this.isAnnotation) {
			return false;
		}
		// enumeration is not assignable from any class except itself
		if (this.isEnum) {
			return false;
		}
		// Object is assignable from any class
		if (this.name === BuiltInConstants.LANG_OBJECT) {
			return true;
		}
		// Cloneable and Serializable is assignable from any array class
		if (this.name === BuiltInConstants.LANG_CLONEABLE || this.name === BuiltInConstants.LANG_SERIALIZABLE) {
			if (this.isArray) {
				return true;
			}
		}
		// Annotation is assignable from any annotation class
		if (this.name === BuiltInConstants.LANG_ANNOTATION_ANNOTATION) {
			if (this.isAnnotation) {
				return true;
			}
		}
		// Enum is assignable from any enumeration class
		if (this.name === BuiltInConstants.LANG_ENUM) {
			if (this.isEnum) {
				return true;
			}
		}
		// given is primitive type, return false.
		// since Object is the only one which assignable from primitive type
		if (clazz.isPrimitive) {
			return false;
		}
		// given is annotation, return false.
		// since Object and Annotation are the only two which assignable from annotation
		if (clazz.isAnnotation) {
			return false;
		}
		// given is enum, return true when this is assignable from Enum
		if (clazz.isEnum) {
			return this.isAssignableFrom(this.classLoader.findClass(BuiltInConstants.LANG_ENUM));
		}
		// for array
		if (clazz.isArray) {
			if (!this.isArray) {
				// false when this is not an array, since not array class (except Object) is not assignable from array class
				return false;
			}
			// if my dimensions is more than given class's dimensions, false
			if (this.arrayDimensions > clazz.arrayDimensions) {
				return false;
			}
			// if my dimensions is less than given class's dimensions,
			// if my base component type is Object, returns true; otherwise returns false
			if (this.arrayDimensions < clazz.arrayDimensions) {
				return this.baseComponentType.name === BuiltInConstants.LANG_OBJECT;
			}
			// check base component types assignable from
			return this.baseComponentType.isAssignableFrom(clazz.baseComponentType);
		}

		// check superclasses and interfaces of given class includes this
		let givenSuperclass = clazz.superclass;
		while (givenSuperclass != null) {
			if (givenSuperclass.name === this.name) {
				// this is one of superclasses of given class
				return true;
			}
			givenSuperclass = givenSuperclass.superclass;
		}
		// true when this is one of interfaces of given class
		return (clazz.allInterfaces ?? []).some(interfaceClass => interfaceClass.name === this.name);
	}

	canCastTo(clazz: IClass): boolean {
		return clazz.isAssignableFrom(this);
	}

	get declaredClasses(): Array<IClass> {
		if (this.isArray || this.isPrimitive) {
			return [];
		}
		return this.classLoader.findDeclaredClassesOf(this);
	}

	get classes(): Array<IClass> {
		const classes = this.declaredClasses.filter(clazz => clazz.isPublic);
		let superclass = this.superclass;
		while (superclass != null) {
			classes.push(...(superclass.declaredClasses).filter(clazz => clazz.isPublic));
			superclass = superclass.superclass;
		}
		return classes;
	}

	get nestHost(): IClass {
		if (this.isTopLevelClass || this.isArray || this.isPrimitive) {
			return this;
		} else {
			const nestHostClassName = this.name.substring(0, this.name.indexOf(BuiltInConstants.SUB_CLASS_$));
			return this.classLoader.findClass(nestHostClassName);
		}
	}

	get nestMembers(): Array<IClass> {
		if (this.isArray || this.isPrimitive) {
			return [this];
		}

		return this.classLoader.findNestMembersOf(this);
	}

	isNestmateOf(clazz: IClass): boolean {
		if (this.name === clazz.name) {
			return true;
		}
		if (this.isArray || this.isPrimitive || clazz.isArray || clazz.isPrimitive) {
			return false;
		}
		return this.nestHost.name === clazz.nestHost.name;
	}

	get declaringClass(): Optional<IClass> {
		if (this.isTopLevelClass || this.isAnonymousClass || this.isLocalClass) {
			return null;
		} else {
			return this.enclosingClass;
		}
	}

	get enclosingClass(): Optional<IClass> {
		if (this.isTopLevelClass) {
			return null;
		} else {
			return this.classLoader.findClass(this.name.substring(0, this.name.lastIndexOf(BuiltInConstants.SUB_CLASS_$)));
		}
	}

	get enclosingConstructor(): Optional<IConstructor> {
		return this._enclosingConstructor;
	}

	/**
	 *  will not perform validation
	 */
	setEnclosingConstructor(constructor: IConstructor): this {
		this._enclosingConstructor = constructor;
		this._enclosingMethod = (void 0);
		return this;
	}

	get enclosingMethod(): Optional<IMethod> {
		return this._enclosingMethod;
	}

	/**
	 *  will not perform validation
	 */
	setEnclosingMethod(method: IMethod): this {
		this._enclosingConstructor = (void 0);
		this._enclosingMethod = method;
		return this;
	}

	get declaredConstructors(): Array<IConstructor> {
		if (this.isInterface || this.isArray || this.isPrimitive) {
			return [];
		}
		return this._constructors ?? [];
	}

	getDeclaredConstructor(...parameterTypesOrNames: Array<ClassOrName>): Optional<IConstructor> {
		return this.declaredConstructors.find(constructor => {
			return ParameterHelper.equalParameterTypes(constructor.parameterTypes, parameterTypesOrNames);
		});
	}

	setDeclaredConstructors(constructors: Array<IConstructor>): this {
		this._constructors.length = 0;
		this._constructors.push(...(constructors ?? []));
		return this;
	}

	createDeclaredConstructor(args?: IConstructorConstructorArgs): IConstructor {
		return new Constructor(this, args);
	}

	get constructors(): Array<IConstructor> {
		if (this.isInterface || this.isArray || this.isPrimitive) {
			return [];
		}
		return this.declaredConstructors.filter(constructor => constructor.isPublic);
	}

	getConstructor(...parameterTypesOrNames: Array<ClassOrName>): Optional<IConstructor> {
		return this.constructors.find(constructor => {
			return ParameterHelper.equalParameterTypes(constructor.parameterTypes, parameterTypesOrNames);
		});
	}

	get declaredMethods(): Array<IMethod> {
		if (this.isArray || this.isPrimitive) {
			return [];
		}
		return this._methods ?? [];
	}

	getDeclaredMethod(name: string, ...parameterTypesOrNames: Array<ClassOrName>): Optional<IMethod> {
		return this.declaredMethods.find(method => {
			return method.name === name
				&& ParameterHelper.equalParameterTypes(method.parameterTypes, parameterTypesOrNames);
		});
	}

	setDeclaredMethods(methods: Array<IMethod>): this {
		this._methods.length = 0;
		this._methods.push(...(methods ?? []));
		return this;
	}

	createDeclaredMethod(args?: IMethodConstructorArgs): IMethod {
		return new Method(this, args);
	}

	get methods(): Array<IMethod> {
		const map: Record<string, boolean> = {};
		const methods = this.declaredMethods.filter(method => method.isPublic);
		methods.forEach(method => map[method.asKey()] = true);
		this.superclass.methods.forEach(method => {
			const key = method.asKey();
			if (map[key] === true) {
				// ignore
			} else {
				map[key] = true;
				methods.push(method);
			}
		});
		this.interfaces.forEach(interfaceClass => {
			interfaceClass.methods
				.filter(method => !method.isStatic)
				.forEach(method => {
					const key = method.asKey();
					if (map[key] === true) {
						// ignore
					} else {
						map[key] = true;
						methods.push(method);
					}
				});
		});
		return methods;
	}

	getMethod(name: string, ...parameterTypesOrNames: Array<ClassOrName>): Optional<IMethod> {
		return this.methods.find(method => {
			return method.name === name
				&& ParameterHelper.equalParameterTypes(method.parameterTypes, parameterTypesOrNames);
		});
	}

	get declaredFields(): Array<IField> {
		if (this.isArray || this.isPrimitive) {
			return [];
		}
		return this._fields ?? [];
	}

	getDeclaredField(name: string): Optional<IField> {
		return this.declaredFields.find(d => d.name === name);
	}

	setDeclaredFields(fields: Array<IField>): this {
		this._fields.length = 0;
		this._fields.push(...(fields ?? []));
		return this;
	}

	createDeclaredField(args?: IFieldConstructorArgs): IField {
		return new Field(this, args);
	}

	get fields(): Array<IField> {
		if (this.isArray || this.isPrimitive) {
			return [];
		}
		return [
			...this.declaredFields.filter(field => field.isPublic),
			...(this.interfaces ?? []).map(interfaceClass => {
				return interfaceClass.fields;
			}).flat(),
			...(this.superclass?.fields ?? [])
		];
	}

	getField(name: string): Optional<IField> {
		return this.fields.find(d => d.name === name);
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof Class)) {
			return false;
		}

		return this.name === o.name;
	}

	toString(): string {
		return (this.isInterface ? 'interface ' : (this.isPrimitive ? '' : 'class ')) + this.name;
	}

	toGenericString(): string {
		if (this.isPrimitive) {
			return this.toString();
		} else {
			let sb: string = '';
			// eslint-disable-next-line @typescript-eslint/no-this-alias
			let component: IClass = this;
			let dimensions: number = 0;

			if (this.isArray) {
				do {
					dimensions++;
					component = component.componentType;
				} while (component.isArray);
				sb = sb + component.name;
			} else {
				// Class modifiers are a superset of interface modifiers
				const modifiers = this.modifiers & Modifier.classModifiers();
				if (modifiers != 0) {
					sb = sb + Modifier.toString(modifiers);
					sb = sb + ' ';
				}

				if (this.isAnnotation) {
					sb = sb + '@';
				}
				if (this.isInterface) { // Note: all annotation types are interfaces
					sb = sb + 'interface';
				} else if (this.isEnum) {
					sb = sb + 'enum';
				} else {
					sb = sb + 'class';
				}
				sb = sb + ' ' + this.name;
			}

			const typeParameters = component.typeParameters ?? [];
			if (typeParameters.length > 0) {
				sb = sb + '<' + typeParameters.map(parameter => {
					return parameter.typeName;
				}).join(',') + '>';
			}

			for (let i = 0; i < dimensions; i++) {
				sb = sb + '[]';
			}

			return sb.toString();
		}
	}
}
