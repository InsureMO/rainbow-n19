import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "++" */
export class IncreaseNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Increase;
	}
}