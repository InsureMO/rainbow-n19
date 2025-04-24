import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "**" */
export class PowerNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Power;
	}
}