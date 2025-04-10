import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define if-elseif declaration node
 */
export class IfElseIfDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.IfElseIfDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
