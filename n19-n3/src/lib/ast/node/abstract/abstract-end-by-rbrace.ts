import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractEndBySthAstNode} from './abstract-end-by-sth';

/** container end by rbrace */
export abstract class AbstractEndByRBraceAstNode extends AbstractEndBySthAstNode {
	protected endBy(node: AstNode): boolean {
		return node.tokenId === TokenId.RBrace;
	}
}
