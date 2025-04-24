import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "?." */
export class SafeDotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeDot;
	}
}