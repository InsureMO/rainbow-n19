import {Optional} from '../../TsAddon';
import {AbstractExecutable} from '../AbstractExecutable';
import {Class} from '../Class';
import {Constructor} from '../Constructor';
import {Field} from '../Field';
import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from '../GenericTypes';
import {BuiltInConstants} from '../Helpers';
import {IClass, IClassLoaderHolder, IGenericDeclaration, IType, ITypeVariable} from '../Interfaces';
import {Method} from '../Method';
import {Parameter} from '../Parameter';
import {Returned} from '../Returned';
import {Thrown} from '../Thrown';
import {ClassName, NotClassType, TypeName, TypeOrNameOrTypeVariableRef, TypeVariableRef} from '../TypeAlias';
import {AbstractClassLoaderDelegate} from './AbstractClassLoaderDelegate';

export class TypeSupport<T extends IClassLoaderHolder> extends AbstractClassLoaderDelegate<T> {
	private _typeOrName: TypeOrNameOrTypeVariableRef;

	constructor(target: T) {
		super(target);
	}

	protected getTypeDeclaration(type: NotClassType | TypeVariableRef): NotClassType {
		if (type instanceof TypeVariableRef) {
			const target = this.target;
			let declaration: IGenericDeclaration;
			if (target instanceof TypeVariable) {
				declaration = target.genericDeclaration;
			} else if (target instanceof ParameterizedType) {
				declaration = target.genericDeclaration;
			} else if (target instanceof GenericArrayType) {
				declaration = target.genericDeclaration;
			} else if (target instanceof WildcardType) {
				declaration = target.genericDeclaration;
			} else if (target instanceof Field) {
				declaration = target.declaringClass;
			} else if (target instanceof Method) {
				declaration = target;
			} else if (target instanceof Constructor) {
				declaration = target;
			} else if (target instanceof Parameter) {
				declaration = target.executable;
			} else if (target instanceof Returned) {
				declaration = target.executable;
			} else if (target instanceof Thrown) {
				declaration = target.executable;
			}
			const name = type.name;
			let clazz: IClass;
			if (declaration instanceof AbstractExecutable) {
				const typeVariable = declaration.typeParameters?.find(p => p.name === name);
				if (typeVariable != null) {
					return typeVariable;
				} else {
					clazz = declaration.declaringClass;
				}
			} else {
				clazz = declaration as IClass;
			}
			let typeVariable: Optional<ITypeVariable> = null;
			while (typeVariable == null && clazz != null) {
				typeVariable = clazz.typeParameters?.find(p => p.name === name);
				if (typeVariable == null) {
					clazz = clazz.enclosingClass;
					if (clazz == null) {
						break;
					}
				}
			}
			if (typeVariable == null) {
				throw new Error(`Type['${name}'] not found.`);
			}
			return typeVariable;
		} else {
			return type;
		}
	}

	protected getRawClassName(type: NotClassType): ClassName {
		if (type instanceof ParameterizedType) {
			return type.rawType.name;
		} else if (type instanceof TypeVariable) {
			// get first one only if there are multiple bounds
			const bound = type.bounds[0];
			if (bound instanceof Class) {
				return bound.name;
			} else {
				return this.getRawClassName(bound as NotClassType);
			}
		} else if (type instanceof GenericArrayType) {
			const genericComponentType = type.genericComponentType;
			if (genericComponentType instanceof Class) {
				// never occurs, just to complete all the rourtes
				const name = genericComponentType.name;
				if (BuiltInConstants.PRIMITIVE_TYPES.includes(name)) {
					return BuiltInConstants.ARR_OF_PRIMITIVE_TYPES[name];
				} else {
					// add one dimension
					return BuiltInConstants.ARR_HEAD + name;
				}
			} else {
				const name = this.getRawClassName(genericComponentType as NotClassType);
				// add one dimension
				return BuiltInConstants.ARR_HEAD + name;
			}
		} else if (type instanceof WildcardType) {
			let bounds = type.lowerBounds;
			if (bounds == null || bounds.length === 0) {
				bounds = type.upperBounds;
			}
			let bound: IType;
			if (bounds == null || bounds.length === 0) {
				return BuiltInConstants.LANG_OBJECT;
			} else {
				bound = bounds[0];
			}
			if (bound instanceof Class) {
				return bound.name;
			} else {
				return this.getRawClassName(bound as NotClassType);
			}
		} else {
			throw new Error(`Unknown type ${type}.`);
		}
	}

	/**
	 * type name without generic info, which is a class name
	 */
	get name(): ClassName {
		if (typeof this._typeOrName === 'string') {
			return this._typeOrName;
		} else {
			return this.getRawClassName(this.getTypeDeclaration(this._typeOrName));
		}
	}

	setTypeOrName(typeOrName: TypeOrNameOrTypeVariableRef): this {
		this._typeOrName = typeOrName;
		return this;
	}

	/**
	 * type without generic info, which is a class
	 */
	get type(): IClass {
		return this.classLoader.findClass(this.name);
	}

	/**
	 * type name with generic info if exists
	 */
	get genericName(): TypeName {
		return this.genericType.typeName;
	}

	/**
	 * type with generic info
	 */
	get genericType(): IType {
		if (typeof this._typeOrName === 'string') {
			return this.type;
		} else {
			return this.getTypeDeclaration(this._typeOrName);
		}
	}
}
