import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "|" */
export class BitorNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Bitor;
	}
}