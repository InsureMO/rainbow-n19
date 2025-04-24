import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "catch" */
export class CatchNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CATCH;
	}
}