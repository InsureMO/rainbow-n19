import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define switch-default declaration node
 */
export class SwitchDefaultDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.SwitchDefaultDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
