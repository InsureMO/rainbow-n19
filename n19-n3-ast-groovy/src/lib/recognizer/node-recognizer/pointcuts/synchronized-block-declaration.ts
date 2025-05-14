import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.SynchronizedBlockBody
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.SynchronizedBlockBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		SynchronizedBlockDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, SynchronizedBlockDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, SynchronizedBlockDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.SynchronizedBlockBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
