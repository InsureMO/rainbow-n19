import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "&&" */
export class AndNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.And;
	}
}