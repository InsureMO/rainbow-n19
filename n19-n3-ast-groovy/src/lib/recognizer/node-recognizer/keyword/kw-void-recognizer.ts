import {TokenId} from '../../../tokens';
import {AbstractMethodDeclarationRecognizer} from '../abstract';

export class KwVoidRecognizer extends AbstractMethodDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.VOID;
	}
}
