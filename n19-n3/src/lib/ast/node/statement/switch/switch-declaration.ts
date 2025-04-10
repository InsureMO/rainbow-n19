import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define switch declaration node
 */
export class SwitchDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.SwitchDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
