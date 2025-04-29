import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractRecognizer} from './abstract-recognizer';

/**
 * If the current token is in a String context, it degenerates into a chars node.
 * If it is not in a String context, the processing continues.
 */
export abstract class AbstractInStringRecognizer extends AbstractRecognizer {
	protected abstract doRecognize(recognition: AstRecognition): number;

	recognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenId = currentParent.tokenId;

		if ([
			TokenId.StringLiteral, TokenId.GStringLiteral,
			TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral
		].includes(currentParentTokenId)) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return nodeIndex + 1;
		} else {
			return this.doRecognize(recognition);
		}
	}
}
