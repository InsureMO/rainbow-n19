import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "as", for class/field import and type cast */
export class AsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.AS;
	}
}