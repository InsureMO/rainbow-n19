import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class ForDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.FOR,
		TokenId.LBrace, TokenId.LParen,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		// of course block body and condition block can be child
		TokenId.ForBody, TokenId.ParenBlock
	);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.ForBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		ForDeclaration.onLParenAppended,
		ForDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.ForBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO for node pointcuts
		$NAF.ChildAcceptableCheck.set(node, ForDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, ForDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, ForDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, ForDeclaration.onNodeClosed);
	};
}