import {AstNode, AstNodeConstructor} from '@rainbow-n19/n3-ast';
import {Char} from '../types';
import {AbstractSingleCharCaptor} from './abstract-single-char-captor';

/**
 * Capture all the next characters that are the same with the given one, and create ast node.
 * Note that this Captor will only perform capturing based on the specified single character by {@link AbstractSingleCharCaptor#singleChar}.
 */
export abstract class AbstractSameCharsCaptor<N extends AstNode> extends AbstractSingleCharCaptor<N> {
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

		if (offset === startOffset) {
			// no more same character determined
			this.createAndAppendToAst(this.getAstNodeConstructor(), {text: given, startOffset: offsetOfGiven});
		} else {
			// gather all same characters
			this.createAndAppendToAst(this.getAstNodeConstructor(), {
				text: this.sliceText(offsetOfGiven, offset), startOffset: offsetOfGiven
			});
		}

		// move cursor
		this.moveCursorTo(offset);
		return true;
	}
}
