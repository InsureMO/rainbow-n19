import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define try body node
 */
export class TryBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.TryBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
