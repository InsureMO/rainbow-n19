import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "==" */
export class EqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Equal;
	}
}