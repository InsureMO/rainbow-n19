import {TokenId, TokenType} from '../tokens';
import {AbstractMultipleCharsCaptor} from './abstract-multiple-chars-captor';
import {AbstractSingleCharCaptor} from './abstract-single-char-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorDescription} from './captor';
import {Char} from './types';
import {AstChars, AstMarks} from './util';

export class Newline1CharCaptor extends AbstractSingleCharCaptor {
	constructor() {
		super(AstChars.NewLine);
	}

	protected getTokenNature(): [TokenId, TokenType] {
		return [TokenId.NewLine, TokenType.NewLine];
	}

	visit(char: Char, offset: number, tokenizer: AstTokenizer) {
		super.visit(char, offset, tokenizer);
		tokenizer.moveToNextLine();
	}
}

export class Newline2CharsCaptor extends AbstractMultipleCharsCaptor {
	constructor() {
		super(AstMarks.CarriageReturnNewLine);
	}

	protected getTokenNature(): [TokenId, TokenType] {
		return [TokenId.NewLine, TokenType.NewLine];
	}

	visit(char: Char, offset: number, tokenizer: AstTokenizer) {
		super.visit(char, offset, tokenizer);
		tokenizer.moveToNextLine();
	}

	describe(): AstNodeCaptorDescription {
		return {
			text: '`\\r\\n`',
			tokenId: TokenId.NewLine,
			tokenType: TokenType.NewLine,
			rule: 'Exactly match.'
		};
	}
}
