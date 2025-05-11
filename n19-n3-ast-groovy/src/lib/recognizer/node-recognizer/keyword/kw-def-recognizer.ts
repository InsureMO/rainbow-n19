import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';

/**
 * keyword def could be in front of a csscmf (method or field only) declaration,
 * TODO or start a variable declaration
 */
export class KwDefRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DEF;
	}
}
