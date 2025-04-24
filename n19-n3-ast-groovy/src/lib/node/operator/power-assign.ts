import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "**=" */
export class PowerAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.PowerAssign;
	}
}