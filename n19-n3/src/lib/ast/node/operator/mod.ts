import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "%" */
export class ModNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Mod;
	}
}