import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "do" */
export class DoNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.DO;
	}
}