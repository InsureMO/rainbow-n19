import {GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {$Neaf} from '../../neaf-wrapper';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class IfDeclarationUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
}

class IfIfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.IF, TokenId.ELSE,
		TokenId.LBrace, TokenId.LParen,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfIfBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.IfIfBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		IfDeclarationUtils.onLParenAppended,
		IfIfDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.IfIfBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO if-if node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, IfIfDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, IfIfDeclaration.onChildAppended);
		$Neaf.OnChildClosed.set(node, IfIfDeclaration.onChildClosed);
		$Neaf.OnNodeClosed.set(node, IfIfDeclaration.onNodeClosed);
	};
}

class IfElseIfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.LBrace, TokenId.LParen,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfElseIfBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.IfElseIfBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		IfDeclarationUtils.onLParenAppended,
		IfElseIfDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.IfElseIfBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO if-else-if node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, IfElseIfDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, IfElseIfDeclaration.onChildAppended);
		$Neaf.OnChildClosed.set(node, IfElseIfDeclaration.onChildClosed);
		$Neaf.OnNodeClosed.set(node, IfElseIfDeclaration.onNodeClosed);
	};
}

class IfElseDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.IF,
		TokenId.LBrace,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfElseBody
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.IfElseBody);
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
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		IfElseDeclaration.onLBraceAppended,
		IfElseDeclaration.onIfKeywordAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.IfElseBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO if-else node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, IfElseDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, IfElseDeclaration.onChildAppended);
		$Neaf.OnChildClosed.set(node, IfElseDeclaration.onChildClosed);
		$Neaf.OnNodeClosed.set(node, IfElseDeclaration.onNodeClosed);
	};
}

export class IfDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Utils = IfDeclarationUtils;
	static readonly If = IfIfDeclaration;
	// noinspection JSUnusedGlobalSymbols
	static readonly ElseIf = IfElseIfDeclaration;
	static readonly Else = IfElseDeclaration;

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.IF, TokenId.ELSE,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration
	);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO if node pointcuts
		$Neaf.ChildAcceptableCheck.set(node, IfDeclaration.childAcceptableCheck);
		$Neaf.OnChildAppended.set(node, IfDeclaration.onChildAppended);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.set(node, IfDeclaration.onNodeClosed);
	};
}
