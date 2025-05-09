import {TokenId} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';

export class KwFinalRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.FINAL;
	}
}
