import {ParsedNodeSpecification} from '../ParsedNodeSpecification';

export class EmptyNodeSpecification implements ParsedNodeSpecification {
	static INSTANCE = new EmptyNodeSpecification();

	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	get properties(): Array<[string, any]> {
		return [];
	}
}