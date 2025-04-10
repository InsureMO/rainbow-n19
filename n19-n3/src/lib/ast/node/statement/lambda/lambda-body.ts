import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define lambda body node
 */
export class LambdaBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.LambdaBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
