import {RuntimeException, RuntimeExceptionConstructorArgs} from './RuntimeException';

export type IndexOutOfBoundsExceptionConstructorArgs = RuntimeExceptionConstructorArgs;

export class IndexOutOfBoundsException extends RuntimeException {
	constructor(args?: IndexOutOfBoundsExceptionConstructorArgs) {
		super(args);
	}
}
