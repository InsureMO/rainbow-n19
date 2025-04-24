import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractEndByRBraceAstNode} from './abstract-end-by-rbrace';

/**
 * nothing special for brace block node, just a container node.
 * the first child node of brace block node is lbrace, and the last child node is rbrace (if exists).
 */
export abstract class AbstractBraceBlockNode extends AbstractEndByRBraceAstNode {
}

/**
 * end by right brace when first child is left brace
 */
export abstract class AbstractMightBeBraceBlockNode extends AbstractBraceBlockNode {
	protected endBy(node: AstNode): boolean {
		const children = this.children;
		return children != null && children.length !== 0
			&& children[0].tokenId === TokenId.LBrace
			&& node.tokenId === TokenId.RBrace;
	}
}
