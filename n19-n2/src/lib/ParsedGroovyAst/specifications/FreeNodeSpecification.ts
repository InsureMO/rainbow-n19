import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export class FreeNodeSpecification implements ParsedNodeSpecification {
	private _properties: Array<[string, any]> = [];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return this._properties;
	}

	clone(): ParsedNodeSpecification {
		const spec = new FreeNodeSpecification();
		spec._properties = this._properties.map(([key, value]) => [key, value]);
		return spec;
	}
}