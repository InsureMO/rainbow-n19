import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class ForDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.LBrace, TokenId.ForBody,
				TokenId.LParen, TokenId.ParenBlock)
			.TakeLBraceAs(TokenId.ForBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ForBody);
	};
}