import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractContainerAstNode} from './abstract-container-node';
import {AbstractAstNode} from './abstract-node';
import {NewLineNode} from './new-line-node';
import {TabsNode} from './tabs-node';
import {TextNode} from './text-node';
import {WhitespacesNode} from './whitespaces-node';

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
		return node instanceof SingleLineCommentStartMarkNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode
			|| node instanceof TextNode
			|| node instanceof CommentKeywordNode;
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
		return node instanceof MultipleLinesCommentStartMarkNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode
			|| node instanceof TextNode
			|| node instanceof CommentKeywordNode
			|| node instanceof NewLineNode
			|| node instanceof MultipleLinesCommentEndMarkNode;
	}
}
