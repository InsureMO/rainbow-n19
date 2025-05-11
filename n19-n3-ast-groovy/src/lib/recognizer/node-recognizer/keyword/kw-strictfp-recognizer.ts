import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer} from '../abstract';

export class KwStrictfpRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.STRICTFP;
	}
}
