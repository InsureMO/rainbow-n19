import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class UnexpectedCharsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.UnexpectedChars;
	}
}
