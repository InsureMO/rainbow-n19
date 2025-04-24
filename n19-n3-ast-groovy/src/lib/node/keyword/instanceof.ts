import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "instanceof" */
export class InstanceofNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.INSTANCEOF;
	}
}