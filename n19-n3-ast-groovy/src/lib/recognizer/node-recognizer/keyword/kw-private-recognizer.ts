import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';

export class KwPrivateRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PRIVATE;
	}
}
