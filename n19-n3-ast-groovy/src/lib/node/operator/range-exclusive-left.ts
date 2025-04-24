import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "<.." */
export class RangeExclusiveLeftNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveLeft;
	}
}