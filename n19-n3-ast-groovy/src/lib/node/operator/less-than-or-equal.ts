import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "<=" */
export class LessThanOrEqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.LessThanOrEqual;
	}
}