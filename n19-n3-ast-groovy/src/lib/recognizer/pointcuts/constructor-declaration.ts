import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {$Neaf} from './neaf';

export class ConstructorDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.TakeLBraceAs(TokenId.ConstructorBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.ConstructorBody);
	};
}
