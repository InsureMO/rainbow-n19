import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';
import {TryDeclarationNode} from './try-declaration';

export class TryBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.TryBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as TryDeclarationNode).close();
	}
}
