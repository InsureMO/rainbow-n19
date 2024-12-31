import {Throwable, ThrowableConstructorArgs} from './Throwable';

export type JavaErrorConstructorArgs = ThrowableConstructorArgs;

export class JavaError extends Throwable {
	constructor(args?: JavaErrorConstructorArgs) {
		super(args);
	}
}
