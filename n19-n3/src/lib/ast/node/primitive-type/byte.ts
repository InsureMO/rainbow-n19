import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class ByteNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.BYTE;
	}
}