import {RuntimeException, RuntimeExceptionConstructorArgs} from './RuntimeException';

export type UnsupportedOperationExceptionConstructorArgs = RuntimeExceptionConstructorArgs;

export class UnsupportedOperationException extends RuntimeException {
	constructor(args?: UnsupportedOperationExceptionConstructorArgs) {
		super(args);
	}
}
