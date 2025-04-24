import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "final", for class (not interface), method, field and parameter */
export class FinalNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.FINAL;
	}
}
