import {ThrowableConstructorArgsOpt1} from '../JavaExceptions';
import {GroovyException, GroovyExceptionConstructorArgs} from '../OrgCodehausGroovy';
import {ASTNode} from '../OrgCodehausGroovyAst';
import {Optional} from '../TsAddon';

export type SyntaxExceptionConstructorArgsBase = Exclude<GroovyExceptionConstructorArgs, ThrowableConstructorArgsOpt1>;
export type SyntaxExceptionConstructorArgsOpt1 = { node: ASTNode }
export type SyntaxExceptionConstructorArgsOpt2 = { startLine: number, startColumn: number }
export type SyntaxExceptionConstructorArgsOpt3 = {
	startLine: number, startColumn: number, endLine: number, endColumn: number
}
export type SyntaxExceptionConstructorArgs =
	& SyntaxExceptionConstructorArgsBase
	& (SyntaxExceptionConstructorArgsOpt1 | SyntaxExceptionConstructorArgsOpt2 | SyntaxExceptionConstructorArgsOpt3);

export class SyntaxException extends GroovyException {
	/** Line upon which the error occurred. */
	private readonly _startLine: number;
	private readonly _endLine: number;
	/** Column upon which the error occurred. */
	private readonly _startColumn: number;
	private readonly _endColumn: number;
	private _sourceLocator: Optional<string>;

	constructor(args: SyntaxExceptionConstructorArgs) {
		super(args);
		if ((args as SyntaxExceptionConstructorArgsOpt1).node != null) {
			const node = (args as SyntaxExceptionConstructorArgsOpt1).node;
			this._startLine = node.lineNumber;
			this._startColumn = node.columnNumber;
			this._endLine = node.lastLineNumber;
			this._endColumn = node.lastColumnNumber;
		} else if ((args as SyntaxExceptionConstructorArgsOpt3).endLine != null) {
			const {startLine, startColumn, endLine, endColumn} = args as SyntaxExceptionConstructorArgsOpt3;
			this._startLine = startLine;
			this._startColumn = startColumn;
			this._endLine = endLine ?? startLine;
			this._endColumn = endColumn ?? (startColumn + 1);
		} else {
			const {startLine, startColumn} = args as SyntaxExceptionConstructorArgsOpt2;
			this._startLine = startLine;
			this._startColumn = startColumn;
			this._endLine = startLine;
			this._endColumn = (startColumn + 1);
		}
	}

	get sourceLocator(): Optional<string> {
		return this._sourceLocator;
	}

	setSourceLocator(sourceLocator: string): void {
		this._sourceLocator = sourceLocator;
	}

	get startLine(): number {
		return this._startLine;
	}

	get line(): number {
		return this.startLine;
	}

	get startColumn(): number {
		return this._startColumn;
	}

	get endLine(): number {
		return this._endLine;
	}

	get endColumn(): number {
		return this._endColumn;
	}

	get originalMessage(): string {
		return super.message;
	}

	get message(): string {
		return super.message + ' @ line ' + this._startLine + ', column ' + this._startColumn + '.';
	}
}