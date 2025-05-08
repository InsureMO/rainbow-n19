import {TokenId} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer} from '../abstract';

export class KwStrictfpRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.STRICTFP;
	}
}
