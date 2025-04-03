import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "-=" */
export class SubtractAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SubtractAssign;
	}
}