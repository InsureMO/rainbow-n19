import {Exception} from '../JavaExceptions';
import {PrintWriter} from '../JavaIO';
import {Janitor, ProcessingUnit} from '../OrgCodehausGroovyControl';
import {GroovyControlMessage} from './GroovyControlMessage';

export class ExceptionMessage extends GroovyControlMessage {
	private readonly _cause: Exception;
	protected readonly _debug: boolean;
	protected readonly _owner: ProcessingUnit;

	constructor(cause: Exception, debug: boolean, owner: ProcessingUnit) {
		super();
		this._cause = cause;
		this._debug = debug;
		this._owner = owner;
	}

	/**
	 * Returns the underlying Exception.
	 */
	get cause(): Exception {
		return this._cause;
	}

	get owner(): ProcessingUnit {
		return this._owner;
	}

	/**
	 * Writes out a nicely formatted summary of the exception.
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	write(output: PrintWriter, _janitor: Janitor): void {
		const description = 'General error during ' + this.owner.phaseDescription + ': ';

		const message = this.cause.message;
		if (message != null) {
			output.println(description + message);
		} else {
			output.println(description + this.cause.toString());
		}
		output.println();

		/*if (debug)*/
		const stack = this.cause.stack;
		if (stack != null && stack.trim().length !== 0) {
			output.println(this.cause.stack);
		}
	}
}
