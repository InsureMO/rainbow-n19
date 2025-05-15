import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class ImportDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			// newline and sl comments is not allowed
			.DisableAcceptAll5BaseNodesAsChild()
			.AcceptTokenIdsAsChild(
				TokenId.STATIC, TokenId.Identifier, TokenId.Dot, TokenId.AS,
				// alias of TokenId.Multiple, only in import declaration
				TokenId.ImportAllMark,
				TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment)
			.EndWithSemicolon();
	};
}
