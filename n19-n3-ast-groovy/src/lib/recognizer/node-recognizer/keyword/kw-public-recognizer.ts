import {TokenId} from '../../../tokens';
import {AbstractModifierRecognizer} from '../abstract';

export class KwPublicRecognizer extends AbstractModifierRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PUBLIC;
	}
}
