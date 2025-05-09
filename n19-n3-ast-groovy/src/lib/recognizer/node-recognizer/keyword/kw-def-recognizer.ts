import {TokenId} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';

/**
 * keyword def could be in front of a cscmf(method or field) declaration,
 * TODO or start a variable declaration
 */
export class KwDefRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DEF;
	}
}
