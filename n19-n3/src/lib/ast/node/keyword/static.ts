import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "static", for class, method, field and static import */
export class StaticNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.STATIC;
	}
}