import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "->" */
export class ArrowNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Arrow;
	}
}