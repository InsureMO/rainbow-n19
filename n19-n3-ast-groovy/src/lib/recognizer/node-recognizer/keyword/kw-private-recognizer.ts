import {TokenId} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';

export class KwPrivateRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PRIVATE;
	}
}
