import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.StaticBlockBody
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.StaticBlockBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		StaticBlockDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, StaticBlockDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, StaticBlockDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.StaticBlockBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
