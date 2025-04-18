import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define lambda declaration node
 */
export class LambdaDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.LambdaDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
