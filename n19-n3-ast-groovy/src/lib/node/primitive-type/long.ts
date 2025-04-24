import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class LongNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.LONG;
	}
}