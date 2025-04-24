import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "^" */
export class XorNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Xor;
	}
}