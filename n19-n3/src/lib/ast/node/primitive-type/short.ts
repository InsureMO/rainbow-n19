import {TokenId} from '../../tokens';
import {AbstractPrimitiveTypeNode} from './abstract-primitive-type';

export class ShortNode extends AbstractPrimitiveTypeNode {
	get tokenId(): TokenId {
		return TokenId.SHORT;
	}
}