import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "native", for method */
export class NativeNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.NATIVE;
	}
}