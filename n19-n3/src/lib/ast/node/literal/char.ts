import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';
import {LiteralAstNode} from './literal';

/** "true", "false" */
export class CharLiteralNode extends AbstractAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.CharLiteral;
	}
}
