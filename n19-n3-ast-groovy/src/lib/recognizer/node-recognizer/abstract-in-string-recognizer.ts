import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractSceneBasedRecognizer, SceneBasedRecognizeFunc} from './abstract-scene-based-recognizer';

/**
 * If the current token is in a String context, it degenerates into a chars node.
 * If it is not in a String context, the processing continues.
 */
export abstract class AbstractInStringRecognizer extends AbstractSceneBasedRecognizer {
	protected static tryToRecognizeAsInString(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const currentParentTokenType = currentParent.tokenType;
		if (currentParentTokenType === TokenType.StringLiteral) {
			node.replaceTokenNature(TokenId.Chars, TokenType.Chars);
			return nodeIndex + 1;
		} else {
			return (void 0);
		}
	}

	protected getSceneBasedRecognizers(): Array<SceneBasedRecognizeFunc> {
		return [AbstractInStringRecognizer.tryToRecognizeAsInString];
	}
}
