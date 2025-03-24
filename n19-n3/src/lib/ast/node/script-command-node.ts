import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';
import {SimpleContainerAstNode} from './simple-container-ast-node';

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

export class ScriptCommandNode extends SimpleContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommand;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof ScriptCommandHeadNode
			|| node instanceof ScriptCommandContentNode;
	}
}
