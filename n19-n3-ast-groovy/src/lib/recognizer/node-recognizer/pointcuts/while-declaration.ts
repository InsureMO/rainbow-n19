import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class WhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.WHILE,
		TokenId.LBrace, TokenId.LParen,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		// of course block body and condition block can be child
		TokenId.WhileBody, TokenId.ParenBlock
	);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.WhileBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		WhileDeclaration.onLParenAppended,
		WhileDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.WhileBody);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO while node pointcuts
		$NAF.ChildAcceptableCheck.set(node, WhileDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, WhileDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, WhileDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, WhileDeclaration.onNodeClosed);
	};
}