import {UndeterminedCharsNode} from '../../node';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

/**
 * accept any char, so must be the last captor.
 */
export class UndeterminedTextCaptor extends AbstractCharSequenceCaptor {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attempt(_char: Char): boolean {
		return true;
	}

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(UndeterminedCharsNode, {text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
		return true;
	}
}
