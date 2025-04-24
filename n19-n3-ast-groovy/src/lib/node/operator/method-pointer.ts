import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** ".&" */
export class MethodPointerNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.MethodPointer;
	}
}