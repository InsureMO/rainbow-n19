import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "^=" */
export class XorAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.XorAssign;
	}
}