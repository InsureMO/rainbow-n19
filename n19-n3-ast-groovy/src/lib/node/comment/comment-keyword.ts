import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

export class CommentKeywordNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.CommentKeyword;
	}
}
