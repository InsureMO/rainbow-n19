import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class WhitespacesNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Whitespaces;
	}
}
