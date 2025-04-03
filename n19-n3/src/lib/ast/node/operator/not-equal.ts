import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "!=" */
export class NotEqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotEqual;
	}
}