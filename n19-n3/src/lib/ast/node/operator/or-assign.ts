import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "|=" */
export class OrAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.OrAssign;
	}
}