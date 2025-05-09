import {TokenId} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';

/**
 * keyword static could be in front of a type declaration or static block,
 * TODO or after import keyword in import declaration
 */
export class KwStaticRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.STATIC;
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		const currentParent = astRecognizer.getCurrentParent();
		const {tokenId: currentParentTokenId, tokenType: currentParentTokenType} = currentParent;
		if (currentParentTokenId === TokenId.ImportDeclaration) {
			astRecognizer.appendAsLeaf(node, false);
			return nodeIndex + 1;
		} else {
			return super.doRecognize(recognition);
		}
	}
}
