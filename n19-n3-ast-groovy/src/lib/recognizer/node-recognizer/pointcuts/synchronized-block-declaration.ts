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
			.AcceptTokenIdsAsChild(
				// never happens, this node always be created as csscmf first, and change to this nature
				// therefore, the synchronized keyword is already appended as child
				TokenId.SYNCHRONIZED,
				// the left parenthesis is same as synchronized keyword, already appended as child
				TokenId.LParen, TokenId.ParenBlock,
				TokenId.LBrace, TokenId.SynchronizedBlockBody
			)
			.TakeLBraceAs(TokenId.SynchronizedBlockBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.SynchronizedBlockBody);
	};
}
