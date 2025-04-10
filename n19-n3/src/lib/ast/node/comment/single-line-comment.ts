import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractContainerAstNode} from '../abstract';

export class SingleLineCommentNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.SingleLineComment;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.SingleLineCommentStartMark,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Chars,
			TokenId.CommentKeyword
		].includes(node.tokenId);
	}
}
