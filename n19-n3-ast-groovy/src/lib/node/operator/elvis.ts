import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "?:" */
export class ElvisNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Elvis;
	}
}