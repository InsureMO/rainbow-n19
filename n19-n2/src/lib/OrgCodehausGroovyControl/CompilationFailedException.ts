import {GroovyRuntimeException} from '../GroovyLang';
import {Throwable} from '../JavaExceptions';
import {Phases} from './Phases';
import {ProcessingUnit} from './ProcessingUnit';

export class CompilationFailedException extends GroovyRuntimeException {
	protected _phase: number;   // The phase in which the failures occurred
	protected _unit: ProcessingUnit;    // The *Unit object this exception wraps

	constructor(phase: number, unit: ProcessingUnit, cause?: Throwable) {
		super({message: Phases.getDescription(phase) + ' failed', cause});
		this._phase = phase;
		this._unit = unit;
	}

	/**
	 * Formats the error data as a String.
	 */

	/*String toString() {
		StringWriter data = new StringWriter();
		PrintWriter writer = new PrintWriter(data);
		Janitor janitor = new Janitor();

		try {
			unit.getErrorReporter().write(writer, janitor);
		}
		finally {
			janitor.cleanup();
		}

		return data.toString();
	}*/

	/**
	 * Returns the ProcessingUnit in which the error occurred.
	 */

	get unit(): ProcessingUnit {
		return this._unit;
	}
}
