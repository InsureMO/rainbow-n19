import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer, RehydrateFunc} from '../abstract';
import {RecognizeRehydration} from '../shared';

export class KwNonSealedRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.NON_SEALED;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateNonSealedTo3PartsWhenKeywordNotSupported,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}
}
