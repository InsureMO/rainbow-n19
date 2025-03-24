import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';
import {SimpleContainerAstNode} from './simple-container-ast-node';
import {TextNode} from './text-node';

export class CommentHighlightKeywordNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.CommentHighlightKeyword;
	}
}

export class CommentHighlightContentNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.CommentHighlightContent;
	}
}

export class SingleLineCommentStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.SingleLineCommentStartMark;
	}
}

export class SingleLineCommentNode extends SimpleContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.SingleLineComment;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof SingleLineCommentStartMarkNode
			|| node instanceof TextNode
			|| node instanceof CommentHighlightKeywordNode
			|| node instanceof CommentHighlightContentNode;
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

export class MultipleLinesCommentNode extends SimpleContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.MultipleLinesComment;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof MultipleLinesCommentStartMarkNode
			|| node instanceof TextNode
			|| node instanceof MultipleLinesCommentEndMarkNode
			|| node instanceof CommentHighlightKeywordNode
			|| node instanceof CommentHighlightContentNode;
	}
}
