import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "..." */
export class EllipsisNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Ellipsis;
	}
}