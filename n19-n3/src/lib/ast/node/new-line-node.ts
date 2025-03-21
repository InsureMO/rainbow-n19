import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class NewLineNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.NewLine;
	}
}
