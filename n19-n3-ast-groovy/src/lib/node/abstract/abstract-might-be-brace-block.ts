import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractBraceBlockNode} from './abstract-brace-block';

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
