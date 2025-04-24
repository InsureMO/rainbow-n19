import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractMightBeBraceBlockNode} from '../../abstract';

/**
 * TODO define do-while body node
 */
export class DoWhileBodyNode extends AbstractMightBeBraceBlockNode {
	get tokenId(): TokenId {
		return TokenId.DoWhileBody;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
