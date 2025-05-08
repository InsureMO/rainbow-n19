import {TokenId} from '../../../tokens';
import {AbstractMethodDeclarationRecognizer} from '../abstract';

/**
 * keyword default could be in front of a method declaration in interface,
 * TODO or start a default route of switch declaration
 */
export class KwDefaultRecognizer extends AbstractMethodDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.DEFAULT;
	}
}
