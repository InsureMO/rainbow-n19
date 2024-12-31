import {RuntimeException, RuntimeExceptionConstructorArgs} from './RuntimeException';

export type ClassCastExceptionConstructorArgs = RuntimeExceptionConstructorArgs;

export class ClassCastException extends RuntimeException {
	constructor(args?: ClassCastExceptionConstructorArgs) {
		super(args);
	}
}
