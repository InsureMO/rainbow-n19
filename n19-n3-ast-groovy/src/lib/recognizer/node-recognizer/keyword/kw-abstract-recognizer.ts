import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';

export class KwAbstractRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.ABSTRACT;
	}
}
