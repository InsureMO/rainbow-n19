import {TokenId, TokenType} from '../../tokens';
import {AstRecognition} from '../types';
import {AbstractSceneBasedRecognizer} from './abstract-scene-based-recognizer';

export class OpMultipleRecognizer extends AbstractSceneBasedRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.Multiple;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;
		const currentParent = astRecognizer.getCurrentParent();
		if (currentParent.tokenId === TokenId.ImportDeclaration) {
			node.replaceTokenNature(TokenId.ImportAllMark, TokenType.Mark);
		}
		astRecognizer.appendAsLeaf(node, true);
		return nodeIndex + 1;
	}
}