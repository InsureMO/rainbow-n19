import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class DoWhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.DO, TokenId.WHILE,
		TokenId.LBrace, TokenId.LParen,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.DoWhileBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.DoWhileBody);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		DoWhileDeclaration.onLBraceAppended,
		DoWhileDeclaration.onLParenAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.ParenBlock);
	static readonly onNodeClosed = SharedNodePointcuts.moveTrailingDetachableNodesToParentOnNodeClosed;
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO do-while node pointcuts
		$NAF.ChildAcceptableCheck.set(node, DoWhileDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, DoWhileDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, DoWhileDeclaration.onChildClosed);
		$NAF.OnNodeClosed.set(node, DoWhileDeclaration.onNodeClosed);
	};
}
