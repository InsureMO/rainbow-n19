import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractEndBySthAstNode} from './abstract-end-by-sth';

/** container end by rbrace */
export abstract class AbstractEndByRBraceAstNode extends AbstractEndBySthAstNode {
	protected endBy(node: AstNode): boolean {
		return node.tokenId === TokenId.RBrace;
	}
}
