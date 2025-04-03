import {Optional} from '@rainbow-n19/n2';
import {Char} from '../../captor';
import {AstChars, AstMarks} from '../chars';
import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';

export interface EndMark {
	endMark?: string;
	startOffsetOfEndMark?: number;
	endOffsetOfEndMark?: number;
}

export interface ContentAndEnd extends EndMark {
	content: string;
	startOffsetOfContent: number;
	endOffsetOfContent: number;
	endOffsetOfAll: number;
}

export abstract class AbstractEndMarkedCaptor extends AbstractAstNodeCaptor {
	/**
	 * check end mark by given char and offset.
	 */
	protected abstract checkEndMark(char: Char, offset: number): Optional<EndMark>;

	protected contentAndEnd(startOffset: number): ContentAndEnd {
		let charOffset = startOffset;
		let char = this.charAt(charOffset);
		do {
			if (char == null) {
				// reach end of document, no end mark detected
				return {
					content: this.sliceText(startOffset, charOffset),
					startOffsetOfContent: startOffset, endOffsetOfContent: charOffset,
					endOffsetOfAll: charOffset
				};
			}
			const endMark = this.checkEndMark(char, charOffset);
			if (endMark != null) {
				return {
					content: this.sliceText(startOffset, charOffset),
					startOffsetOfContent: startOffset, endOffsetOfContent: charOffset,
					...endMark,
					endOffsetOfAll: endMark.endOffsetOfEndMark
				};
			}
			// move to next char
			charOffset = charOffset + 1;
			char = this.charAt(charOffset);
			// eslint-disable-next-line no-constant-condition
		} while (true);
	}
}

export abstract class AbstractEndMarkedWithNewLineCaptor extends AbstractEndMarkedCaptor {
	protected checkEndMark(char: Char, offset: number): Optional<EndMark> {
		if (this.endOfLine(char)) {
			if (char === AstChars.CarriageReturn && this.charAt(offset + 1) === AstChars.NewLine) {
				return {
					endMark: AstMarks.CarriageReturnNewLine,
					startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + 2
				};
			} else {
				return {
					endMark: char, startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + 1
				};
			}
		} else {
			return (void 0);
		}
	}
}
