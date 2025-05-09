import {TokenId} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';

export class KwPrivateRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PRIVATE;
	}
}
