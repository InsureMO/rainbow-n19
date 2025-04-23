import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';

/**
 * TODO define closure node
 */
export class ClosureNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.Closure;
	}

	/**
	 * returns true, anything can be appended to me
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
