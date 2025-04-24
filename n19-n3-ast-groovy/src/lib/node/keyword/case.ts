import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "case" */
export class CaseNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CASE;
	}
}