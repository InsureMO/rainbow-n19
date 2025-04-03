import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ">>=" */
export class RshiftAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RshiftAssign;
	}
}