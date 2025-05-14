import {$NAF, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class StaticBlockDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly childAcceptableCheck = SharedNodePointcuts.createChildAcceptableCheckFuncOnAcceptTokenIds(
		TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
		TokenId.LBrace,
		// end
		TokenId.Semicolon,
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.StaticBlockBody
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.StaticBlockBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		StaticBlockDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.StaticBlockBody);
	static readonly extra = (node: GroovyAstNode): void => {
		$NAF.ChildAcceptableCheck.set(node, StaticBlockDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, StaticBlockDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, StaticBlockDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
