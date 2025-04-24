import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractMightBeBraceBlockNode} from '../../abstract';
import {IfElseDeclarationNode} from './if-else-declaration';

/**
 * TODO define if-else body node
 */
export class IfElseBodyNode extends AbstractMightBeBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.IfElseBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as IfElseDeclarationNode).close();
	}
}
