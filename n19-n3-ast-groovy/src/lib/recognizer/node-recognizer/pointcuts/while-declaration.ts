import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class WhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly childAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			TokenId.WHILE,
			TokenId.LBrace, TokenId.LParen,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			// of course block body and condition block can be child
			TokenId.WhileBody, TokenId.ParenBlock
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc;
	static readonly onLParenAppended = LogicBlock.Paren.createOnLParenAppendedFuncForDeclaration(TokenId.ParenBlock);
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.WhileBody);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		WhileDeclaration.onLParenAppended,
		WhileDeclaration.onLBraceAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.WhileBody);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO do-while node pointcuts
		$NAF.ChildAcceptableCheck.set(node, WhileDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, WhileDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, WhileDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}