import {TokenId} from '../../tokens';
import {AbstractOperatorNode} from './abstract-operator';

/** "]" */
export class SafeIndexCloseNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeIndexClose;
	}
}