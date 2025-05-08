import {TokenId} from '../../../tokens';
import {AbstractFieldDeclarationRecognizer} from '../abstract';

export class KwTransientRecognizer extends AbstractFieldDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.TRANSIENT;
	}
}
