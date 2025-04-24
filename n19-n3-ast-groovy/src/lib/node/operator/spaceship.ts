import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "<=>" */
export class SpaceshipNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Spaceship;
	}
}