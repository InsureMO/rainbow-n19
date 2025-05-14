import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class SynchronizedBlockDeclaration {
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
		TokenId.SynchronizedBlockBody
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SynchronizedBlockBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SynchronizedBlockDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.SynchronizedBlockBody);
	static readonly extra = (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, SynchronizedBlockDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, SynchronizedBlockDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, SynchronizedBlockDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
