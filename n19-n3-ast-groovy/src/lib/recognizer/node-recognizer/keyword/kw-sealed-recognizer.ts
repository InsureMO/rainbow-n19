import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer, RehydrateFunc} from '../abstract';
import {RecognizeRehydration} from '../shared';

export class KwSealedRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.SEALED;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenKeywordSealedNotSupported,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}
}
