import {RuntimeException, RuntimeExceptionConstructorArgs} from './RuntimeException';

export type IllegalArgumentExceptionConstructorArgs = RuntimeExceptionConstructorArgs;

export class IllegalArgumentException extends RuntimeException {
	constructor(args?: IllegalArgumentExceptionConstructorArgs) {
		super(args);
	}
}
