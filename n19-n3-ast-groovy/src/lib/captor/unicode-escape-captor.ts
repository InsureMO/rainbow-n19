import {TokenId, TokenType} from '../tokens';
import {AbstractMultipleCharsCaptor} from './abstract-multiple-chars-captor';
import {AstNodeCaptorCheckers} from './captor';
import {isHexadecimalNumeric} from './captor-func-checkers';

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
}
