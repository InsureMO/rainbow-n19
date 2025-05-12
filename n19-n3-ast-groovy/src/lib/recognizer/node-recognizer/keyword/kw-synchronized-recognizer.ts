import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer, PreservableCheckFunc} from '../abstract';
import {RecognizePreservation} from '../shared';

/**
 * keyword synchronized could be in front of a method declaration or start a synchronized logic block.
 */
export class KwSynchronizedRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.SYNCHRONIZED;
	}

	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCsscmfDeclaration
		];
	}
}
