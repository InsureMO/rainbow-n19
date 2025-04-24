import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "&" */
export class BitandNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Bitand;
	}
}