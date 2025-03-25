import {Optional} from '@rainbow-n19/n2';
import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

/**
 * compilation unit, root.
 */
export class CompilationUnitNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.COMPILATION_UNIT;
	}

	get previous(): Optional<AstNode> {
		return (void 0);
	}

	get previousNodes(): Array<AstNode> {
		return [];
	}

	get previousSibling(): Optional<AstNode> {
		return (void 0);
	}

	get previousSiblings(): Array<AstNode> {
		return [];
	}

	get nextSibling(): Optional<AstNode> {
		return (void 0);
	}

	get nextSiblings(): Array<AstNode> {
		return [];
	}

	get parent(): Optional<AstNode> {
		return (void 0);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	asNextOf(_previous: AstNode) {
		throw new Error('It is not allowed to set the compilation unit node as the subsequent node of any other node.');
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	asLastChildOf(_parent: AstNode) {
		throw new Error('It is not allowed to set the compilation unit node as a child node of any other node.');
	}

	/**
	 * always append as child, and returns given one
	 */
	append(node: AstNode): AstNode {
		node.asLastChildOf(this);
		return node;
	}
}
