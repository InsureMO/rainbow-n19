import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "+=" */
export class AddAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.AddAssign;
	}
}