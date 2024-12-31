import {JavaError, JavaErrorConstructorArgs} from './JavaError';

export type AssertionErrorConstructorArgs = JavaErrorConstructorArgs;

export class AssertionError extends JavaError {
	constructor(args?: AssertionErrorConstructorArgs) {
		super(args);
	}
}
