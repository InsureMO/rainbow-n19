import {Optional} from '../../TsAddon';
import {AbstractClassLoader} from '../AbstractClassLoader';
import {Annotation} from '../Annotation';
import {Class} from '../Class';
import {Constructor} from '../Constructor';
import {
	IAnnotationConstructorArgs,
	IClassConstructorArgs,
	IConstructorConstructorArgs,
	IFieldConstructorArgs,
	IMethodConstructorArgs,
	IParameterConstructorArgs,
	IParameterizedTypeConstructorArgs,
	ITypeVariableConstructorArgs
} from '../ConstructorArgs';
import {Field} from '../Field';
import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from '../GenericTypes';
import {
	IAnnotatedElement,
	IAnnotation,
	IClass,
	IClassLoader,
	IConstructor,
	IExecutable,
	IField,
	IGenericArrayType,
	IGenericDeclaration,
	IMethod,
	IParameter,
	IParameterizedType,
	IThrown,
	ITypeVariable,
	IWildcardType
} from '../Interfaces';
import {Method} from '../Method';
import {Parameter} from '../Parameter';
import {Thrown} from '../Thrown';
import {
	AnnotationValue,
	ClassName,
	EnumValue,
	TypeOrName,
	TypeOrNameOrTypeVariableRef,
	TypeVariableRef
} from '../TypeAlias';
import {BuiltInConstants} from './BuiltInConstants';

// noinspection DuplicatedCode
/** value is plain, or plain array */
export type ClassCreateAnnotationValue1Args = ['p', string, Exclude<AnnotationValue, IAnnotation | Array<IAnnotation>>];
/** value is annotation */
export type ClassCreateAnnotationValue2Args = ['a', string, ClassCreateAnnotationArgs];
/** value is annotation array */
export type ClassCreateAnnotationValue3Args = ['m', string, Array<ClassCreateAnnotationArgs>];
export type ClassCreateAnnotationArgs = [
	IAnnotationConstructorArgs['className'],
	...(ClassCreateAnnotationValue1Args | ClassCreateAnnotationValue2Args | ClassCreateAnnotationValue3Args)[]
];
export type ClassCreateTypeVariableArgs = [
	Optional<ITypeVariableConstructorArgs['name']>,
	Optional<Array<ClassCreateTypeOrNameArgs>>, // bounds
	Optional<Array<ClassCreateAnnotationArgs>> // declared annotations
];
export type ClassCreateParameterizedTypeArgs = [
	Optional<Array<ClassCreateTypeOrNameArgs>>, // actual type arguments
	Optional<IParameterizedTypeConstructorArgs['rawTypeName']>,
	Optional<ClassCreateTypeOrNameArgs> // owner type
];
export type ClassCreateGenericArrayTypeArgs = [
	Optional<ClassCreateTypeOrNameArgs> // generic component type
];
export type ClassCreateWildcardTypeArgs = [
	Optional<Array<ClassCreateTypeOrNameArgs>>, // upper bounds
	Optional<Array<ClassCreateTypeOrNameArgs>> // lower bounds
];
export type ClassCreateTypeVariableRefArgs = [Optional<TypeVariableRef['name']>]
export type ClassCreateTypeArgs =
	| ['tv', ClassCreateTypeVariableArgs]
	| ['pt', ClassCreateParameterizedTypeArgs]
	| ['ga', ClassCreateGenericArrayTypeArgs]
	| ['wt', ClassCreateWildcardTypeArgs]
	| ['tr', ClassCreateTypeVariableRefArgs];
// noinspection DuplicatedCode
export type ClassCreateTypeOrNameArgs = ClassName | ClassCreateTypeArgs;
export type ClassCreateParameterArgs = [
	Optional<IParameterConstructorArgs['name']>,
	ClassCreateTypeOrNameArgs, // type or Name
	IParameterConstructorArgs['modifiers'],
	Optional<Array<ClassCreateAnnotationArgs>> // declared annotations
];
export type ClassCreateThrownArgs = [
	ClassCreateTypeOrNameArgs, // type or Name
	Optional<Array<ClassCreateAnnotationArgs>> // declared annotations
];
export type ClassCreateConstructorArgs = [
	Optional<Array<ClassCreateParameterArgs>>, // parameters
	Optional<Array<ClassCreateThrownArgs>>, // throwns
	IConstructorConstructorArgs['modifiers'],
	Optional<Array<ClassCreateAnnotationArgs>>, // declared annotations
	Optional<Array<ClassCreateTypeVariableArgs>> // type parameters
];
export type ClassCreateMethodArgs = [
	IMethodConstructorArgs['name'],
	Optional<Array<ClassCreateParameterArgs>>, // parameters
	Optional<ClassCreateTypeOrNameArgs>, // return. no return means void
	Optional<Array<ClassCreateThrownArgs>>, // throwns
	IMethodConstructorArgs['modifiers'],
	Optional<Array<ClassCreateAnnotationArgs>>, // declared annotations
	Optional<Array<ClassCreateTypeVariableArgs>> // type parameters
];
export type ClassCreateFieldArgs = [
	IFieldConstructorArgs['name'],
	ClassCreateTypeOrNameArgs, // type or name
	Optional<Array<ClassCreateAnnotationArgs>>, // declared annotations
	IFieldConstructorArgs['modifiers']
]
export type ClassCreateEnumValueArgs = [
	EnumValue['name'],
	EnumValue['ordinal'],
	// other values
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	...[string, any][] // other values
];
export type ClassCreateClassArgs = [
	Optional<ClassCreateTypeOrNameArgs>, // super class
	Optional<Array<ClassCreateTypeOrNameArgs>>, // interfaces
	IClassConstructorArgs['modifiers'],
	Optional<Array<ClassCreateAnnotationArgs>>, // declared annotations
	Optional<Array<ClassCreateTypeVariableArgs>>, // type parameters
	Optional<Array<ClassCreateConstructorArgs>>, // declared constructors
	Optional<Array<ClassCreateMethodArgs>>, // declared methods
	Optional<Array<ClassCreateFieldArgs>>, // declared fields
	Optional<Array<ClassCreateEnumValueArgs>> // enum values, available only when class is enum.
];

class IntermediaryClassLoader extends AbstractClassLoader {
	constructor() {
		super();
	}
}

export class ClassCreateHelper {
	private readonly _classLoader: IClassLoader;

	constructor(classLoader: IClassLoader) {
		this._classLoader = classLoader;
	}

	get classLoader(): IClassLoader {
		return this._classLoader;
	}

	static on(classLoader: IClassLoader): ClassCreateHelper {
		return new ClassCreateHelper(classLoader);
	}

	static intermediary(): ClassCreateHelper {
		return new ClassCreateHelper(new IntermediaryClassLoader());
	}

	protected _typeVariable(declaration: IGenericDeclaration, args: ClassCreateTypeVariableArgs): ITypeVariable {
		// noinspection DuplicatedCode
		return new TypeVariable(declaration, {
			name: args[0],
			bounds: args[1] == null ? (void 0) : typeVariable => args[1].map(args => this._typeOrName(typeVariable.genericDeclaration, args)),
			declaredAnnotations: args[2] == null ? (void 0) : typeVariable => args[2].map(args => this._annotation(typeVariable, args))
		});
	}

	protected _parameterizedType(declaration: IGenericDeclaration, args: ClassCreateParameterizedTypeArgs): IParameterizedType {
		return new ParameterizedType(declaration, {
			actualTypeArguments: args[0] == null ? (void 0) : parameterizedType => args[0].map(args => this._typeOrName(parameterizedType.genericDeclaration, args)),
			rawTypeName: args[1],
			ownerType: args[2] == null ? (void 0) : parameterizedType => this._typeOrName(parameterizedType.genericDeclaration, args[2])
		});
	}

	protected _genericArrayType(declaration: IGenericDeclaration, args: ClassCreateGenericArrayTypeArgs): IGenericArrayType {
		return new GenericArrayType(declaration, {
			genericComponentType: args[0] == null ? (void 0) : genericArrayType => this._typeOrName(genericArrayType.genericDeclaration, args[0])
		});
	}

	protected _wildcardType(declaration: IGenericDeclaration, args: ClassCreateWildcardTypeArgs): IWildcardType {
		return new WildcardType(declaration, {
			upperBounds: args[0] == null ? (void 0) : wildcardType => args[0].map(args => this._typeOrName(wildcardType.genericDeclaration, args)),
			lowerBounds: args[1] == null ? (void 0) : wildcardType => args[1].map(args => this._typeOrName(wildcardType.genericDeclaration, args))
		});
	}

	protected _typeVariableRef(_declaration: IGenericDeclaration, args: ClassCreateTypeVariableRefArgs): TypeVariableRef {
		return new TypeVariableRef(args[0]);
	}

	protected _notClassType(declaration: IGenericDeclaration, args: ClassCreateTypeArgs): Exclude<TypeOrNameOrTypeVariableRef, ClassName> {
		const [type, value] = args;
		switch (type) {
			case 'tv':
				return this._typeVariable(declaration, value);
			case 'pt':
				return this._parameterizedType(declaration, value);
			case 'ga':
				return this._genericArrayType(declaration, value);
			case 'wt':
				return this._wildcardType(declaration, value);
			case 'tr':
				return this._typeVariableRef(declaration, value);
			default: {
				const data = JSON.stringify({type, value});
				throw new Error(`Cannot create annotation value by given [${data}].`);
			}
		}
	}

	protected _typeOrName(declaration: IGenericDeclaration, args: ClassCreateTypeOrNameArgs): TypeOrNameOrTypeVariableRef {
		return typeof args === 'string' ? args : this._notClassType(declaration, args);
	}

	protected _annotation(annotatedElement: IAnnotatedElement, args: ClassCreateAnnotationArgs): IAnnotation {
		const [className, ...rest] = args;
		return new Annotation(annotatedElement, {
			className,
			values: rest == null ? (void 0) : rest.map(([type, name, value]) => {
				switch (type) {
					case 'p':
						return [name, value as ClassCreateAnnotationValue1Args[2]];
					case 'a':
						return [name, this._annotation(annotatedElement, value)];
					case 'm':
						return [name, value.map(args => this._annotation(annotatedElement, args))];
					default: {
						const data = JSON.stringify({type, name, value});
						throw new Error(`Cannot create annotation value by given [${data}].`);
					}
				}
			})
		});
	}

	protected _typeParameter(declaration: IGenericDeclaration, args: ClassCreateTypeVariableArgs): ITypeVariable {
		// noinspection DuplicatedCode
		return new TypeVariable(declaration, {
			name: args[0],
			bounds: args[1] == null ? (void 0) : typeVariable => args[1].map(args => this._typeOrName(typeVariable.genericDeclaration, args)),
			declaredAnnotations: args[2] == null ? (void 0) : typeVariable => args[2].map(args => this._annotation(typeVariable, args))
		});
	}

	protected _parameter(executable: IExecutable, args: ClassCreateParameterArgs): IParameter {
		return new Parameter(executable, {
			name: args[0],
			typeOrName: parameter => this._typeOrName(parameter.executable, args[1]),
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : parameter => args[3].map(args => this._annotation(parameter, args))
		});
	}

	protected _thrown(executable: IExecutable, args: ClassCreateThrownArgs): IThrown {
		return new Thrown(executable, {
			typeOrName: thrown => this._typeOrName(thrown.executable, args[0]),
			declaredAnnotations: args[1] == null ? (void 0) : thrown => args[1].map(args => this._annotation(thrown, args))
		});
	}

	protected _constructor(declaringClass: IClass, args: ClassCreateConstructorArgs): IConstructor {
		return new Constructor(declaringClass, {
			parameters: args[0] == null ? (void 0) : cons => args[0].map(args => this._parameter(cons, args)),
			throwns: args[1] == null ? (void 0) : cons => args[1].map(args => this._thrown(cons, args)),
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : cons => args[3].map(args => this._annotation(cons, args)),
			typeParameters: args[4] == null ? (void 0) : cons => args[4].map(args => this._typeParameter(cons, args))
		});
	}

	protected _method(declaringClass: IClass, args: ClassCreateMethodArgs): IMethod {
		return new Method(declaringClass, {
			name: args[0],
			parameters: args[1] == null ? (void 0) : method => args[1].map(args => this._parameter(method, args)),
			returnedTypeOrName: args[2] == null ? () => BuiltInConstants.P_VOID : method => this._typeOrName(method, args[2]),
			throwns: args[3] == null ? (void 0) : method => args[3].map(args => this._thrown(method, args)),
			modifiers: args[4],
			declaredAnnotations: args[5] == null ? (void 0) : method => args[5].map(args => this._annotation(method, args)),
			typeParameters: args[6] == null ? (void 0) : method => args[6].map(args => this._typeParameter(method, args))
		});
	}

	protected _field(declaringClass: IClass, args: ClassCreateFieldArgs): IField {
		return new Field(declaringClass, {
			name: args[0],
			typeOrName: field => this._typeOrName(field.declaringClass, args[1]),
			declaredAnnotations: args[2] == null ? (void 0) : field => args[2].map(args => this._annotation(field, args)),
			modifiers: args[3]
		});
	}

	protected _enumValue(args: ClassCreateEnumValueArgs): EnumValue {
		const [name, ordinal, ...rest] = args;
		return rest.reduce((enumValue, [name, value]) => {
			enumValue[name] = value;
			return enumValue;
		}, {name, ordinal});
	}

	class(name: ClassName, args: ClassCreateClassArgs): IClass {
		const clazz = new Class(this._classLoader, {
			name,
			superclassTypeOrName: args[0] == null ? (void 0) : declaringClass => this._typeOrName(declaringClass, args[0]) as TypeOrName,
			interfaceTypesOrNames: args[1] == null ? (void 0) : declaringClass => args[1].map(args => this._typeOrName(declaringClass, args)) as Array<TypeOrName>,
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : declaringClass => args[3].map(args => this._annotation(declaringClass, args)),
			typeParameters: args[4] == null ? (void 0) : declaringClass => args[4].map(args => this._typeParameter(declaringClass, args)),
			declaredConstructors: args[5] == null ? (void 0) : declaringClass => args[5].map(args => this._constructor(declaringClass, args)),
			declaredMethods: args[6] == null ? (void 0) : declaringClass => args[6].map(args => this._method(declaringClass, args)),
			declaredFields: args[7] == null ? (void 0) : declaringClass => args[7].map(args => this._field(declaringClass, args)),
			enumValues: args[8] == null ? (void 0) : args[8].map(args => this._enumValue(args))
		});
		this._classLoader.addClass(clazz);
		return clazz;
	}

	passAllClassesTo(another: IClassLoader): void {
		this._classLoader.allClasses().forEach(clazz => another.addClass(clazz));
	}
}
