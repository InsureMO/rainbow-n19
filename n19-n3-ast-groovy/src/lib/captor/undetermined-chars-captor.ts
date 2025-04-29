import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {Char} from './types';

/**
 * accept any char, so must be the last captor.
 */
export class UndeterminedCharsCaptor extends AbstractAstNodeCaptor {
	checkers(): AstNodeCaptorCheckers {
		return [];
	}

	visit(char: Char, offset: number, tokenizer: AstTokenizer): void {
		this.createAndAppendToAst(tokenizer, {
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: char, startOffset: offset
		});
		tokenizer.moveCursorTo(offset + 1);
	}
}
