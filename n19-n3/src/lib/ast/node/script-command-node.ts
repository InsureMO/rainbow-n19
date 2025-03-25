import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractContainerAstNode} from './abstract-container-node';
import {AbstractAstNode} from './abstract-node';
import {TabsNode} from './tabs-node';
import {TextNode} from './text-node';
import {WhitespacesNode} from './whitespaces-node';

export class ScriptCommandStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommandStartMark;
	}
}

export class ScriptCommandNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommand;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof ScriptCommandStartMarkNode
			|| node instanceof TextNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode;
	}
}
