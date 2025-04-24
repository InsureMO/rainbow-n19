import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractMightBeBraceBlockNode} from '../../abstract';
import {IfElseIfDeclarationNode} from './if-elseif-declaration';

/**
 * TODO define if-elseif body node
 */
export class IfElseIfBodyNode extends AbstractMightBeBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.IfElseIfBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}

	close() {
		super.close();
		// also close parent
		(this.parent as IfElseIfDeclarationNode).close();
	}
}
