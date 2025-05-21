import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {$Neaf} from './neaf';

export class StaticBlockDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.StaticBlockBody)
			.TakeLBraceAs(TokenId.StaticBlockBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.StaticBlockBody);
	};
}
