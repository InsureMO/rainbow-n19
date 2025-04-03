import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "var" */
export class VarNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.VAR;
	}
}