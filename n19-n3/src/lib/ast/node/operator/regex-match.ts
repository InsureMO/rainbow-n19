import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "==~" */
export class RegexMatchNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RegexMatch;
	}
}