import {Optional} from '../../TsAddon';
import {IParameterizedTypeConstructorArgs} from '../ConstructorArgs';
import {IClass, IClassLoader, IGenericDeclaration, IParameterizedType, IType} from '../Interfaces';
import {ClassName, TypeName, TypeOrName} from '../TypeAlias';

/**
 * Collection<String>, Collection<T>, Collection<Comparable<T>>
 * type arguments: String, T, Comparable<T>.
 */
export class ParameterizedType implements IParameterizedType {
	/** define on where, could be class, constructor or method */
	private readonly _declaration: IGenericDeclaration;
	private readonly _actualTypeArguments: Array<TypeOrName> = [];
	private _rawTypeName: ClassName;
	private _ownerType: Optional<TypeOrName>;

	constructor(declaration: IGenericDeclaration,
	            more?: IParameterizedTypeConstructorArgs) {
		this._declaration = declaration;
		this.setActualTypeArguments(more?.actualTypeArguments?.(this.genericDeclaration))
			.setRawTypeName(more?.rawTypeName)
			.setOwnerType(more?.ownerType?.(this.genericDeclaration));
	}

	get genericDeclaration(): IGenericDeclaration {
		return this._declaration;
	}

	get classLoader(): IClassLoader {
		return this.genericDeclaration.classLoader;
	}

	get actualTypeArguments(): Array<IType> {
		return (this._actualTypeArguments ?? []).map(bound => {
			if (typeof bound === 'string') {
				return this.genericDeclaration.classLoader.findClass(bound);
			} else {
				return bound;
			}
		});
	}

	setActualTypeArguments(actualTypeArguments: Array<TypeOrName>): this {
		this._actualTypeArguments.length = 0;
		this._actualTypeArguments.push(...(actualTypeArguments ?? []));
		return this;
	}

	get rawType(): IClass {
		return this.classLoader.findClass(this._rawTypeName);
	}

	setRawTypeName(rawTypeName: ClassName): this {
		this._rawTypeName = rawTypeName;
		return this;
	}

	get ownerType(): Optional<IType> {
		return typeof this._ownerType === 'string'
			? this.genericDeclaration.classLoader.findClass(this._ownerType)
			: this._ownerType;
	}

	setOwnerType(ownerType?: TypeOrName): this {
		this._ownerType = ownerType;
		return this;
	}

	get typeName(): TypeName {
		return this.toString();
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof ParameterizedType)) {
			return false;
		}

		return ((this.ownerType == null && o.ownerType == null) || this.ownerType.equals(o.ownerType))
			&& this.rawType.name === o.rawType.name
			&& this.actualTypeArguments.length === o.actualTypeArguments.length
			&& this.actualTypeArguments.every((arg, index) => arg.equals(o.actualTypeArguments?.[index]));
	}

	toString(): string {
		let sb: string = '';

		if (this.ownerType != null) {
			sb = sb + this.ownerType.typeName;
			sb = sb + '$';
			if (this.ownerType instanceof ParameterizedType) {
				// Find simple name of nested type by removing the shared prefix with owner.
				sb = sb + this.rawType.name.replace(this.ownerType.rawType.name + '$', '');
			} else {
				sb = sb + this.rawType.simpleName;
			}
		} else {
			sb = sb + this.rawType.name;
		}

		if (this.actualTypeArguments != null && this.actualTypeArguments.length !== 0) {
			sb = sb + '<' + this.actualTypeArguments.map(actualTypeArgument => actualTypeArgument.typeName).join(', ') + '>';
		}

		return sb;
	}
}
