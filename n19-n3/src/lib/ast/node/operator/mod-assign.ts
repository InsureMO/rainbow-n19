import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "%=" */
export class ModAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.ModAssign;
	}
}