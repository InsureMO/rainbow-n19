import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

export class MultipleLinesCommentEndMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.MultipleLinesCommentEndMark;
	}
}
