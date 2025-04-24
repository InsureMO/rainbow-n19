import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ".." */
export class RangeInclusiveNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeInclusive;
	}
}