import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractContainerAstNode} from './abstract-container-node';
import {MultipleLinesCommentNode} from './comment-node';
import {IdentifierNode} from './identifier-node';
import {KwPackageNode} from './keyword-nodes';
import {DotNode, SemiColonNode} from './symbol-nodes';
import {TabsNode} from './tabs-node';
import {UnexpectedCharsNode} from './unexpected-chars-node';
import {WhitespacesNode} from './whitespaces-node';

/**
 * package declaration of file
 */
export class PackageDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.PackageDeclaration;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return node instanceof KwPackageNode
			|| node instanceof WhitespacesNode
			|| node instanceof TabsNode
			|| node instanceof DotNode
			|| node instanceof IdentifierNode
			|| node instanceof UnexpectedCharsNode
			|| node instanceof SemiColonNode
			|| node instanceof MultipleLinesCommentNode;
	}
}
