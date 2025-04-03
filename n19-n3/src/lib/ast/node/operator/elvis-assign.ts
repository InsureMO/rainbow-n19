import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "?=" */
export class ElvisAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.ElvisAssign;
	}
}