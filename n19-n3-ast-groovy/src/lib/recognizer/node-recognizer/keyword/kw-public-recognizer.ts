import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';

export class KwPublicRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PUBLIC;
	}
}
