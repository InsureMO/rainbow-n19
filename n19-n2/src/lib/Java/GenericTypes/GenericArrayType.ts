import {IGenericArrayTypeConstructorArgs} from '../ConstructorArgs';
import {IClassLoader, IGenericArrayType, IGenericDeclaration, IType} from '../Interfaces';
import {TypeSupport} from '../Supports';
import {TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export class GenericArrayType implements IGenericArrayType {
	/** define on where, could be class, constructor or method */
	private readonly _declaration: IGenericDeclaration;
	private readonly _typeSupport: TypeSupport<IGenericArrayType> = new TypeSupport<IGenericArrayType>(this);

	constructor(declaration: IGenericDeclaration,
	            more?: IGenericArrayTypeConstructorArgs) {
		this._declaration = declaration;
		this.setGenericComponentType(more?.genericComponentType?.(this));
	}

	get genericDeclaration(): IGenericDeclaration {
		return this._declaration;
	}

	get classLoader(): IClassLoader {
		return this.genericDeclaration.classLoader;
	}

	get genericComponentType(): IType {
		return this._typeSupport.genericType;
	}

	setGenericComponentType(genericComponentType: TypeOrNameOrTypeVariableRef): this {
		this._typeSupport.setTypeOrName(genericComponentType);
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
