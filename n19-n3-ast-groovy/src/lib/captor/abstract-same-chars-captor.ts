import {AbstractSingleCharCaptor} from './abstract-single-char-captor';
import {AstTokenizer} from './ast-tokenizer';
import {Char} from './types';

/**
 * Capture all the next characters that are the same with the given one, and create ast node.
 * Note that this Captor will only perform capturing based on the specified single character by {@link AbstractSingleCharCaptor#singleChar}.
 */
export abstract class AbstractSameCharsCaptor extends AbstractSingleCharCaptor {
	visit(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		// starts from next character
		const startOffset = offsetOfGiven + 1;
		let offset = startOffset;
		let c = tokenizer.charAt(offset);
		while (c === given) {
			offset += 1;
			c = tokenizer.charAt(offset);
		}

		const [tokenId, tokenType] = this.getTokenNature();
		if (offset === startOffset) {
			// no more same character determined
			this.createAndAppendToAst(tokenizer, {
				tokenId, tokenType, text: given, startOffset: offsetOfGiven
			});
		} else {
			// gather all same characters
			this.createAndAppendToAst(tokenizer, {
				tokenId, tokenType,
				text: this.sliceText(tokenizer, offsetOfGiven, offset), startOffset: offsetOfGiven
			});
		}

		// move cursor
		tokenizer.moveCursorTo(offset);
	}
}
