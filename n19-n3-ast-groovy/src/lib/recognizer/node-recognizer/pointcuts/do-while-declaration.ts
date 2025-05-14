import {GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {$Neaf} from '../../neaf-wrapper';
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
		TokenId.SingleLineComment, TokenId.MultipleLinesComment,
		TokenId.DoWhileBody, TokenId.ParenBlock
	);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.DoWhileBody);
	static readonly onLParenAppended = LogicBlock.Paren.createParenBlockOnLParenAppended;
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		DoWhileDeclaration.onLBraceAppended,
		DoWhileDeclaration.onLParenAppended
	);
	static readonly extra = (node: GroovyAstNode): void => {
		$Neaf.ChildAcceptableCheck.set(node, DoWhileDeclaration.childAcceptableCheck);
		$Neaf.EndWithSemicolon.set(node);
		$Neaf.OnChildAppended.set(node, DoWhileDeclaration.onChildAppended);
		$Neaf.CloseOnChildWithTokenClosed.set(node, TokenId.ParenBlock);
		$Neaf.OnChildClosed.clear(node);
		$Neaf.OnNodeClosed.clear(node);
	};
}
