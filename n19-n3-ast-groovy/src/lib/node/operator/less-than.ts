import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "<" */
export class LessThanNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.LessThan;
	}
}