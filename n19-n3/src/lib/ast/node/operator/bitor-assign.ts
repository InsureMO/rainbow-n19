import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "|=" */
export class BitorAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.BitorAssign;
	}
}