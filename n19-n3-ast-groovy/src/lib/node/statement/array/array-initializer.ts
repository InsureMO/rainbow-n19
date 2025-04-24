import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../../tokens';
import {AbstractEndByRBraceAstNode} from '../../abstract';

/**
 * TODO define array initializer node
 */
export class ArrayInitializerNode extends AbstractEndByRBraceAstNode {
	get tokenId(): TokenId {
		return TokenId.ArrayInitializer;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return false;
	}
}
