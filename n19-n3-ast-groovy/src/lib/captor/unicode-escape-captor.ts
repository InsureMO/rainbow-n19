import {TokenId, TokenType} from '../tokens';
import {AbstractMultipleCharsCaptor} from './abstract-multiple-chars-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {isHexadecimalNumeric} from './captor-func-checkers';
import {Char} from './types';

export class LtUnicodeEscapeCaptor extends AbstractMultipleCharsCaptor {
	private readonly _checker: AstNodeCaptorCheckers;

	constructor() {
		super('\\u');
		this._checker = [...this.charsArray, isHexadecimalNumeric, isHexadecimalNumeric, isHexadecimalNumeric, isHexadecimalNumeric];
	}

	protected get keyword(): string {
		return this.chars;
	}

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
	}

	protected getTokenNature(): [TokenId, TokenType] {
		return [TokenId.StringUnicodeEscape, TokenType.StringLiteral];
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(_char: Char, offset: number, tokenizer: AstTokenizer): void {
		const [tokenId, tokenType] = this.getTokenNature();
		const text = [
			this.chars,
			tokenizer.charAt(offset + 2),
			tokenizer.charAt(offset + 3),
			tokenizer.charAt(offset + 4),
			tokenizer.charAt(offset + 5)
		].join('');
		this.createAndAppendToAst(tokenizer, {tokenId, tokenType, text, startOffset: offset});
		tokenizer.moveCursorTo(offset + 6);
	}
}
