import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "!instanceof" */
export class NotInstanceOfNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotInstanceOf;
	}
}