import {Exception, ExceptionConstructorArgs} from './Exception';

export type RuntimeExceptionConstructorArgs = ExceptionConstructorArgs;

export class RuntimeException extends Exception {
	constructor(args?: RuntimeExceptionConstructorArgs) {
		super(args);
	}
}
