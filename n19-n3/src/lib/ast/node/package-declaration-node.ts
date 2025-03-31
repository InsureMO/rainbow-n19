import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementEndBySemicolonAstNode} from './abstract-statement-node';
import {MultipleLinesCommentNode} from './comment-node';
import {IdentifierNode} from './identifier-node';
import {KwPackageNode} from './keyword-nodes';
import {DotNode, SemicolonNode} from './symbol-nodes';
import {TabsNode} from './tabs-node';
import {WhitespacesNode} from './whitespaces-node';

/**
 * package declaration of file
 */
export class PackageDeclarationNode extends AbstractStatementEndBySemicolonAstNode {
	get tokenId(): TokenId {
		return TokenId.PackageDeclaration;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof KwPackageNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode
			|| node instanceof DotNode
			|| node instanceof IdentifierNode
			|| node instanceof SemicolonNode
			|| node instanceof MultipleLinesCommentNode;
	}
}
