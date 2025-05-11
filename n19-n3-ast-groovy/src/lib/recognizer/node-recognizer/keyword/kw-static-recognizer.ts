import {TokenId} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer, PreservableCheckFunc} from '../abstract';
import {RecognizePreservation} from '../shared';

/**
 * keyword static could be in front of a type declaration or static block,
 * or after import keyword in import declaration
 */
export class KwStaticRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.STATIC;
	}

	protected getPreservableCheckFunctions(): Array<PreservableCheckFunc> {
		return [
			RecognizePreservation.parentIsCscmfDeclaration,
			RecognizePreservation.parentIsTypeDeclaration,
			RecognizePreservation.parentIsImportDeclaration
		];
	}
}
