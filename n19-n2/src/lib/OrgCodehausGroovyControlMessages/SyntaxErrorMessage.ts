import {PrintWriter} from '../JavaIO';
import {Janitor, SourceUnit} from '../OrgCodehausGroovyControl';
import {SyntaxException} from '../OrgCodehausGroovySyntax';
import {GroovyControlMessage} from './GroovyControlMessage';

export class SyntaxErrorMessage extends GroovyControlMessage {
	protected _cause: SyntaxException;
	protected _source: SourceUnit;

	constructor(cause: SyntaxException, source: SourceUnit) {
		super();
		this._cause = cause;
		this._source = source;
		cause.setSourceLocator(source.name);
	}

	/**
	 * Returns the underlying SyntaxException.
	 */
	get cause(): SyntaxException {
		return this._cause;
	}

	get source(): SourceUnit {
		return this._source;
	}

	/**
	 * Writes out a nicely formatted summary of the syntax error.
	 */
	write(output: PrintWriter, janitor?: Janitor): void {
		const name = this.source.name;
		const line = this.cause.startLine;
		const column = this.cause.startColumn;
		const sample = this.source.getSample(line, column, janitor);

		output.print(name + ': ' + line + ': ' + this.cause.message);
		if (sample != null) {
			output.println();
			output.print(sample);
			output.println();
		}
	}
}
