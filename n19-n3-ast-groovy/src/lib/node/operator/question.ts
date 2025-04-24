import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "?" */
export class QuestionNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Question;
	}
}