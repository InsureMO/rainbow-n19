import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class StaticBlockDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				// never happens, this node always be created as csscmf first, and change to this nature
				// therefore, the static keyword is already appended as child
				TokenId.STATIC,
				TokenId.LBrace, TokenId.StaticBlockBody
			)
			.TakeLBraceAs(TokenId.StaticBlockBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.StaticBlockBody);
	};
}
