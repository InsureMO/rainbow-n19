import {AstNode, AstNodeConstructor} from '../../ast-node';
import {Char} from '../../captor';
import {AstNodeCaptor} from '../../captor/captor';
import {AstVisitor} from '../visitor';
import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';

export abstract class AbstractMultipleCharsCaptor<N extends AstNode> extends AbstractAstNodeCaptor {
	private readonly _chars: string;
	private readonly _charsArray: Array<Char>;
	private readonly _charsLength: number;

	protected constructor(chars: string, astVisitor: AstVisitor) {
		super(astVisitor);
		this._chars = chars;
		this._charsArray = chars.split('');
		this._charsLength = chars.length;
	}

	protected get chars(): string {
		return this._chars;
	}

	protected get charsArray(): Array<Char> {
		return this._charsArray;
	}

	protected get charsLength(): number {
		return this._charsLength;
	}

	/**
	 * default perform no check and returns true
	 * offset is offset of the next char after chars
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected checkFollowingChars(_offset: number): boolean {
		return true;
	}

	attempt(char: Char, offset: number): AstNodeCaptor | boolean {
		const chars = this.charsArray;
		return chars[0] === char
			&& chars.slice(1).every((c, i) => this.charAt(offset + i + 1) === c)
			&& this.checkFollowingChars(offset + this.charsLength);
	}

	protected abstract getAstNodeConstructor(): AstNodeConstructor<N>;

	visit(char: Char, offset: number): boolean {
		this.createAndAppendToAst(this.getAstNodeConstructor(), {text: this.chars, startOffset: offset});
		this.moveCursorTo(offset + this.charsLength);
		return true;
	}
}
