import {AstNode, AstNodeConstructor} from '../../ast-node';
import {Char} from '../../captor';
import {AstNodeCaptor} from '../../captor/captor';
import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';

export abstract class AbstractSingleCharCaptor<N extends AstNode> extends AbstractAstNodeCaptor {
	protected abstract get char(): Char;

	/**
	 * default perform no check and returns true.
	 * offset is the offset of the next char
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected checkFollowingChars(_offset: number): boolean {
		return true;
	}

	attempt(char: Char, offset: number): AstNodeCaptor | boolean {
		return char === this.char && this.checkFollowingChars(offset + 1);
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(this.getAstNodeConstructor(), {text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
		return true;
	}
}
