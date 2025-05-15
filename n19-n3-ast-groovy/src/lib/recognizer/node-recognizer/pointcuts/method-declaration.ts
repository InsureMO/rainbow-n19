import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

export class MethodDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.TakeLBraceAs(TokenId.MethodBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.MethodBody);
	};
}
