import {AbstractNodeSpecification} from './AbstractNodeSpecification';
import {FreeNodeSpecification} from './FreeNodeSpecification';

export class EmptyNodeSpecification extends AbstractNodeSpecification<-1, -1> {
	static INSTANCE = new EmptyNodeSpecification();

	private constructor() {
		// avoid extend
		super();
	}

	get type(): -1 {
		return -1;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setType(_type: -1): void {
	}

	get typeText(): string {
		return 'Untyped';
	}

	get purpose(): -1 {
		return -1;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	setPurpose(_purpose: -1): void {
	}

	get purposeText(): string {
		return 'Unpurpose';
	}

	createClone(): FreeNodeSpecification {
		return new FreeNodeSpecification();
	}
}
