import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "??." */
export class SafeChainDotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeChainDot;
	}
}