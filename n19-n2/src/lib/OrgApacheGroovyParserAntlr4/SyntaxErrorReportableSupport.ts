import {GroovySyntaxError} from './GroovySyntaxError';
import {PositionInfo} from './PositionInfo';
import {SyntaxErrorReportable} from './SyntaxErrorReportable';

export class SyntaxErrorReportableSupport {
	private readonly _reportable: SyntaxErrorReportable;

	constructor(reportable: SyntaxErrorReportable) {
		this._reportable = reportable;
	}

	require(condition: boolean, msg: string, offset?: number | [number, number] | boolean, toAttachPositionInfo?: boolean): void {
		if (condition) {
			return;
		}

		const useOffsetAsToAttachPositionInfo = typeof offset === 'boolean';
		const offsets: [number, number] = (offset == null || useOffsetAsToAttachPositionInfo)
			? [0, 0]
			: (typeof offset === 'number' ? [0, offset] : offset);
		const attachPositionInfo = useOffsetAsToAttachPositionInfo ? (offset as boolean) : (toAttachPositionInfo ?? false);

		this.throwSyntaxError(msg, offsets, attachPositionInfo);
	}

	throwSyntaxError(msg: string, offset: number | [number, number], toAttachPositionInfo: boolean): void {
		const positionInfo = this.genPositionInfo(offset);
		throw new GroovySyntaxError(
			msg + (toAttachPositionInfo ? positionInfo.toString() : ''),
			this._reportable.syntaxErrorSource, positionInfo.line, positionInfo.column);
	}

	genPositionInfo(offset: number | [number, number]): PositionInfo {
		let offset1: number;
		let offset2: number;
		if (typeof offset === 'number') {
			offset1 = 0;
			offset2 = offset;
		} else {
			offset1 = offset[0];
			offset2 = offset[1];
		}
		return new PositionInfo(this._reportable.errorLine + offset1, this._reportable.errorColumn + offset2);
	}
}
