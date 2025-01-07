import {Exception} from '../JavaExceptions';
import {PrintWriter} from '../JavaIO';
import {ASTNode} from '../OrgCodehausGroovyAst';
import {
	ExceptionMessage,
	GroovyControlLocatedMessage,
	GroovyControlMessage,
	SyntaxErrorMessage,
	WarningMessage
} from '../OrgCodehausGroovyControlMessages';
import {CSTNode, SyntaxException} from '../OrgCodehausGroovySyntax';
import {Optional} from '../TsAddon';
import {CompilerConfiguration} from './CompilerConfiguration';
import {Janitor} from './Janitor';
import {MultipleCompilationErrorsException} from './MultipleCompilationErrorsException';
import {SourceUnit} from './SourceUnit';

export class ErrorCollector {
	/**
	 * ErrorMessages collected during processing
	 */
	protected _errors: Array<GroovyControlMessage>;

	/**
	 * WarningMessages collected during processing
	 */
	protected _warnings: Array<WarningMessage>;

	/**
	 * Configuration and other settings that control processing
	 */
	protected readonly _configuration: CompilerConfiguration;

	/**
	 * Initialize the ErrorReporter.
	 */
	constructor(configuration: CompilerConfiguration) {
		this._configuration = configuration;
	}

	addCollectorContents(that: ErrorCollector): void {
		if (that._errors != null) {
			if (this._errors == null) {
				this._errors = that._errors;
			} else {
				this._errors.push(...that._errors);
			}
		}
		if (that._warnings != null) {
			if (this._warnings == null) {
				this._warnings = that._warnings;
			} else {
				this._warnings.push(...that._warnings);
			}
		}
	}

	addErrorMessageAndContinue(error: string, node: ASTNode, source: SourceUnit): void {
		this.addErrorAndContinue(GroovyControlMessage.createOnSyntaxError(new SyntaxException({
			message: error, node
		}), source));
	}

	addSyntaxErrorAndContinue(error: SyntaxException, source: SourceUnit): void {
		this.addErrorAndContinue(GroovyControlMessage.createOnSyntaxError(error, source));
	}

	/**
	 * Adds an error to the message set, but does not cause a failure. The message is not required to have a source
	 * line and column specified, but it is best practice to try and include that information.
	 */
	addErrorAndContinue(message: GroovyControlMessage): void {
		if (this._errors == null) {
			this._errors = [];
		}
		this._errors.push(message);
	}

	/**
	 * Adds an optionally-fatal error to the message set.
	 * The message is not required to have a source line and column specified, but it is best practice to try
	 * and include that information.
	 * @param message
	 * @param fatal
	 *      if true then processing will stop
	 */
	addError(message: GroovyControlMessage, fatal?: boolean): void /* throws CompilationFailedException */ {
		if (fatal == null) {
			this.addErrorAndContinue(message);

			if (this._errors != null && this._errors.length >= this._configuration.tolerance) {
				this.failIfErrors();
			}
		} else {
			if (fatal) {
				this.addFatalError(message);
			} else {
				this.addError(message);
			}
		}
	}

	addErrorAccordingToSyntaxError(error: SyntaxException, source: SourceUnit): void /* throws CompilationFailedException */ {
		this.addError(GroovyControlMessage.createOnSyntaxError(error, source), error.fatal);
	}

	addErrorAccordingToMessage(message: string, context: CSTNode, source: SourceUnit): void /* throws CompilationFailedException */ {
		this.addError(new GroovyControlLocatedMessage(message, context, source));
	}

	addException(exception: Exception, source: SourceUnit): void /* throws CompilationFailedException */ {
		this.addError(new ExceptionMessage(exception, this._configuration.debug, source));
		this.failIfErrors();
	}

	/**
	 * Adds an error to the message set and throws CompilationFailedException.
	 */
	addFatalError(message: GroovyControlMessage): void /* throws CompilationFailedException */ {
		this.addError(message);
		this.failIfErrors();
	}

	/**
	 * Adds a warning to the message set if it is relevant.
	 */
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	addWarning(importanceOrMessage: number | WarningMessage, text?: string, context?: CSTNode, source?: SourceUnit, data?: any): void {
		if (importanceOrMessage instanceof WarningMessage) {
			if (importanceOrMessage.isRelevant(this._configuration.warningLevel)) {
				if (this._warnings == null) {
					this._warnings = [];
				}
				this._warnings.push(importanceOrMessage);
			}
		} else {
			if (WarningMessage.isRelevant(importanceOrMessage, this._configuration.warningLevel)) {
				this.addWarning(new WarningMessage(importanceOrMessage, text, context, source, data));
			}
		}
	}

	/**
	 * @return the compiler configuration used to create this error collector
	 */
	get configuration(): CompilerConfiguration {
		return this._configuration;
	}

	/**
	 * Returns the number of errors.
	 */
	get errorCount(): number {
		return this.hasErrors ? this._errors.length : 0;
	}

	/**
	 * Returns the specified error message, or null.
	 */
	getError(index: number): Optional<GroovyControlMessage> {
		if (index < this.errorCount) {
			return this._errors[index];
		}
		return null;
	}

	/**
	 * Returns the list of errors, or null if there are none.
	 */
	get errors(): Array<GroovyControlMessage> {
		return this._errors ?? [];
	}

	/**
	 * Returns true if there are any errors pending.
	 */
	get hasErrors(): boolean {
		return this._errors != null && this._errors.length !== 0;
	}

	/**
	 * Returns the number of warnings.
	 */
	get warningCount(): number {
		return this.hasWarnings ? this._warnings.length : 0;
	}

	/**
	 * Returns the specified warning message, or null.
	 */
	getWarning(index: number): Optional<WarningMessage> {
		if (index < this.warningCount) {
			return this._warnings[index];
		}
		return null;
	}

	/**
	 * Returns the list of warnings, or null if there are none.
	 */
	get warnings(): Array<WarningMessage> {
		return this._warnings ?? [];
	}

	/**
	 * Returns true if there are any warnings pending.
	 */
	get hasWarnings(): boolean {
		return this._warnings != null && this._warnings.length !== 0;
	}

	//

	/**
	 * Returns the last error reported.
	 */
	get lastError(): Optional<GroovyControlMessage> {
		return (this._errors == null || this._errors.length === 0) ? (void 0) : this._errors[this._errors.length - 1];
	}

	/**
	 * Returns the specified error's underlying Exception, or null if it isn't one.
	 */
	getException(index: number): Exception {
		let exception: Exception = null;
		const message = this.getError(index);
		if (message != null) {
			if (message instanceof ExceptionMessage) {
				exception = message.cause;
			} else if (message instanceof SyntaxErrorMessage) {
				exception = message.cause;
			}
		}
		return exception;
	}

	/**
	 * Returns the specified error's underlying SyntaxException, or null if it isn't one.
	 */
	getSyntaxError(index: number): SyntaxException {
		let exception: SyntaxException = null;
		const message = this.getError(index);
		if (message instanceof SyntaxErrorMessage) {
			exception = message.cause;
		}
		return exception;
	}

	/**
	 * Causes the current phase to fail by throwing a CompilationFailedException.
	 */
	failIfErrors(): void /* throws CompilationFailedException */ {
		if (this.hasErrors) {
			throw new MultipleCompilationErrorsException(this);
		}
	}

	//---------------------------------------------------------------------------
	// OUTPUT

	write(writer: PrintWriter, janitor: Janitor, messages?: Array<GroovyControlMessage>, txt?: string): void {
		if (txt == null) {
			this.write(writer, janitor, this._warnings, 'warning');
			this.write(writer, janitor, this._errors, 'error');
		} else {
			if (messages == null || messages.length === 0) {
				return;
			}

			for (const message of messages) {
				message.write(writer, janitor);
				if (this._configuration.debug && (message instanceof SyntaxErrorMessage)) {
					writer.println(message.cause.stack ?? '');
				}
				writer.println();
			}

			writer.print(messages.length);
			writer.print(' ' + txt);
			if (messages.length > 1) {
				writer.print('s');
			}
			writer.println();
		}
	}
}
