import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractBraceBlockNode} from '../../abstract';
import {SwitchDeclarationNode} from './switch-declaration';

export class SwitchBodyNode extends AbstractBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.SwitchBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as SwitchDeclarationNode).close();
	}
}
