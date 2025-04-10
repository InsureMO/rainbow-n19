import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define catch body node
 */
export class CatchBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.CatchBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
