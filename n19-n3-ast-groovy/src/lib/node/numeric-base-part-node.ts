import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';
import {LiteralAstNode} from './literal-node';

export class NumericBasePartNode extends AbstractAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.NumericBasePart;
	}
}
