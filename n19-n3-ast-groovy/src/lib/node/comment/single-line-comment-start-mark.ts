import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

export class SingleLineCommentStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.SingleLineCommentStartMark;
	}
}
