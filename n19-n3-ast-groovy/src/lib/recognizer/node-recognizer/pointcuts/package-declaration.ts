import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class PackageDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			// newline and sl comments is not allowed
			.DisableAcceptAll5BaseNodesAsChild()
			.AcceptTokenIdsAsChild(TokenId.PACKAGE, TokenId.Identifier, TokenId.Dot,
				TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment)
			.EndWithSemicolon();
	};
}
