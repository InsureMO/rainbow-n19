import {Optional} from '../../TsAddon';
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
import {TypeVariable} from '../GenericTypes';
import {
	IAnnotatedElement,
	IAnnotation,
	IClass,
	IClassLoader,
	IConstructor,
	IExecutable,
	IField,
	IGenericDeclaration,
	IMethod,
	IParameter,
	IThrown,
	ITypeVariable
} from '../Interfaces';
import {Method} from '../Method';
import {Parameter} from '../Parameter';
import {Thrown} from '../Thrown';
import {AnnotationValue, ClassName, EnumValue, NotClassType, TypeOrName} from '../TypeAlias';
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
export type ClassCreateTypeArgs =
	| ['tv', ClassCreateTypeVariableArgs]
	| ['pt', ClassCreateParameterizedTypeArgs]
	| ['ga', ClassCreateGenericArrayTypeArgs]
	| ['wt', ClassCreateWildcardTypeArgs];
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

	protected _typeVariable(declaration: IGenericDeclaration, args: ClassCreateTypeVariableArgs): ITypeVariable {
		// noinspection DuplicatedCode
		return new TypeVariable(declaration, {
			name: args[0],
			bounds: args[1] == null ? (void 0) : declaration => args[1].map(args => this._typeOrName(declaration, args)),
			declaredAnnotations: args[2] == null ? (void 0) : annotatedElement => args[2].map(args => this._annotation(annotatedElement, args))
		});
	}

	protected _notClassType(declaration: IGenericDeclaration, args: ClassCreateTypeArgs): NotClassType {
		const [type, value] = args;
		switch (type) {
			case 'tv':
				return this._typeVariable(declaration, value);
			case 'pt':
				// return this._parameterizedType(declaration, value);
			case 'ga':
				// return this._genericArrayType(declaration, value);
			case 'wt':
				// return this._wildcardType(declaration, value);
			default: {
				const data = JSON.stringify({type, value});
				throw new Error(`Cannot create annotation value by given [${data}].`);
			}
		}
	}

	protected _typeOrName(declaration: IGenericDeclaration, args: ClassCreateTypeOrNameArgs): TypeOrName {
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
			bounds: args[1] == null ? (void 0) : declaration => args[1].map(args => this._typeOrName(declaration, args)),
			declaredAnnotations: args[2] == null ? (void 0) : annotatedElement => args[2].map(args => this._annotation(annotatedElement, args))
		});
	}

	protected _parameter(executable: IExecutable, args: ClassCreateParameterArgs): IParameter {
		return new Parameter(executable, {
			name: args[0],
			typeOrName: declaration => this._typeOrName(declaration, args[1]),
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : annotatedElement => args[3].map(args => this._annotation(annotatedElement, args))
		});
	}

	protected _thrown(executable: IExecutable, args: ClassCreateThrownArgs): IThrown {
		return new Thrown(executable, {
			typeOrName: declaration => this._typeOrName(declaration, args[0]),
			declaredAnnotations: args[1] == null ? (void 0) : annotatedElement => args[1].map(args => this._annotation(annotatedElement, args))
		});
	}

	protected _constructor(declaringClass: IClass, args: ClassCreateConstructorArgs): IConstructor {
		return new Constructor(declaringClass, {
			parameters: args[0] == null ? (void 0) : executable => args[0].map(args => this._parameter(executable, args)),
			throwns: args[1] == null ? (void 0) : executable => args[1].map(args => this._thrown(executable, args)),
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : annotatedElement => args[3].map(args => this._annotation(annotatedElement, args)),
			typeParameters: args[4] == null ? (void 0) : executable => args[4].map(args => this._typeParameter(executable, args))
		});
	}

	protected _method(declaringClass: IClass, args: ClassCreateMethodArgs): IMethod {
		return new Method(declaringClass, {
			name: args[0],
			parameters: args[1] == null ? (void 0) : executable => args[1].map(args => this._parameter(executable, args)),
			returnedTypeOrName: args[2] == null ? () => BuiltInConstants.P_VOID : declaration => this._typeOrName(declaration, args[2]),
			throwns: args[3] == null ? (void 0) : executable => args[3].map(args => this._thrown(executable, args)),
			modifiers: args[4],
			declaredAnnotations: args[5] == null ? (void 0) : annotatedElement => args[5].map(args => this._annotation(annotatedElement, args)),
			typeParameters: args[6] == null ? (void 0) : executable => args[6].map(args => this._typeParameter(executable, args))
		});
	}

	protected _field(declaringClass: IClass, args: ClassCreateFieldArgs): IField {
		return new Field(declaringClass, {
			name: args[0],
			typeOrName: declaration => this._typeOrName(declaration, args[1]),
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
			superclassTypeOrName: args[0] == null ? (void 0) : declaringClass => this._typeOrName(declaringClass, args[0]),
			interfaceTypesOrNames: args[1] == null ? (void 0) : declaringClass => args[1].map(args => this._typeOrName(declaringClass, args)),
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
}
