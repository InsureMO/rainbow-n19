import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ">=" */
export class GreaterThanOrEqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.GreaterThanOrEqual;
	}
}