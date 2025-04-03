import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "&=" */
export class AndAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.AndAssign;
	}
}