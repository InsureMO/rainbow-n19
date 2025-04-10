import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';
import {AbstractTypeDeclarationNode} from './abstract-type-declaration';

export class ClassBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.ClassBody;
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
		(this.parent as AbstractTypeDeclarationNode).close();
	}
}
