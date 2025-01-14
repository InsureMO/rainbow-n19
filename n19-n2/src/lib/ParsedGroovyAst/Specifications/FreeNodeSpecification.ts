import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class FreeNodeSpecification implements ParsedNodeSpecification<any, any> {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private _properties: Array<[string, any]> = [];

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get type(): any {
		return this._properties.find(([key]) => key === 'type')?.[1];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setType(type: any): void {
		const pair = this._properties.find(([key]) => key === 'type');
		if (pair != null) {
			pair[1] = type;
		} else {
			this._properties.push(['type', type]);
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get purpose(): any {
		return this._properties.find(([key]) => key === 'purpose')?.[1];
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setPurpose(purpose: any): void {
		const pair = this._properties.find(([key]) => key === 'purpose');
		if (pair != null) {
			pair[1] = purpose;
		} else {
			this._properties.push(['type', purpose]);
		}
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return this._properties;
	}

	clone(): FreeNodeSpecification {
		const spec = new FreeNodeSpecification();
		spec._properties = this._properties.map(([key, value]) => [key, value]);
		return spec;
	}
}
