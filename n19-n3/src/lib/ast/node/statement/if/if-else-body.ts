import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define if-else body node
 */
export class IfElseBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.IfElseBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
