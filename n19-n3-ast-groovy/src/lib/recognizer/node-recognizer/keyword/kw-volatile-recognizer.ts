import {TokenId} from '../../../tokens';
import {AbstractFieldDeclarationRecognizer} from '../abstract';

export class KwVolatileRecognizer extends AbstractFieldDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.VOLATILE;
	}
}
