import {Exception, ExceptionConstructorArgs} from '../JavaExceptions';
import {GroovyExceptionInterface} from './GroovyExceptionInterface';

export type GroovyExceptionConstructorArgs = ExceptionConstructorArgs;

export class GroovyException extends Exception implements GroovyExceptionInterface {
	private _fatal: boolean = true;

	constructor(args?: GroovyExceptionConstructorArgs) {
		super(args);
	}

	get fatal(): boolean {
		return this._fatal ?? true;
	}

	setFatal(fatal: boolean): void {
		this._fatal = fatal;
	}
}
