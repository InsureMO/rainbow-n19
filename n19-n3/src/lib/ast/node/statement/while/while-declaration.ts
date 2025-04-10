import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define while declaration node
 */
export class WhileDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.WhileDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
