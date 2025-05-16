import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class AnnotationDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			// newline and sl comments is not allowed
			.DisableAcceptAll5BaseNodesAsChild()
			// TODO sl comments and new line are allowed before paren block
			.AcceptTokenIdsAsChild(
				TokenId.Identifier, TokenId.Dot,
				TokenId.Whitespaces, TokenId.Tabs, TokenId.MultipleLinesComment,
				TokenId.ParenBlock)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ParenBlock);
	};
}
