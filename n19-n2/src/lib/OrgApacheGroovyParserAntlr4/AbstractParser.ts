import {Parser, TokenStream} from 'antlr4';
import {PositionInfo} from './PositionInfo';
import {SyntaxErrorReportable} from './SyntaxErrorReportable';
import {SyntaxErrorReportableSupport} from './SyntaxErrorReportableSupport';

export abstract class AbstractParser extends Parser implements SyntaxErrorReportable {
	private readonly _reportableSupport = new SyntaxErrorReportableSupport(this);

	protected constructor(input: TokenStream) {
		super(input);
	}

	// SyntaxErrorReportable
	protected get reportableSupport(): SyntaxErrorReportableSupport {
		return this._reportableSupport;
	}

	require(condition: boolean, msg: string, offset?: number | [number, number] | boolean, toAttachPositionInfo?: boolean): void {
		this.reportableSupport.require(condition, msg, offset, toAttachPositionInfo);
	}

	throwSyntaxError(msg: string, offset: number | [number, number], toAttachPositionInfo: boolean): void {
		this.reportableSupport.throwSyntaxError(msg, offset, toAttachPositionInfo);
	}

	abstract get syntaxErrorSource(): number;

	genPositionInfo(offset: number | [number, number]): PositionInfo {
		return this.reportableSupport.genPositionInfo(offset);
	}

	abstract get errorLine(): number;

	abstract get errorColumn(): number;
}
