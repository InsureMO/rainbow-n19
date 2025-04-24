import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';
import {LiteralAstNode} from './literal';

/** "true", "false" */
export class BooleanLiteralNode extends AbstractAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.BooleanLiteral;
	}
}
