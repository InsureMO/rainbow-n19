import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class IntNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.INT;
	}
}