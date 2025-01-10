import {ParsedNodeSpecification} from '../NodeSpecification';

export class EmptyNodeSpecification implements ParsedNodeSpecification {
	static INSTANCE = new EmptyNodeSpecification();

	private constructor() {
		// avoid extend
	}

	get properties(): Array<[string, any]> {
		return [];
	}
}