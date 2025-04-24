import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "*" */
export class MultipleNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Multiple;
	}
}