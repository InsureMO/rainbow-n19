import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';
import {CatchDeclarationNode} from './catch-declaration';

export class CatchBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.CatchBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as CatchDeclarationNode).close();
	}
}
