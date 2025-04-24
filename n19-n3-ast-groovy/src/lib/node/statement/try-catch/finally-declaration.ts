import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractContainerAstNode} from '../../abstract';
import {TryCatchDeclarationNode} from './try-catch-declaration';

/**
 * TODO define catch declaration node
 */
export class FinallyDeclarationNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.FinallyDeclaration;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as TryCatchDeclarationNode).close();
	}
}
