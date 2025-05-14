import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		// of course block body and condition block can be child
		TokenId.WhileBody, TokenId.ParenBlock
	);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.WhileBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		WhileDeclaration.onLParenAppended,
		WhileDeclaration.onLBraceAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, WhileDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, WhileDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.WhileBody);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}