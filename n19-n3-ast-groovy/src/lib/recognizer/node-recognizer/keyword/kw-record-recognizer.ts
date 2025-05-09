import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AbstractTypeDeclarationRecognizer, RehydrateFunc} from '../abstract';
import {NodePointcuts, RecognizeRehydration} from '../shared';

export class KwRecordRecognizer extends AbstractTypeDeclarationRecognizer {
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

	protected getDeclarationTokenId(): TokenId {
		return TokenId.RecordClassDeclaration;
	}

	protected extra(node: GroovyAstNode): void {
		NodePointcuts.TypeDeclaration.Record.extra(node);
	}
}
