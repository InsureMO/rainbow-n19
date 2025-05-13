import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../node';
import {TokenId} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

export class DoWhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly childAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			TokenId.DO, TokenId.WHILE,
			TokenId.LBrace, TokenId.LParen,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			// of course block body and condition block can be child
			TokenId.DoWhileBody, TokenId.ParenBlock
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.DoWhileBody);
	static readonly onLParenAppended = LogicBlock.Paren.createOnLParenAppendedFuncForDeclaration(TokenId.ParenBlock);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		DoWhileDeclaration.onLBraceAppended,
		DoWhileDeclaration.onLParenAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.ParenBlock);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO do-while node pointcuts
		$NAF.ChildAcceptableCheck.set(node, DoWhileDeclaration.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, DoWhileDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, DoWhileDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
