import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "=" */
export class AssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Assign;
	}
}