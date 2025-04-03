import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "assert" */
export class AssertNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ASSERT;
	}
}