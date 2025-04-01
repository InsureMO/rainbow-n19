import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractContainerAstNode} from './abstract-container-node';
import {AbstractAstNode} from './abstract-node';

/**
 * "#!"
 */
export class ScriptCommandStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommandStartMark;
	}
}

/**
 * line starts with "#!".
 */
export class ScriptCommandNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommand;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.ScriptCommandStartMark,
			TokenId.Chars,
			TokenId.Whitespaces,
			TokenId.Tabs
		].includes(node.tokenId);
	}
}
