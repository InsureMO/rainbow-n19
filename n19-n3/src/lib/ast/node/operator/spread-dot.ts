import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "*." */
export class SpreadDotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SpreadDot;
	}
}