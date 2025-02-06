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
	IType,
	ITypeVariable
} from '../Interfaces';
import {Method} from '../Method';
import {Parameter} from '../Parameter';
import {Thrown} from '../Thrown';
import {AnnotationValue, ClassName, EnumValue, NotClassType, TypeOrName} from '../TypeAlias';

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
	Optional<Array<ClassCreateTypeOrNameArgs>>,
	Optional<Array<ClassCreateAnnotationArgs>>
];
export type ClassCreateParameterizedTypeArgs = [];
export type ClassCreateGenericArrayTypeArgs = [];
export type ClassCreateWildcardTypeArgs = [];
export type ClassCreateTypeArgs =
	| ClassCreateTypeVariableArgs
	| ClassCreateParameterizedTypeArgs
	| ClassCreateGenericArrayTypeArgs
	| ClassCreateWildcardTypeArgs;
export type ClassCreateTypeOrNameArgs = ClassName | ClassCreateTypeArgs;
export type ClassCreateParameterArgs = [
	Optional<IParameterConstructorArgs['name']>,
	ClassCreateTypeOrNameArgs,
	IParameterConstructorArgs['modifiers'],
	Optional<Array<ClassCreateAnnotationArgs>>
];
export type ClassCreateThrownArgs = [
	ClassCreateTypeOrNameArgs,
	Optional<Array<ClassCreateAnnotationArgs>>
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
	ClassCreateTypeOrNameArgs,
	IFieldConstructorArgs['modifiers']
]
export type ClassCreateEnumValueArgs = [
	EnumValue['name'],
	EnumValue['ordinal'],
	// other values
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	...[string, any][]
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

	protected _notClassType(args: ClassCreateTypeArgs): NotClassType {
		// TODO
		return (void 0);
	}

	protected _typeOrName(args: ClassCreateTypeOrNameArgs): TypeOrName {
		return typeof args === 'string' ? args : this._notClassType(args);
	}

	protected _type(args: ClassCreateTypeOrNameArgs): IType {
		// TODO
		return (void 0);
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
		return new TypeVariable(declaration, {
			name: args[0],
			bounds: args[1] == null ? (void 0) : args[1].map(args => this._type(args)),
			declaredAnnotations: args[2] == null ? (void 0) : annotatedElement => args[2].map(args => this._annotation(annotatedElement, args))
		});
	}

	protected _parameter(executable: IExecutable, args: ClassCreateParameterArgs): IParameter {
		return new Parameter(executable, {
			name: args[0],
			typeOrName: this._typeOrName(args[1]),
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : annotatedElement => args[3].map(args => this._annotation(annotatedElement, args))
		});
	}

	protected _thrown(executable: IExecutable, args: ClassCreateThrownArgs): IThrown {
		return new Thrown(executable, {
			typeOrName: this._typeOrName(args[0]),
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
			returnedTypeOrName: args[2] == null ? 'void' : this._typeOrName(args[2]),
			throwns: args[3] == null ? (void 0) : executable => args[3].map(args => this._thrown(executable, args)),
			modifiers: args[4],
			declaredAnnotations: args[5] == null ? (void 0) : annotatedElement => args[5].map(args => this._annotation(annotatedElement, args)),
			typeParameters: args[6] == null ? (void 0) : executable => args[6].map(args => this._typeParameter(executable, args))
		});
	}

	protected _field(declaringClass: IClass, args: ClassCreateFieldArgs): IField {
		return new Field(declaringClass, {
			name: args[0],
			typeOrName: this._typeOrName(args[1]),
			modifiers: args[2]
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
			superclassTypeOrName: args[0] == null ? (void 0) : this._typeOrName(args[0]),
			interfaceTypesOrNames: args[1] == null ? (void 0) : args[1].map(args => this._typeOrName(args)),
			modifiers: args[2],
			declaredAnnotations: args[3] == null ? (void 0) : annotatedElement => args[3].map(args => this._annotation(annotatedElement, args)),
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
