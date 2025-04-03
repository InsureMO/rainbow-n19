import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "!" */
export class NotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Not;
	}
}