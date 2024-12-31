import {Throwable, ThrowableConstructorArgs} from './Throwable';

export type ExceptionConstructorArgs = ThrowableConstructorArgs;

export class Exception extends Throwable {
	constructor(args?: ExceptionConstructorArgs) {
		super(args);
	}
}
