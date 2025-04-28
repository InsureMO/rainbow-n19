import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

export abstract class AbstractSingleCharCaptor extends AbstractAstNodeCaptor {
	private readonly _singleChar: Char;

	constructor(char: Char, tokenizer: AstTokenizer) {
		super(tokenizer);
		this._singleChar = char;
	}

	protected singleChar(): Char {
		return this._singleChar;
	}

	checkers(): AstNodeCaptorCheckers {
		return [this._singleChar];
	}

	protected abstract getTokenNature(): [TokenId, TokenType];

	visit(char: Char, offset: number): void {
		const [tokenId, tokenType] = this.getTokenNature();
		this.createAndAppendToAst({tokenId, tokenType, text: char, startOffset: offset});
		this.moveCursorTo(offset + 1);
	}
}
