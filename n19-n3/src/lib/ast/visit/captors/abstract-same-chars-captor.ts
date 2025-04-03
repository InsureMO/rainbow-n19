import {AstNode, AstNodeConstructor} from '../../ast-node';
import {Char} from '../../captor';
import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';

/**
 * Capture all the next characters that are the same with the given one, and create ast node.
 */
export abstract class AbstractSameCharsCaptor<N extends AstNode> extends AbstractAstNodeCaptor {
	protected abstract get leadChar(): Char;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	attempt(char: Char, _offset: number): boolean {
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
