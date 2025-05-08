import {TokenId} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';

/**
 * keyword def could be in front of a cscmf(method or field) declaration,
 * TODO or start a variable declaration
 */
export class KwDefRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DEF;
	}
}
