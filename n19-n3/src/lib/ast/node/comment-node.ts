import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractContainerAstNode} from './abstract-container-node';
import {AbstractAstNode} from './abstract-node';

export class CommentKeywordNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.CommentKeyword;
	}
}

export class SingleLineCommentStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.SingleLineCommentStartMark;
	}
}

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

export class MultipleLinesCommentStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.MultipleLinesCommentStartMark;
	}
}

export class MultipleLinesCommentEndMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.MultipleLinesCommentEndMark;
	}
}

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
			TokenId.Asterisk,
			TokenId.CommentKeyword,
			TokenId.NewLine,
			TokenId.MultipleLinesCommentEndMark
		].includes(node.tokenId);
	}
}
