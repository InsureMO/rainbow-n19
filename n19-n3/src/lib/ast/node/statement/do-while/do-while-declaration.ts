import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define do-while declaration node
 */
export class DoWhileDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.DoWhileDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
