import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "!==" */
export class NotIdenticalNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotIdentical;
	}
}