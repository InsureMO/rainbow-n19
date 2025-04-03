import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "--" */
export class DecreaseNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Decrease;
	}
}