import {Optional} from '../../TsAddon';
import {IConstructorConstructorArgs, IFieldConstructorArgs, IMethodConstructorArgs} from '../ConstructorArgs';
import {ClassName, ClassOrName, EnumValue, PackageName, SimpleClassName, TypeName, TypeOrName} from '../TypeAlias';
import {IAnnotatedElement} from './IAnnotatedElement';
import {IAnnotatedType} from './IAnnotatedType';
import {IClassLoaderHolder} from './IClassLoaderHolder';
import {IConstructor} from './IConstructor';
import {IField} from './IField';
import {IGenericDeclaration} from './IGenericDeclaration';
import {IMethod} from './IMethod';
import {IModifiers} from './IModifiers';
import {IPackage} from './IPackage';
import {IType} from './IType';

export interface IClass extends IModifiers, IGenericDeclaration, IAnnotatedElement, IType, IClassLoaderHolder {
	// name
	readonly name: ClassName;
	setName(name: ClassName): this;
	readonly simpleName: SimpleClassName;
	// superclass
	readonly superclassName: Optional<ClassName>;
	readonly superclass: Optional<IClass>;
	setSuperclass(superclassTypeOrName?: TypeOrName): this;
	readonly allSuperclasses: Array<IClass>;
	readonly genericSuperclassName: Optional<TypeName>;
	readonly genericSuperclass: Optional<IType>;
	readonly annotatedSuperclass: Optional<IAnnotatedType>;
	// interfaces
	readonly interfaceNames: Array<ClassName>;
	readonly interfaces: Array<IClass>;
	setInterfaces(interfaceTypesOrNames: Array<TypeOrName>): this;
	readonly allInterfaces: Array<IClass>;
	readonly genericInterfaceNames: Array<TypeName>;
	readonly genericInterfaces: Array<IType>;
	readonly annotatedInterfaces: Array<IAnnotatedType>;
	// package
	readonly packageName: Optional<PackageName>;
	readonly package: Optional<IPackage>;
	// modifiers
	readonly isPublic: boolean;
	readonly isProtected: boolean;
	readonly isPrivate: boolean;
	readonly isFriendly: boolean;
	readonly isStatic: boolean;
	readonly isFinal: boolean;
	readonly isAnnotation: boolean;
	readonly isSynthetic: boolean;
	readonly isEnum: boolean;
	/** count is same as fields */
	readonly enumConstants: Array<EnumValue>;
	setEnumConstants(values: Array<EnumValue>): this;
	readonly isInterface: boolean;
	readonly isAbstract: boolean;
	readonly isStrict: boolean;
	// class features
	readonly isArray: boolean;
	readonly arrayDimensions: number;
	readonly componentType: Optional<IClass>;
	readonly baseComponentType: Optional<IClass>;
	readonly isPrimitive: boolean;
	readonly isAnonymousClass: boolean;
	readonly isLocalClass: boolean;
	readonly isLocalOrAnonymousClass: boolean;
	readonly isMemberClass: boolean;
	readonly isTopLevelClass: boolean;
	isAssignableFrom(clazz: IClass): boolean;
	canCastTo(clazz: IClass): boolean;
	readonly declaredClasses: Array<IClass>;
	/**
	 * my public declared classes and all public declared classes of my superclasses
	 */
	readonly classes: Array<IClass>;
	readonly nestHost: IClass;
	readonly nestMembers: Array<IClass>;
	isNestmateOf(clazz: IClass): boolean;
	/** null if this a top level/anonymous/local class, otherwise same as enclosing class */
	readonly declaringClass: Optional<IClass>;
	/** null if this is a top level class, or immediately enclosing class if it is not a top level class. */
	readonly enclosingClass: Optional<IClass>;
	readonly enclosingConstructor: Optional<IConstructor>;
	setEnclosingConstructor(constructor: IConstructor): this;
	readonly enclosingMethod: Optional<IMethod>;
	setEnclosingMethod(method: IMethod): this;
	// constructors
	/**
	 * interface, primitive types, array types returns empty array.
	 * declared constructors, no matter the openness modifier is.
	 */
	readonly declaredConstructors: Array<IConstructor>;
	getDeclaredConstructor(...parameterTypesOrNames: Array<ClassOrName>): Optional<IConstructor>;
	setDeclaredConstructors(constructors: Array<IConstructor>): this;
	createDeclaredConstructor(args?: IConstructorConstructorArgs): IConstructor;
	/**
	 * interface, primitive types, array types returns empty array.
	 * declared constructors, only the public ones.
	 * constructors will not include the constructors from super class.
	 */
	readonly constructors: Array<IConstructor>;
	getConstructor(...parameterTypesOrNames: Array<ClassOrName>): Optional<IConstructor>;
	// methods
	readonly declaredMethods: Array<IMethod>;
	getDeclaredMethod(name: string, ...parameterTypesOrNames: Array<ClassOrName>): Optional<IMethod>;
	setDeclaredMethods(methods: Array<IMethod>): this;
	createDeclaredMethod(args?: IMethodConstructorArgs): IMethod;
	/**
	 * public declared methods, including static
	 * default methods from interfaces,
	 * public methods from superclass, including static
	 */
	readonly methods: Array<IMethod>;
	getMethod(name: string, ...parameterTypesOrNames: Array<ClassOrName>): Optional<IMethod>;
	// fields
	readonly declaredFields: Array<IField>;
	getDeclaredField(name: string): Optional<IField>;
	setDeclaredFields(fields: Array<IField>): this;
	createDeclaredField(args?: IFieldConstructorArgs): IField;
	/**
	 * public declared fields,
	 * public fields from superclasses and interfaces
	 */
	readonly fields: Array<IField>;
	getField(name: string): Optional<IField>;
	// stringify
	toString(): string;
	toGenericString(): string;
}
