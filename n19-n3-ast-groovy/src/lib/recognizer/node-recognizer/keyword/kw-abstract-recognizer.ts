import {TokenId} from '../../../tokens';
import {AbstractCscmfDeclarationRecognizer} from '../abstract';

export class KwAbstractRecognizer extends AbstractCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ABSTRACT;
	}
}
