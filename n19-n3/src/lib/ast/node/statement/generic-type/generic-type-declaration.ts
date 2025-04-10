import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndBySthAstNode} from '../../abstract';

/**
 * TODO define generic type declaration node
 */
export class GenericTypeDeclarationNode extends AbstractEndBySthAstNode {
	get tokenId(): TokenId {
		return TokenId.GenericTypeDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return false;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected endBy(_node: AstNode): boolean {
		return false;
	}
}
