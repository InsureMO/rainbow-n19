import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define switch-case declaration node
 */
export class SwitchCaseDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.SwitchCaseDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
