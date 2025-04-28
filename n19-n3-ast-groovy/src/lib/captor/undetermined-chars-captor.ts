import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstNodeCaptorCheckers} from './index';
import {Char} from './types';

/**
 * accept any char, so must be the last captor.
 */
export class UndeterminedCharsCaptor extends AbstractAstNodeCaptor {
	checkers(): AstNodeCaptorCheckers {
		return [];
	}

	visit(char: Char, offset: number): void {
		this.createAndAppendToAst({
			tokenId: TokenId.UndeterminedChars, tokenType: TokenType.UndeterminedChars,
			text: char, startOffset: offset
		});
		this.moveCursorTo(offset + 1);
	}
}
