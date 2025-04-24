import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "strictfp", for class, constructor, method, and field */
export class StrictfpNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.STRICTFP;
	}
}