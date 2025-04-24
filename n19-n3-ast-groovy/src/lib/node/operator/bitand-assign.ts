import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "&=" */
export class BitandAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.BitandAssign;
	}
}