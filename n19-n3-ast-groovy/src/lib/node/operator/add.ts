import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "+" */
export class AddNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Add;
	}
}