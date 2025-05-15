import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class SynchronizedBlockDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.SynchronizedBlockBody)
			.TakeLBraceAs(TokenId.SynchronizedBlockBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.SynchronizedBlockBody);
	};
}
