import {Class} from '../Class';
import {IWildcardTypeConstructorArgs} from '../ConstructorArgs';
import {BuiltInConstants} from '../Helpers';
import {IClassLoader, IGenericDeclaration, IType, IWildcardType} from '../Interfaces';
import {TypeSupport} from '../Supports';
import {TypeName, TypeOrNameOrTypeVariableRef} from '../TypeAlias';

export class WildcardType implements IWildcardType {
	/** define on where, could be class, constructor or method */
	private readonly _declaration: IGenericDeclaration;
	private readonly _typeSupportOfUpperBounds: Array<TypeSupport<IWildcardType>> = [];
	private readonly _typeSupportOfLowerBounds: Array<TypeSupport<IWildcardType>> = [];

	constructor(declaration: IGenericDeclaration,
	            more?: IWildcardTypeConstructorArgs) {
		this._declaration = declaration;
		this.setUpperBounds(more?.upperBounds?.(this))
			.setLowerBounds(more?.lowerBounds?.(this));
	}

	get genericDeclaration(): IGenericDeclaration {
		return this._declaration;
	}

	get classLoader(): IClassLoader {
		return this.genericDeclaration.classLoader;
	}

	get upperBounds(): Array<IType> {
		return (this._typeSupportOfUpperBounds ?? []).map(bound => bound.genericType);
	}

	setUpperBounds(bounds: Array<TypeOrNameOrTypeVariableRef>): this {
		this._typeSupportOfUpperBounds.length = 0;
		this._typeSupportOfUpperBounds.push(...(bounds ?? []).map(bound => new TypeSupport<IWildcardType>(this).setTypeOrName(bound)));
		return this;
	}

	get lowerBounds(): Array<IType> {
		return (this._typeSupportOfLowerBounds ?? []).map(bound => bound.genericType);
	}

	setLowerBounds(bounds: Array<TypeOrNameOrTypeVariableRef>): this {
		this._typeSupportOfLowerBounds.length = 0;
		this._typeSupportOfLowerBounds.push(...(bounds ?? []).map(bound => new TypeSupport<IWildcardType>(this).setTypeOrName(bound)));
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
		if (o == null || !(o instanceof WildcardType)) {
			return false;
		}
		return this.lowerBounds.length === o.lowerBounds.length
			&& this.lowerBounds.every((bound, index) => bound.equals(o.lowerBounds[index]))
			&& this.upperBounds.length === o.upperBounds.length
			&& this.upperBounds.every((bound, index) => bound.equals(o.upperBounds[index]));
	}

	toString(): string {
		// if using "? super", lower bound must be appointed,
		// and if using "? extends", upper bound must be appointed,
		// and if using "?", default upper bound is java.lang.Object
		let bounds: Array<IType> = [];
		let sb: string = '';

		if (this.lowerBounds.length === 0) {
			if (this.upperBounds.length === 0
				|| (this.upperBounds[0] instanceof Class && (this.upperBounds[0] as Class).name === BuiltInConstants.LANG_OBJECT)) {
				return '?';
			} else {
				bounds = this.upperBounds;
				sb = sb + '? extends ';
			}
		} else {
			bounds = this.lowerBounds;
			sb = sb + '? super ';
		}

		sb = sb + bounds.map(bound => bound.typeName).join(' & ');
		return sb;
	}
}
