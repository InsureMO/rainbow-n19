import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';

/**
 * TODO define if-elseif body node
 */
export class IfElseIfBodyNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.IfElseIfBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
