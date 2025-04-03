import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractEndBySthAstNode} from '../../abstract';

/**
 * TODO define annotation declaration node
 */
export class AnnotationDeclarationNode extends AbstractEndBySthAstNode {
	get tokenId(): TokenId {
		return TokenId.AnnotationDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		// TODO
		return false;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected endBy(_node: AstNode): boolean {
		// TODO
		return false;
	}
}
