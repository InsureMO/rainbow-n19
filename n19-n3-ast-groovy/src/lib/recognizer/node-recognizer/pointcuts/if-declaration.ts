import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {$Neaf} from '../../neaf-wrapper';

class IfIfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.IfIfBody)
			.TakeLBraceAs(TokenId.IfIfBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.IfIfBody);
	};
}

class IfElseIfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.ParenBlock, TokenId.IfElseIfBody)
			.TakeLBraceAs(TokenId.IfElseIfBody)
			.EndWithSemicolon()
			.CloseOnChildWithTokenClosed(TokenId.IfElseIfBody);
	};
}

class IfElseDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly onIfKeywordAppended = (lastChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.IF) {
			return false;
		}
		// change parent to else-if
		const currentParent = lastChildNode.parent;
		currentParent.replaceTokenNature(TokenId.IfElseIfDeclaration, TokenType.LogicBlockDeclaration);
		IfElseIfDeclaration.extra(currentParent);
		return true;
	};
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.IF, TokenId.IfElseBody)
			.TakeLBraceAs(TokenId.IfElseBody)
			.EndWithSemicolon()
			.OnChildAppended(IfElseDeclaration.onIfKeywordAppended)
			.CloseOnChildWithTokenClosed(TokenId.IfElseBody);
	};
}

export class IfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly If = IfIfDeclaration;
	// noinspection JSUnusedGlobalSymbols
	static readonly ElseIf = IfElseIfDeclaration;
	static readonly Else = IfElseDeclaration;

	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.of(node)
			.AcceptTokenIdsAsChild(TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration)
			.EndWithSemicolon();
	};
}
