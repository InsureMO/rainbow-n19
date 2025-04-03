import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class DoubleNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.DOUBLE;
	}
}