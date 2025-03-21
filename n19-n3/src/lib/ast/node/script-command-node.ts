import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class ScriptCommandHeadNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommandHead;
	}
}

export class ScriptCommandContentNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommandContent;
	}
}

export class ScriptCommandNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommand;
	}

	/**
	 * accept {@link ScriptCommandHeadNode} and {@link ScriptCommandContentNode} as child,
	 * otherwise call super.
	 */
	append(node: AstNode): AstNode {
		if (node instanceof ScriptCommandHeadNode
			|| node instanceof ScriptCommandContentNode) {
			node.asLastChildOf(this);
			return this;
		} else {
			return super.append(node);
		}
	}
}
