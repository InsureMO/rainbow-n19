import {GroovyClassLoader} from '../GroovyLang';
import {Exception} from '../JavaExceptions';
import {GroovyBugError} from '../OrgCodehausGroovy';
import {ASTNode, ModuleNode} from '../OrgCodehausGroovyAst';
import {
	GroovyControlMessage,
	GroovyControlSimpleMessage,
	SyntaxErrorMessage,
	WarningMessage
} from '../OrgCodehausGroovyControlMessages';
import {Reduction, SyntaxException, Token} from '../OrgCodehausGroovySyntax';
import {CompilerConfiguration} from './CompilerConfiguration';
import {ErrorCollector} from './ErrorCollector';
import {Janitor} from './Janitor';
import {Phases} from './Phases';
import {ProcessingUnit} from './ProcessingUnit';

export class SourceUnit extends ProcessingUnit {
	/**
	 * The pluggable parser used to generate the AST - we allow
	 * pluggability currently as we need to have Classic and JSR support
	 */
	private _parserPlugin: ParserPlugin;

	/**
	 * Where we can get Readers for our source unit
	 */
	protected _source: ReaderSource;

	/**
	 * A descriptive name of the source unit. This name shouldn't
	 * be used for controlling the SourceUnit, it is only for error
	 * messages and to determine the name of the class for
	 * a script.
	 */
	protected _name: string;

	/**
	 * A Concrete Syntax Tree of the source
	 */
	protected _cst: Reduction;

	/**
	 * The root of the Abstract Syntax Tree for the source
	 */
	protected _ast: ModuleNode;

	/**
	 * Initializes the SourceUnit from existing machinery.
	 */
	constructor(name: string,
	            source: string | ReaderSource,
	            flags: CompilerConfiguration,
	            loader: GroovyClassLoader,
	            er: ErrorCollector) {
		super(flags, loader, er);

		this._name = name;
		this._source = typeof source === 'string' ? new StringReaderSource(source, flags) : source;
	}

	/**
	 * Returns the name for the SourceUnit. This name shouldn't
	 * be used for controlling the SourceUnit, it is only for error
	 * messages
	 */
	get name(): string {
		return this._name;
	}

	/**
	 * Returns the Concrete Syntax Tree produced during parse()ing.
	 */
	get cst(): Reduction {
		return this._cst;
	}

	/**
	 * Returns the Abstract Syntax Tree produced during convert()ing
	 * and expanded during later phases.
	 */
	get ast(): ModuleNode {
		return this._ast;
	}

	/**
	 * Convenience routine, primarily for use by the InteractiveShell,
	 * that returns true if parse() failed with an unexpected EOF.
	 */
	get failedWithUnexpectedEOF(): boolean {
		// Implementation note - there are several ways for the Groovy compiler
		// to report an unexpected EOF. Perhaps this implementation misses some.
		// If you find another way, please add it.
		// noinspection RedundantIfStatementJS
		if (this.errorCollector.hasErrors) {
			/*
			Message last = (Message) getErrorCollector().getLastError();
			Throwable cause = null;
			if (last instanceof SyntaxErrorMessage) {
				cause = ((SyntaxErrorMessage) last).getCause().getCause();
			}
			if (cause != null) {
				if (cause instanceof groovyjarjarantlr.NoViableAltException) {
					return isEofToken(((groovyjarjarantlr.NoViableAltException) cause).token);
				} else if (cause instanceof groovyjarjarantlr.NoViableAltForCharException) {
					char badChar = ((groovyjarjarantlr.NoViableAltForCharException) cause).foundChar;
					return badChar == groovyjarjarantlr.CharScanner.EOF_CHAR;
				} else if (cause instanceof groovyjarjarantlr.MismatchedCharException) {
					char badChar = (char) ((groovyjarjarantlr.MismatchedCharException) cause).foundChar;
					return badChar == groovyjarjarantlr.CharScanner.EOF_CHAR;
				} else if (cause instanceof groovyjarjarantlr.MismatchedTokenException) {
					return isEofToken(((groovyjarjarantlr.MismatchedTokenException) cause).token);
				}
			}
			*/
			return true;
		}
		return false;
	}

	/*protected boolean isEofToken(groovyjarjarantlr.Token token) {
		return token.getType() == groovyjarjarantlr.Token.EOF_TYPE;
	}*/

	//---------------------------------------------------------------------------
	// FACTORIES

	/**
	 * A convenience routine to create a standalone SourceUnit on a String
	 * with defaults for almost everything that is configurable.
	 */
	static create(name: string, source: string, tolerance: number = 1): SourceUnit {
		const configuration = new CompilerConfiguration();
		configuration.setTolerance(tolerance);

		return new SourceUnit(name, source, configuration, null, new ErrorCollector(configuration));
	}

	//---------------------------------------------------------------------------
	// PROCESSING

	/**
	 * Parses the source to a CST.  You can retrieve it with getCST().
	 */
	parse(): void  /* throws CompilationFailedException */ {
		if (this.phase > Phases.PARSING) {
			throw new GroovyBugError('parsing is already complete');
		}

		if (this.phase == Phases.INITIALIZATION) {
			this.nextPhase();
		}

		//
		// Create a reader on the source and run the parser.

		const reader = this.source.reader;
		try {
			// let's recreate the parser each time as it tends to keep around state
			this._parserPlugin = this.configuration.pluginFactory.createParserPlugin();
			this._cst = this._parserPlugin.parseCST(this, reader);
		} catch (e /* IOException */) {
			this.errorCollector.addFatalError(new GroovyControlSimpleMessage(e.getMessage(), this));
		}
	}

	/**
	 * Generates an AST from the CST.  You can retrieve it with getAST().
	 */
	convert(): void /* throws CompilationFailedException */ {
		if (this.phase == Phases.PARSING && this._phaseComplete) {
			this.gotoPhase(Phases.CONVERSION);
		}

		if (this.phase != Phases.CONVERSION) {
			throw new GroovyBugError('SourceUnit not ready for convert()');
		}

		this.buildAST();

		// TODO SURE WE DON'T NEED XML SERIALIZATION HERE
		// if ('xml' === this.getProperty('groovy.ast')) {
		// 	XStreamUtils.serialize(this.name, this.ast);
		// }
	}

	// TODO COPY FROM GROOVY: a future Groovy version should get the property not as a privileged action
	//  @SuppressWarnings("removal")
	// noinspection JSUnusedLocalSymbols
	private getProperty(key: string): string {
		// TODO FROM WINDOW OR GLOBAL, READ SYSTEM PROPERTIES
		//  BUT MAYBE IT IS UNNECESSARY, SINCE WE DON'T NEED XML HERE
		return process[key.toUpperCase().replace(/\./g, '_')];
	}

	/**
	 * Builds the AST.
	 */
	buildAST(): ModuleNode {
		if (this.ast == null) {
			try {
				this._ast = this._parserPlugin.buildAST(this, this.classLoader, this.cst);
				this.ast.setDescription(this.name);
			} catch (e /* SyntaxException */) {
				if (this.ast == null) {
					// create an empty ModuleNode to represent a failed parse, in case a later phase attempts to use the AST
					this._ast = new ModuleNode(this);
				}
				this.errorCollector.addError(new SyntaxErrorMessage(e, this));
			}
		}
		return this.ast;
	}

	//--------------------------------------------------------------------------
	// SOURCE SAMPLING

	/**
	 * Returns a sampling of the source at the specified line and column,
	 * or null if it is unavailable.
	 */
	getSample(line: number, column: number, janitor: Janitor): string {
		let sample: string = null;
		const text: string = this.source.getLine(line, janitor);

		if (text != null) {
			if (column > 0) {
				const marker = ' '.repeat(column - 1) + '^';

				if (column > 40) {
					const start = column - 30 - 1;
					const length = text.length;
					const end = (column + 10 > length ? length : column + 10 - 1);
					if (start >= length || end < start) {
						return null; // can happen with CR only files GROOVY-10676
					}
					sample = '   ' + text.substring(start, end) + '\n' + '   ' + marker.substring(start);
				} else {
					sample = '   ' + text + '\n' + '   ' + marker;
				}
			} else {
				sample = text;
			}
		}

		return sample;
	}

	/**
	 * This method adds an exception to the error collector. The Exception most likely has no line number attached to it.
	 * For this reason you should use this method sparingly. Prefer using addError for syntax errors or add an error
	 * to the {@link ErrorCollector} directly by retrieving it with getErrorCollector().
	 *
	 * @param e the exception that occurred
	 * @throws CompilationFailedException on error
	 */
	addException(e: Exception): void /* throws CompilationFailedException */ {
		if (e instanceof SyntaxException) {
			this.addError(e);
		} else {
			this.errorCollector.addException(e, this);
		}
	}

	/**
	 * This method adds a SyntaxException to the error collector. The exception should specify the line and column
	 * number of the error.  This method should be reserved for real errors in the syntax of the SourceUnit. If
	 * your error is not in syntax, and is a semantic error, or more general error, then use addException or use
	 * the error collector directly by retrieving it with getErrorCollector().
	 *
	 * @param se the exception, which should have line and column information
	 * @throws CompilationFailedException on error
	 */
	addError(se: SyntaxException): void /* throws CompilationFailedException */ {
		this.errorCollector.addErrorAccordingToSyntaxError(se, this);
	}

	/**
	 * Convenience wrapper for {@link ErrorCollector#addFatalError(org.codehaus.groovy.control.messages.Message)}.
	 *
	 * @param text the error message
	 * @param node for locating the offending code
	 * @throws CompilationFailedException on error
	 *
	 * @since 3.0.0
	 */
	addFatalError(text: string, node: ASTNode): void /* throws CompilationFailedException */ {
		this.errorCollector.addFatalError(GroovyControlMessage.createOnSyntaxError(new SyntaxException({
			message: text,
			node
		}), this));
	}

	/**
	 * @since 4.0.7
	 */
	addWarning(text: string, node: ASTNode): void {
		const token = new Token(0, '', node.lineNumber, node.columnNumber); // ASTNode to CSTNode
		this.errorCollector.addWarning(new WarningMessage(WarningMessage.POSSIBLE_ERRORS, text, token, this));
	}

	addErrorAndContinue(se: SyntaxException) {
		this.errorCollector.addSyntaxErrorAndContinue(se, this);
	}

	get source(): ReaderSource {
		return this._source;
	}

	setSource(source: ReaderSource): void {
		this._source = source;
	}
}
