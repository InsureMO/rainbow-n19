import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "<..<" */
export class RangeExclusiveFullNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveFull;
	}
}