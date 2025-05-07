import {Optional} from '@rainbow-n19/n3-ast';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognition} from '../../types';
import {AbstractRehydratableRecognizer, RehydrateFunc} from '../abstract';

export class KwRecordRecognizer extends AbstractRehydratableRecognizer {
	acceptTokenId(): TokenId {
		return TokenId.RECORD;
	}

	/**
	 * node is rehydrated, and not append to parent, waiting for identifier recognizer to decide
	 */
	protected static rehydrateToIdentifierWhenKeywordNotSupported(recognition: AstRecognition): Optional<number> {
		const {node, nodeIndex, astRecognizer} = recognition;
		if (astRecognizer.isRecordClassSupported) {
			return (void 0);
		}

		node.replaceTokenNature(TokenId.Identifier, TokenType.Identifier);
		return nodeIndex;
	}

	protected getRehydrateFunctions(): Array<RehydrateFunc> {
		return [
			KwRecordRecognizer.rehydrateToCharsWhenInString,
			KwRecordRecognizer.rehydrateToIdentifierWhenKeywordNotSupported,
			KwRecordRecognizer.rehydrateToIdentifierWhenAfterDotDirectly
		];
	}

	protected doRecognize(recognition: AstRecognition): number {
		const {node, nodeIndex, astRecognizer} = recognition;

		astRecognizer.appendAsLeaf(node, true);

		return nodeIndex + 1;
	}
}
