import {TokenId, TokenType} from '../tokens';
import {AbstractMultipleCharsCaptor} from './abstract-multiple-chars-captor';
import {AbstractSingleCharCaptor} from './abstract-single-char-captor';
import {AstTokenizer} from './ast-tokenizer';
import {Char} from './types';
import {AstChars, AstMarks} from './util';

export class Newline1CharCaptor extends AbstractSingleCharCaptor {
	constructor(tokenizer: AstTokenizer) {
		super(AstChars.NewLine, tokenizer);
	}

	protected getTokenNature(): [TokenId, TokenType] {
		return [TokenId.NewLine, TokenType.NewLine];
	}

	visit(char: Char, offset: number) {
		super.visit(char, offset);
		this.moveToNextLine();
	}
}

export class Newline2CharsCaptor extends AbstractMultipleCharsCaptor {
	constructor(tokenizer: AstTokenizer) {
		super(AstMarks.CarriageReturnNewLine, tokenizer);
	}

	protected getTokenNature(): [TokenId, TokenType] {
		return [TokenId.NewLine, TokenType.NewLine];
	}

	visit(char: Char, offset: number) {
		super.visit(char, offset);
		this.moveToNextLine();
	}
}
