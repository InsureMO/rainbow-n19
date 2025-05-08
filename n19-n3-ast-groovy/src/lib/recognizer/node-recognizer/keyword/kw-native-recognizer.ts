import {TokenId} from '../../../tokens';
import {AbstractMethodDeclarationRecognizer} from '../abstract';

export class KwNativeRecognizer extends AbstractMethodDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.NATIVE;
	}
}
