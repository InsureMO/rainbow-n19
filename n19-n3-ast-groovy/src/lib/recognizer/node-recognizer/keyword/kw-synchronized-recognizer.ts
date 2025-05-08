import {TokenId} from '../../../tokens';
import {AbstractMethodDeclarationRecognizer} from '../abstract';

/**
 * keyword synchronized could be in front of a method declaration,
 * TODO or start a synchronized logic block
 */
export class KwSynchronizedRecognizer extends AbstractMethodDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.SYNCHRONIZED;
	}
}
