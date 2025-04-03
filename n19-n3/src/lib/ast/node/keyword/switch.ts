import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "switch" */
export class SwitchNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.SWITCH;
	}
}