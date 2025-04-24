import {AstNode} from '@rainbow-n19/n3-ast';
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
		return false;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected endBy(_node: AstNode): boolean {
		return false;
	}
}
