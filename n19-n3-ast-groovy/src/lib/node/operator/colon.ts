import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ":" */
export class ColonNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Colon;
	}
}