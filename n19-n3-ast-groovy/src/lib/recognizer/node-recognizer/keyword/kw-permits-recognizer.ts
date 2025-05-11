import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer, RehydrateFunc} from '../abstract';
import {RecognizeRehydration} from '../shared';

export class KwPermitsRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.PERMITS;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenKeywordSealedNotSupported,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}
}
