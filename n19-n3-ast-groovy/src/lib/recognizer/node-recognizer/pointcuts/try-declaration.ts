import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class TryDeclarationUtils {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
}

class TryTryDeclaration {
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
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.TryTryBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		TryDeclarationUtils.onLParenAppended,
		TryTryDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.TryTryBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO try-try node pointcuts
		$NAF.ChildAcceptableCheck.set(node, TryTryDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, TryTryDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, TryTryDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, TryTryDeclaration.onNodeClosed);
	};
}

class TryCatchDeclaration {
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
		TokenId.TryCatchBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.TryCatchBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		TryDeclarationUtils.onLParenAppended,
		TryCatchDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.TryCatchBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO try-catch node pointcuts
		$NAF.ChildAcceptableCheck.set(node, TryCatchDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, TryCatchDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, TryCatchDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, TryCatchDeclaration.onNodeClosed);
	};
}

class TryFinallyDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.FINALLY,
		TokenId.LBrace,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.TryFinallyBody
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.TryFinallyBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		TryFinallyDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.TryFinallyBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO try-finally node pointcuts
		$NAF.ChildAcceptableCheck.set(node, TryFinallyDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, TryFinallyDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, TryFinallyDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, TryFinallyDeclaration.onNodeClosed);
	};
}

export class TryDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Utils = TryDeclarationUtils;
	static readonly Try = TryTryDeclaration;
	static readonly Catch = TryCatchDeclaration;
	static readonly Finally = TryFinallyDeclaration;

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.TRY, TokenId.CATCH, TokenId.FINALLY,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.TryTryDeclaration, TokenId.TryCatchDeclaration, TokenId.TryFinallyDeclaration
	);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO try node pointcuts
		$NAF.ChildAcceptableCheck.set(node, TryDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, TryDeclaration.onChildAppended);
		$NAF.OnChildClosed.clear(node);
		$NAF.OnNodeClosed.set(node, TryDeclaration.onNodeClosed);
	};
}
