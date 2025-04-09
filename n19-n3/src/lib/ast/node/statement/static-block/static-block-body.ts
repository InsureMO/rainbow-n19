import {AstNode} from '../../../ast-node';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';
import {StaticBlockDeclarationNode} from './static-block-declaration';

export class StaticBlockBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.StaticBlockBody;
	}

	/**
	 * returns true, anything can be appended to me
	 */
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as StaticBlockDeclarationNode).close();
	}
}
