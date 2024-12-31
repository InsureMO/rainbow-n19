import {Class} from '../Class';
import {IWildcardTypeConstructorArgs} from '../ConstructorArgs';
import {BuiltInConstants} from '../Helpers';
import {IClassLoader, IGenericDeclaration, IType, IWildcardType} from '../Interfaces';
import {TypeName} from '../TypeAlias';

export class WildcardType implements IWildcardType {
	/** define on where, could be class, constructor or method */
	private readonly _declaration: IGenericDeclaration;
	private _upperBounds: Array<IType>;
	private _lowerBounds: Array<IType>;

	constructor(declaration: IGenericDeclaration,
	            more?: IWildcardTypeConstructorArgs) {
		this._declaration = declaration;
		this.setUpperBounds(more?.upperBounds)
			.setLowerBounds(more?.lowerBounds);
	}

	get genericDeclaration(): IGenericDeclaration {
		return this._declaration;
	}

	get classLoader(): IClassLoader {
		return this.genericDeclaration.classLoader;
	}

	get upperBounds(): Array<IType> {
		return this._upperBounds ?? [];
	}

	setUpperBounds(bounds: Array<IType>): this {
		this._upperBounds = bounds;
		return this;
	}

	get lowerBounds(): Array<IType> {
		return this._lowerBounds ?? [];
	}

	setLowerBounds(bounds: Array<IType>): this {
		this._lowerBounds = bounds;
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

		if (this.lowerBounds.length > 0) {
			bounds = this.lowerBounds;
			sb = sb + '? super ';
		} else if (this.upperBounds.length > 0
			&& this.upperBounds[0] instanceof Class
			&& (this.upperBounds[0] as Class).name === BuiltInConstants.LANG_OBJECT) {
			bounds = this.upperBounds;
			sb = sb + '? extends ';
		} else {
			return '?';
		}

		sb = sb + bounds.map(bound => bound.typeName).join(' & ');
		return sb;
	}
}
