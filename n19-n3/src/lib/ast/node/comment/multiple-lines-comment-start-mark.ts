import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

export class MultipleLinesCommentStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.MultipleLinesCommentStartMark;
	}
}
