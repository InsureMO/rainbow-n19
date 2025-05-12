import {$NAF, ChildAcceptableCheckFunc, GroovyAstNode} from '../../../node';
import {TokenId, TokenType} from '../../../tokens';
import {AstRecognizer} from '../../ast-recognizer';
import {LogicBlock} from './logic-block';
import {SharedNodePointcuts} from './shared';

class DoWhileCondition {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	static readonly childAcceptableCheck = ((mightBeChildNode: GroovyAstNode, _astRecognizer: AstRecognizer): boolean => {
		return [
			TokenId.Whitespaces, TokenId.Tabs, TokenId.NewLine,
			TokenId.WHILE,
			TokenId.LParen,
			// end
			TokenId.Semicolon,
			TokenId.SingleLineComment, TokenId.MultipleLinesComment,
			// of course block body can be child
			TokenId.ParenBlock
		].includes(mightBeChildNode.tokenId);
	}) as ChildAcceptableCheckFunc;
	static readonly onLParenAppended = LogicBlock.Paren.createOnLParenAppendedFuncForDeclaration(TokenId.ParenBlock);
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		DoWhileCondition.onLParenAppended,
		SharedNodePointcuts.closeCurrentParentOnSemicolonAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.ParenBlock);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO do-while node pointcuts
		$NAF.ChildAcceptableCheck.set(node, DoWhileCondition.childAcceptableCheck);
		$NAF.OnChildAppended.set(node, DoWhileCondition.onChildAppended);
		$NAF.OnChildClosed.set(node, DoWhileCondition.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}

export class DoWhileDeclaration {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
		// avoid extend
	}

	static readonly Condition = DoWhileCondition;
	static readonly onLBraceAppended = LogicBlock.Brace.createOnLBraceAppendedFuncForDeclaration(TokenId.DoWhileBody);
	static readonly onWhileKeywordAppended = (lastChildNode: GroovyAstNode, astRecognizer: AstRecognizer): boolean => {
		if (lastChildNode.tokenId !== TokenId.WHILE) {
			return false;
		}
		SharedNodePointcuts.createBlockByNode({
			node: lastChildNode,
			blockTokenId: TokenId.DoWhileCondition,
			blockTokenType: TokenType.LogicDeclaration,
			blockNodePointcuts: DoWhileCondition.extra,
			astRecognizer
		});
		return true;
	};
	static readonly onChildAppended = SharedNodePointcuts.onChildAppendedOfFirstOrNone(
		DoWhileDeclaration.onLBraceAppended,
		DoWhileDeclaration.onWhileKeywordAppended
	);
	static readonly onChildClosed = SharedNodePointcuts.createCloseCurrentParentOnTokenId(TokenId.DoWhileCondition);
	static readonly extra = (node: GroovyAstNode): void => {
		// TODO do-while node pointcuts
		$NAF.ChildAcceptableCheck.clear(node);
		$NAF.OnChildAppended.set(node, DoWhileDeclaration.onChildAppended);
		$NAF.OnChildClosed.set(node, DoWhileDeclaration.onChildClosed);
		$NAF.OnNodeClosed.clear(node);
	};
}
