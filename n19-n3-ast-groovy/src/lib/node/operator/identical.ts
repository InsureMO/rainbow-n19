import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "===" */
export class IdenticalNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Identical;
	}
}