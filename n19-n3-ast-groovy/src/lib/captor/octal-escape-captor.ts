import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {isOctalNumeric} from './captor-func-checkers';
import {Char} from './types';

export class LtOctalEscapeCaptor extends AbstractAstNodeCaptor {
	private readonly _checker: AstNodeCaptorCheckers;

	constructor() {
		super();
		this._checker = ['\\', isOctalNumeric];
	}

	checkers(): AstNodeCaptorCheckers {
		return this._checker;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	visit(_char: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		const parts = ['\\', tokenizer.charAt(offsetOfGiven + 1)];
		// starts from next character
		const char3 = tokenizer.charAt(offsetOfGiven + 2);
		if (isOctalNumeric(char3, tokenizer)) {
			parts.push(char3);
			const char4 = tokenizer.charAt(offsetOfGiven + 3);
			if (isOctalNumeric(char4, tokenizer)) {
				parts.push(char4);
			}
		}

		const text = parts.join('');
		this.createAndAppendToAst(tokenizer, {
			tokenId: TokenId.StringOctalEscape, tokenType: TokenType.Mark, text, startOffset: offsetOfGiven
		});
		tokenizer.moveCursorTo(offsetOfGiven + text.length);
	}
}
