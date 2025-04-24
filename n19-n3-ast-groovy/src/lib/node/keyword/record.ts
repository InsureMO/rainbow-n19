import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "record", for class */
export class RecordNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.RECORD;
	}
}