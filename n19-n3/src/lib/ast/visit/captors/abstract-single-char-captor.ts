import {AstNode, AstNodeConstructor} from '../../ast-node';
import {AstNodeCaptor} from '../captor';
import {Char} from '../types';
import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';

export abstract class AbstractSingleCharCaptor<N extends AstNode> extends AbstractCharSequenceCaptor {
	protected abstract get char(): Char;

	/**
	 * default perform no check and returns true
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected checkFollowingChars(_offset: number): boolean {
		return true;
	}

	attempt(char: Char, offset: number): AstNodeCaptor | boolean {
		return char === this.char && this.checkFollowingChars(offset);
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(this.getAstNodeConstructor(), {text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
		return true;
	}
}
