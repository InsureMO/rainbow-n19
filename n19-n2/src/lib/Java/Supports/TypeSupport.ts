import {Class} from '../Class';
import {GenericArrayType, ParameterizedType, TypeVariable, WildcardType} from '../GenericTypes';
import {BuiltInConstants} from '../Helpers';
import {IClass, IClassLoaderHolder, IType} from '../Interfaces';
import {ClassName, NotClassType, TypeName, TypeOrName} from '../TypeAlias';
import {AbstractClassLoaderDelegate} from './AbstractClassLoaderDelegate';

export class TypeSupport<T extends IClassLoaderHolder> extends AbstractClassLoaderDelegate<T> {
	private _typeOrName: TypeOrName;

	constructor(target: T) {
		super(target);
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
			return this.getRawClassName(this._typeOrName);
		}
	}

	setTypeOrName(typeOrName: TypeOrName): this {
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
			return this._typeOrName;
		}
	}
}
