import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define try-catch declaration node
 */
export class TryCatchDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.TryCatchDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
