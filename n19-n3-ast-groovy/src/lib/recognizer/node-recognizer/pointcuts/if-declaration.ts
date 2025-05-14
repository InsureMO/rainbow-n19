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
		TokenId.IF,
		TokenId.LBrace, TokenId.LParen,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfIfBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.IfIfBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		IfDeclarationUtils.onLParenAppended,
		IfIfDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, IfIfDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, IfIfDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.IfIfBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfElseIfBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.IfElseIfBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		IfDeclarationUtils.onLParenAppended,
		IfElseIfDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, IfElseIfDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, IfElseIfDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.IfElseIfBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
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
		IfElseDeclaration.onIfKeywordAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.IfElseBody);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, IfElseDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, IfElseDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.IfElseBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.IfIfDeclaration, TokenId.IfElseIfDeclaration, TokenId.IfElseDeclaration
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, IfDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.clear(node);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
