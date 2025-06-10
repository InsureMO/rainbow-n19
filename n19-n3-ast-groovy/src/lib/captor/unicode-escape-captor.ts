import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {isHexadecimalNumeric} from './captor-func-checkers';
import {Char} from './types';

export class LtUnicodeEscapeCaptor extends AbstractAstNodeCaptor {
	private readonly _checker: AstNodeCaptorCheckers;

	constructor() {
		super();
		this._checker = ['\\', 'u', isHexadecimalNumeric, isHexadecimalNumeric, isHexadecimalNumeric, isHexadecimalNumeric];
	}

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(_char: Char, offset: number, tokenizer: AstTokenizer): void {
		const text = [
			'\\u',
			tokenizer.charAt(offset + 2),
			tokenizer.charAt(offset + 3),
			tokenizer.charAt(offset + 4),
			tokenizer.charAt(offset + 5)
		].join('');
		this.createAndAppendToAst(tokenizer, {
			tokenId: TokenId.StringUnicodeEscape, tokenType: TokenType.Mark, text, startOffset: offset
		});
		tokenizer.moveCursorTo(offset + 6);
	}
}
