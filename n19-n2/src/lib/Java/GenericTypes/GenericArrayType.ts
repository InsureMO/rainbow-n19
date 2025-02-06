import {IGenericArrayTypeConstructorArgs} from '../ConstructorArgs';
import {IClassLoader, IGenericArrayType, IGenericDeclaration, IType} from '../Interfaces';
import {TypeOrName} from '../TypeAlias';

export class GenericArrayType implements IGenericArrayType {
	/** define on where, could be class, constructor or method */
	private readonly _declaration: IGenericDeclaration;
	private _genericComponentType: TypeOrName;

	constructor(declaration: IGenericDeclaration,
	            more?: IGenericArrayTypeConstructorArgs) {
		this._declaration = declaration;
		this.setGenericComponentType(more?.genericComponentType);
	}

	get genericDeclaration(): IGenericDeclaration {
		return this._declaration;
	}

	get classLoader(): IClassLoader {
		return this.genericDeclaration.classLoader;
	}

	get genericComponentType(): IType {
		return typeof this._genericComponentType === 'string'
			? this.genericDeclaration.classLoader.findClass(this._genericComponentType)
			: this._genericComponentType;
	}

	setGenericComponentType(genericComponentType: TypeOrName): this {
		this._genericComponentType = genericComponentType;
		return this;
	}

	get typeName(): string {
		return this.toString();
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	equals(o: any): boolean {
		if (this === o) {
			return true;
		}
		if (o == null || !(o instanceof GenericArrayType)) {
			return false;
		}
		return this.genericComponentType.equals(o.genericComponentType);
	}

	toString() {
		return this.genericComponentType.typeName + '[]';
	}
}
