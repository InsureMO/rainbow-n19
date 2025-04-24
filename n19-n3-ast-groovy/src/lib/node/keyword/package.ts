import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "package" */
export class PackageNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PACKAGE;
	}
}
