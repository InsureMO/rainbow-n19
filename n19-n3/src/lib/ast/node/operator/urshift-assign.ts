import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ">>>=" */
export class UrshiftAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.UrshiftAssign;
	}
}