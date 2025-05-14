import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		// of course block body and condition block can be child
		TokenId.ForBody, TokenId.ParenBlock
	);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.ForBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		ForDeclaration.onLParenAppended,
		ForDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, ForDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, ForDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.ForBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}