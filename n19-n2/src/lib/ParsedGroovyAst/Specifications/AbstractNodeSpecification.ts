import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export abstract class AbstractNodeSpecification<Type, Purpose> implements ParsedNodeSpecification<Type, Purpose> {
	private _type: Type;
	private _purpose: Purpose;

	get type(): Type {
		return this._type;
	}

	setType(type: Type): void {
		this._type = type;
	}

	abstract get typeText(): string;

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

	/** default do nothing */
	copyProperties(to: ParsedNodeSpecification<Type, Purpose>): void {
	}

	clone(): ParsedNodeSpecification<Type, Purpose> {
		const cloned = this.createClone();
		cloned.setType(this.type);
		cloned.setPurpose(this.purpose);
		this.copyProperties(cloned);
		return cloned;
	}
}