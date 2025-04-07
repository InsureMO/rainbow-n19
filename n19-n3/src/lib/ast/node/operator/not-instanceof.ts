import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "!instanceof" */
export class NotInstanceofNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotInstanceof;
	}
}