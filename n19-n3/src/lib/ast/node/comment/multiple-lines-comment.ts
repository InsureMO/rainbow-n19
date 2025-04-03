import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractContainerAstNode} from '../abstract';

export class MultipleLinesCommentNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.MultipleLinesComment;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.MultipleLinesCommentStartMark,
			TokenId.Whitespaces,
			TokenId.Tabs,
			TokenId.Chars,
			TokenId.Multiple,
			TokenId.CommentKeyword,
			TokenId.NewLine,
			TokenId.MultipleLinesCommentEndMark
		].includes(node.tokenId);
	}
}
