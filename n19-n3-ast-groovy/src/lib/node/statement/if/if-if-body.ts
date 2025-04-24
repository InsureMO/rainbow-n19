import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractMightBeBraceBlockNode} from '../../abstract';
import {IfIfDeclarationNode} from './if-if-declaration';

/**
 * TODO define if-if body node
 */
export class IfIfBodyNode extends AbstractMightBeBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.IfIfBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as IfIfDeclarationNode).close();
	}
}
