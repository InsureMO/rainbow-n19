import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "interface" */
export class InterfaceNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.INTERFACE;
	}
}