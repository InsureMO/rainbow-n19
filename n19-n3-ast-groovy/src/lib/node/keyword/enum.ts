import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "enum" */
export class EnumNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.ENUM;
	}
}