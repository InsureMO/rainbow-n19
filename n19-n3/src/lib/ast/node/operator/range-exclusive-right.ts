import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "..<" */
export class RangeExclusiveRightNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveRight;
	}
}