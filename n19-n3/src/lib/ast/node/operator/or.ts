import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "||" */
export class OrNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Or;
	}
}