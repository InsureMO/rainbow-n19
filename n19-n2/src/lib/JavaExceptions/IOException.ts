import {Exception, ExceptionConstructorArgs} from './Exception';

export type IOExceptionConstructorArgs = ExceptionConstructorArgs;

export class IOException extends Exception {
	constructor(args?: IOExceptionConstructorArgs) {
		super(args);
	}
}
