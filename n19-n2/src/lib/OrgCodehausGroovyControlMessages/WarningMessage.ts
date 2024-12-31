import {PrintWriter} from '../JavaIO';
import {Janitor, SourceUnit} from '../OrgCodehausGroovyControl';
import {CSTNode} from '../OrgCodehausGroovySyntax';
import {GroovyControlLocatedMessage} from './GroovyControlLocatedMessage';

export class WarningMessage extends GroovyControlLocatedMessage {
	//--------------------------------------------------------------------------
	// WARNING LEVELS

	/** Ignore all (for querying) */
	static readonly NONE: number = 0;
	/** Warning indicates likely error */
	static readonly LIKELY_ERRORS: number = 1;
	/** Warning indicates possible error */
	static readonly POSSIBLE_ERRORS: number = 2;
	/** Warning indicates paranoia on the part of the compiler */
	static readonly PARANOIA: number = 3;

	/**
	 * Returns true if a warning would be relevant to the specified level.
	 */
	static isRelevant(actual: number, limit: number): boolean {
		return actual <= limit;
	}

	//--------------------------------------------------------------------------

	/** The warning level (for filtering). */
	private readonly _importance: number;

	/**
	 * Creates a new warning message.
	 *
	 * @param importance the warning level
	 * @param message    the message text
	 * @param context    for locating the offending source text
	 * @param owner
	 * @param data
	 */
	constructor(importance: number, message: string, context: CSTNode, owner: SourceUnit, data?: any) {
		super(message, context, owner, data);
		this._importance = importance;
	}

	get importance(): number {
		return this._importance;
	}

	/**
	 * Returns true if this message is as or more important than the
	 * specified importance level.
	 */
	isRelevant(importance: number): boolean {
		return WarningMessage.isRelevant(this._importance, importance);
	}

	write(writer: PrintWriter, janitor: Janitor): void {
		writer.print('warning: ');
		super.write(writer, janitor);
	}
}
