import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "/" */
export class DivideNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Divide;
	}
}