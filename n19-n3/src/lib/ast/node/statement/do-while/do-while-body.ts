import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define do-while body node
 */
export class DoWhileBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.DoWhileBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
