import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define if-if declaration node
 */
export class IfIfDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.IfIfDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
