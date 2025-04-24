import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractMightBeBraceBlockNode} from '../../abstract';
import {SwitchDefaultDeclarationNode} from './switch-default-declaration';

/**
 * TODO define switch-default body node
 */
export class SwitchDefaultBodyNode extends AbstractMightBeBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.SwitchDefaultBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as SwitchDefaultDeclarationNode).close();
	}
}
