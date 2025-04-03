import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "!in" */
export class NotInNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotIn;
	}
}