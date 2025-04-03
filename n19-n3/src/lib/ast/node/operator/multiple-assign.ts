import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "*=" */
export class MultipleAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.MultipleAssign;
	}
}