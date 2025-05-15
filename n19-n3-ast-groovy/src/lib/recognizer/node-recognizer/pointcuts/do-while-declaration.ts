import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class DoWhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.DoWhileBody, TokenId.WHILE, TokenId.ParenBlock)
			.TakeLBraceAs(TokenId.DoWhileBody)
			.EndWithSemicolon()
			// TODO need to check the paren block is directly after while keyword?
			.CloseOnChildWithTokenClosed(TokenId.ParenBlock);
	};
}
