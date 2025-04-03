import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "::" */
export class MethodReferenceNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.MethodReference;
	}
}