import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ">" */
export class GreaterThanNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.GreaterThan;
	}
}