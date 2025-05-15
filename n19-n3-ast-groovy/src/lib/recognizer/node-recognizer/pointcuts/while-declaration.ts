import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class WhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.WhileBody)
			.TakeLBraceAs(TokenId.WhileBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.WhileBody);
	};
}