import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers, AstNodeCaptorDescription} from './captor';
import {Char} from './types';

export abstract class AbstractMultipleCharsCaptor extends AbstractAstNodeCaptor {
	private readonly _chars: string;
	private readonly _charsArray: Array<Char>;
	private readonly _charsLength: number;

	protected constructor(chars: string) {
		super();
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
	visit(_char: Char, offset: number, tokenizer: AstTokenizer): void {
		const [tokenId, tokenType] = this.getTokenNature();
		this.createAndAppendToAst(tokenizer, {tokenId, tokenType, text: this.chars, startOffset: offset});
		tokenizer.moveCursorTo(offset + this.charsLength);
	}

	describe(): AstNodeCaptorDescription {
		const [tokenId, tokenType] = this.getTokenNature();
		return {
			text: `\`${this._chars}\``,
			tokenId,
			tokenType,
			rule: `Exactly match.`
		};
	}
}
