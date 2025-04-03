import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "?[" */
export class SafeIndexNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeIndex;
	}
}