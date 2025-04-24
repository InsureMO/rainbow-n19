import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "/=" */
export class DivideAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.DivideAssign;
	}
}