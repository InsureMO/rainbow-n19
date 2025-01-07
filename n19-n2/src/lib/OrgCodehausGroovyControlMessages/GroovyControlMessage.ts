import {PrintWriter} from '../JavaIO';
import {Janitor, ProcessingUnit, SourceUnit} from '../OrgCodehausGroovyControl';
import {SyntaxException} from '../OrgCodehausGroovySyntax';
import {GroovyControlSimpleMessage} from './GroovyControlSimpleMessage';
import {SyntaxErrorMessage} from './SyntaxErrorMessage';

export abstract class GroovyControlMessage {

	/**
	 * Creates a new {@code Message} from the specified text.
	 */
	static create(text: string, owner: ProcessingUnit): GroovyControlSimpleMessage {
		return new GroovyControlSimpleMessage(text, owner);
	}

	/**
	 * Creates a new {@code Message} from the specified text and data.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	static createOnData(text: string, data: any, owner: ProcessingUnit): GroovyControlSimpleMessage {
		return new GroovyControlSimpleMessage(text, data, owner);
	}

	/**
	 * Creates a new {@code Message} from the specified {@code SyntaxException}.
	 */
	static createOnSyntaxError(error: SyntaxException, owner: SourceUnit): SyntaxErrorMessage {
		return new SyntaxErrorMessage(error, owner);
	}

	/**
	 * Writes this message to the specified {@link PrintWriter}.
	 */
	abstract write(writer: PrintWriter, janitor?: Janitor);
}
