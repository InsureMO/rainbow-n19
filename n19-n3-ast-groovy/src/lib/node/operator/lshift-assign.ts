import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "<<=" */
export class LshiftAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.LshiftAssign;
	}
}