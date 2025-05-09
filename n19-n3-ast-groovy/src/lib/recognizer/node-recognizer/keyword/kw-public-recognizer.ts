import {TokenId} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';

export class KwPublicRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PUBLIC;
	}
}
