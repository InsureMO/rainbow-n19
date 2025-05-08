import {TokenId} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';

export class KwProtectedRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PROTECTED;
	}
}
