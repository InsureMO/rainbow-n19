import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "=~" */
export class RegexFindNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RegexFind;
	}
}