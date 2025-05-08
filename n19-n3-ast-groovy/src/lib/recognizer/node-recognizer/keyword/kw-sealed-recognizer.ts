import {TokenId} from '../../../tokens';
import {AbstractOneOfCscmfDeclarationRecognizer, RehydrateFunc} from '../abstract';
import {RecognizeRehydration} from '../shared';

export class KwSealedRecognizer extends AbstractOneOfCscmfDeclarationRecognizer {
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
