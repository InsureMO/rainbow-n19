import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';
import {ConstructorDeclarationNode} from './constructor-declaration';

export class ConstructorBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.ConstructorBody;
	}

	/**
	 * returns true, anything can be appended to me
	 */
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as ConstructorDeclarationNode).close();
	}
}
