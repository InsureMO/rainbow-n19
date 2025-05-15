import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';

class SwitchCaseDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.RejectTokenIdsAsChild(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
				// any legitimate right brace will be received by the block initiated by the left brace.
				// therefore, an independent right brace must mark the end of the switch body.
				TokenId.RBrace)
			.EndWithSemicolon();
	};
}

class SwitchDefaultDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.RejectTokenIdsAsChild(TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration,
				// any legitimate right brace will be received by the block initiated by the left brace.
				// therefore, an independent right brace must mark the end of the switch body.
				TokenId.RBrace)
			.EndWithSemicolon();
	};
}

export class SwitchDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Case = SwitchCaseDeclaration;
	static readonly Default = SwitchDefaultDeclaration;

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(
				TokenId.ParenBlock, TokenId.SwitchBody,
				TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration)
			.TakeLBraceAs(TokenId.SwitchBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.SwitchBody);
	};
}
