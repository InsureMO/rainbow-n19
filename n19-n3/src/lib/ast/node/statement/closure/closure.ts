import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndByRBraceAstNode} from '../../abstract';

/**
 * TODO define closure node
 */
export class ClosureNode extends AbstractEndByRBraceAstNode {
	get tokenId(): TokenId {
		return TokenId.Closure;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return false;
	}
}
