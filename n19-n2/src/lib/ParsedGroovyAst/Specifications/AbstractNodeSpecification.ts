import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export abstract class AbstractNodeSpecification<Type, Purpose> implements ParsedNodeSpecification<Type, Purpose> {
	private _type: Type;
	private _purpose: Purpose;

	/**
	 * Indicates the type of the current node within the specified purpose, with typical values being the Symbols of the Parser.
	 */
	get type(): Type {
		return this._type;
	}

	setType(type: Type): void {
		this._type = type;
	}

	abstract get typeText(): string;

	/**
	 * Indicate the purpose of the current node, typical values are Parser’s Rules.
	 */
	get purpose(): Purpose {
		return this._purpose;
	}

	setPurpose(purpose: Purpose): void {
		this._purpose = purpose;
	}

	abstract get purposeText(): string;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [
			['type', this.type],
			['type.text', this.typeText],
			['purpose', this.purpose],
			['purpose.text', this.purposeText]
		];
	}

	abstract createClone(): ParsedNodeSpecification<Type, Purpose>;

	/** copy properties to given specification, default do nothing */
	copyProperties(to: ParsedNodeSpecification<Type, Purpose>): void {
		to.setType(this.type);
		to.setPurpose(this.purpose);
	}

	clone(): ParsedNodeSpecification<Type, Purpose> {
		const cloned = this.createClone();
		this.copyProperties(cloned);
		return cloned;
	}
}