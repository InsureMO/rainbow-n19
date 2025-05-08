import {TokenId} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';

export class KwStaticRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.STATIC;
	}
}
