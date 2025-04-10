import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define finally body node
 */
export class FinallyBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.FinallyBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
