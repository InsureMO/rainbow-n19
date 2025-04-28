import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

export abstract class AbstractMultipleCharsCaptor extends AbstractAstNodeCaptor {
	private readonly _chars: string;
	private readonly _charsArray: Array<Char>;
	private readonly _charsLength: number;

	protected constructor(chars: string, tokenizer: AstTokenizer) {
		super(tokenizer);
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

	checkers(): AstNodeCaptorCheckers {
		return this._charsArray;
	}

	protected abstract getTokenNature(): [TokenId, TokenType];

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(_char: Char, offset: number): void {
		const [tokenId, tokenType] = this.getTokenNature();
		this.createAndAppendToAst({tokenId, tokenType, text: this.chars, startOffset: offset});
		this.moveCursorTo(offset + this.charsLength);
	}
}
