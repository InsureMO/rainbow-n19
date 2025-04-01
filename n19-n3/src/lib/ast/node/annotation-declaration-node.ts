import {AstNode} from '../ast-node';
import {TokenId} from '../tokens';
import {AbstractStatementAstNode} from './abstract-statement-node';

/**
 * TODO define annotation declaration node
 */
export class AnnotationDeclarationNode extends AbstractStatementAstNode {
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
