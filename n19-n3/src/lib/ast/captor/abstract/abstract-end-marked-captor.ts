import {Optional} from '@rainbow-n19/n2';
import {Char} from '../types';
import {AstChars, AstMarks} from '../util';
import {AbstractAstNodeCaptor} from './abstract-captor';

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

	/**
	 * check end mark is given chars.
	 * {@link endMark} is string of {@link chars}, so it can be ignored when passing parameters.
	 */
	protected checkEndMarkIsChars(char: Char, offset: number, chars: Array<Char>, endMark?: string): Optional<EndMark> {
		if (char !== chars[0]) {
			return (void 0);
		}

		for (let index = 1, count = chars.length; index < count; index++) {
			if (this.charAt(offset + index) !== chars[index]) {
				return (void 0);
			}
		}

		if (endMark != null) {
			return {endMark, startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + endMark.length};
		} else {
			return {
				endMark: chars.join(''),
				startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + chars.length
			};
		}
	}

	/**
	 * to check end mark is new line (/r, /n, /r/n)
	 */
	protected checkEndMarkIsNewLine(char: Char, offset: number): Optional<EndMark> {
		if (this.endOfLine(char)) {
			if (char === AstChars.CarriageReturn && this.charAt(offset + 1) === AstChars.NewLine) {
				// /r/n
				return {
					endMark: AstMarks.CarriageReturnNewLine,
					startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + 2
				};
			} else {
				// /r or /n
				return {endMark: char, startOffsetOfEndMark: offset, endOffsetOfEndMark: offset + 1};
			}
		} else {
			return (void 0);
		}
	}

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

