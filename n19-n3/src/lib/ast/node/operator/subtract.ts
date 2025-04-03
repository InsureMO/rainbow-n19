import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "-" */
export class SubtractNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Subtract;
	}
}