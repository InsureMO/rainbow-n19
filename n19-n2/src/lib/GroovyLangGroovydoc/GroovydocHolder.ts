import {IGroovydoc} from './Groovydoc';

export class GroovydocHolderConstants {
	static readonly DOC_COMMENT: string = '_DOC_COMMENT'; // keys for metadata
	private constructor() {
		// avoid extend
	}
}

export interface GroovydocHolder<T = any> {
	readonly groovydoc: IGroovydoc;
	readonly instance: T;
}
