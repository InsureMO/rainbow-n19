import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers, AstNodeCaptorDescription} from './captor';
import {Char} from './types';

export abstract class AbstractSingleCharCaptor extends AbstractAstNodeCaptor {
	private readonly _singleChar: Char;

	constructor(char: Char) {
		super();
		this._singleChar = char;
	}

	protected singleChar(): Char {
		return this._singleChar;
	}

	checkers(): AstNodeCaptorCheckers {
		return [this._singleChar];
	}

	protected abstract getTokenNature(): [TokenId, TokenType];

	visit(char: Char, offset: number, tokenizer: AstTokenizer): void {
		const [tokenId, tokenType] = this.getTokenNature();
		this.createAndAppendToAst(tokenizer, {tokenId, tokenType, text: char, startOffset: offset});
		tokenizer.moveCursorTo(offset + 1);
	}

	describe(): AstNodeCaptorDescription {
		const [tokenId, tokenType] = this.getTokenNature();
		return {
			text: `\`${this._singleChar}\``,
			tokenId,
			tokenType,
			rule: 'Exactly match.'
		};
	}
}
