import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "@interface" */
export class AtInterfaceNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.AT_INTERFACE;
	}
}