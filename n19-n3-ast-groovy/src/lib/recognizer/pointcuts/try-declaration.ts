import {GroovyAstNode} from '../../node';
import {TokenId} from '../../tokens';
import {$Neaf} from './neaf';

class TryTryDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.TryTryBody)
			.TakeLBraceAs(TokenId.TryTryBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.TryTryBody);
	};
}

class TryCatchDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.TryCatchBody)
			.TakeLBraceAs(TokenId.TryCatchBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.TryCatchBody);
	};
}

class TryFinallyDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.TryFinallyBody)
			.TakeLBraceAs(TokenId.TryFinallyBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.TryFinallyBody);
	};
}

export class TryDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Try = TryTryDeclaration;
	static readonly Catch = TryCatchDeclaration;
	static readonly Finally = TryFinallyDeclaration;

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration)
			.EndWithSemicolon();
	};
}
