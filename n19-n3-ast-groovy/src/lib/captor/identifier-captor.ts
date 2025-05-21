import {TokenId, TokenType} from '../tokens';
import {AbstractAstNodeCaptor} from './abstract-captor';
import {AstTokenizer} from './ast-tokenizer';
import {AstNodeCaptorCheckers} from './captor';
import {isJavaIdentifierStartAndNotIdentifierIgnorable} from './captor-func-checkers';
import {Character} from './character';
import {Char} from './types';

/**
 * accept any char, so must be the last captor.
 */
export class IdentifierCaptor extends AbstractAstNodeCaptor {
	checkers(): AstNodeCaptorCheckers {
		return isJavaIdentifierStartAndNotIdentifierIgnorable;
	}

	visit(given: Char, offsetOfGiven: number, tokenizer: AstTokenizer): void {
		// starts from next character
		const startOffset = offsetOfGiven + 1;
		let offset = startOffset;
		let c = tokenizer.charAt(offset);
		while (c != null && Character.isJavaIdentifierPartAndNotIdentifierIgnorable(c.codePointAt(0))) {
			offset += 1;
			c = tokenizer.charAt(offset);
		}

		if (offset === startOffset) {
			// no more char allowed as java identifier part found
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
				text: given, startOffset: offsetOfGiven
			});
		} else {
			// gather all consecutive characters that are allowed to be part of java identifier.
			this.createAndAppendToAst(tokenizer, {
				tokenId: TokenId.Identifier, tokenType: TokenType.Identifier,
				text: this.sliceText(tokenizer, offsetOfGiven, offset), startOffset: offsetOfGiven
			});
		}

		// move cursor
		tokenizer.moveCursorTo(offset);
	}
}
