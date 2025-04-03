import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class CharNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.CHAR;
	}
}