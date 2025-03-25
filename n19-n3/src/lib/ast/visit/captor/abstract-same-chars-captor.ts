import {AstNode, AstNodeConstructor} from '../../ast-node';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

/**
 * Capture all the next characters that are the same with the given one, and create ast node.
 */
export abstract class AbstractSameCharsCaptor<N extends AstNode> extends AbstractCharSequenceCaptor {
	protected abstract get leadChar(): Char;

	attempt(char: Char): boolean {
		return char === this.leadChar;
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

	visit(given: Char, offsetOfGiven: number): boolean {
		// starts from next character
		const startOffset = offsetOfGiven + 1;
		let offset = startOffset;
		let c = this.charAt(offset);
		while (c === given) {
			offset += 1;
			c = this.charAt(offset);
		}

		// character at current cursor + offset is first character not whitespace
		// from character at current cursor
		if (offset === startOffset) {
			// no more whitespace determined
			// keep cursor, create node and join to ast
			this.createAndAppendToAst(this.getAstNodeConstructor(), {
				text: given, startOffset: offsetOfGiven
			});
		} else {
			// gather all whitespaces, move cursor, create node and join to ast
			this.createAndAppendToAst(this.getAstNodeConstructor(), {
				text: this.sliceText(offsetOfGiven, offset), startOffset: offsetOfGiven
			});
		}

		// move cursor
		this.moveCursorTo(offset);
		return true;
	}
}