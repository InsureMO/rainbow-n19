import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractRehydratableRecognizer} from '../abstract';

export class OpMultipleRecognizer extends AbstractRehydratableRecognizer {
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