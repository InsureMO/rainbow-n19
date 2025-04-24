import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "~" */
export class BitnotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Bitnot;
	}
}