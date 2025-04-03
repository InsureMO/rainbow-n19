import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class FloatNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.FLOAT;
	}
}