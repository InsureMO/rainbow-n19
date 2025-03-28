import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementAstNode} from './abstract-statement-node';
import {MultipleLinesCommentNode} from './comment-node';
import {IdentifierNode} from './identifier-node';
import {KwAsNode, KwImportNode, KwStaticNode} from './keyword-nodes';
import {DotNode, SemicolonNode, SpreadDotNode} from './symbol-nodes';
import {TabsNode} from './tabs-node';
import {WhitespacesNode} from './whitespaces-node';

/**
 * import declaration of file
 */
export class ImportDeclarationNode extends AbstractStatementAstNode {
	get tokenId(): TokenId {
		return TokenId.ImportDeclaration;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof KwImportNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode
			|| node instanceof DotNode
			|| node instanceof KwStaticNode
			|| node instanceof IdentifierNode
			|| node instanceof KwAsNode
			|| node instanceof SpreadDotNode
			|| node instanceof SemicolonNode
			|| node instanceof MultipleLinesCommentNode;
	}
}
