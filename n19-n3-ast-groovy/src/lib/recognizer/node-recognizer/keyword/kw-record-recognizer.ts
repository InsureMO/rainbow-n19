import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AbstractCsscmfDeclarationRecognizer, RehydrateFunc} from '../abstract';
import {NodePointcuts} from '../pointcuts';
import {RecognizeRehydration} from '../shared';

export class KwRecordRecognizer extends AbstractCsscmfDeclarationRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.RECORD;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			RecognizeRehydration.rehydrateToCharsWhenInString,
			RecognizeRehydration.rehydrateToIdentifierWhenKeywordRecordNotSupported,
			RecognizeRehydration.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected getDeclarationTokenNature(): [TokenId, TokenType] {
		return [TokenId.RecordClassDeclaration, TokenType.TypeDeclaration];
	}

	protected setDeclarationNodeExtraAttrs(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Record.extra(node);
	}
}
