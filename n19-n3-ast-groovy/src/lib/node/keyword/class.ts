import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "class" */
export class ClassNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.CLASS;
	}
}