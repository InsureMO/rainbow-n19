import {NewLineNode} from '../../node';
import {AstChars, AstMarks} from '../chars';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

/**
 * no need to capture next char, just create node by given char itself
 */
export class NewLineStartsWithNewLineCaptor extends AbstractCharSequenceCaptor {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attempt(char: Char, _offset: number): boolean {
		return char === AstChars.NewLine;
	}

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(NewLineNode, {text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
		this.moveToNextLine();
		return true;
	}
}

/**
 * try to capture next "\n", and create node by "\r\n" or "\r".
 */
export class NewLineStartsWithCarriageReturnCaptor extends AbstractCharSequenceCaptor {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attempt(char: Char, _offset: number): boolean {
		return char == AstChars.CarriageReturn;
	}

	visit(char: Char, offset: number): boolean {
		const nextOffset = offset + 1;
		if (this.charAt(nextOffset) == AstChars.NewLine) {
			this.createAndAppendToAst(NewLineNode, {text: AstMarks.CarriageReturnNewLine, startOffset: offset});
			this.moveCursorTo(nextOffset + 1);
		} else {
			this.createAndAppendToAst(NewLineNode, {text: char, startOffset: offset});
			this.moveCursorTo(nextOffset);
		}
		this.moveToNextLine();
		return true;
	}
}
