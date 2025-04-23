import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';

/**
 * TODO define do-while body node
 */
export class DoWhileBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.DoWhileBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
