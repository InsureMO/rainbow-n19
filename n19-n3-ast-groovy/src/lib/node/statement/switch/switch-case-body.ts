import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractMightBeBraceBlockNode} from '../../abstract';
import {SwitchCaseDeclarationNode} from './switch-case-declaration';

/**
 * switch-case body node
 * can start/end by brace pair, or not
 */
export class SwitchCaseBodyNode extends AbstractMightBeBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.SwitchCaseBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as SwitchCaseDeclarationNode).close();
	}
}
