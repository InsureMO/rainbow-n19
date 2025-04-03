import {TokenId} from '../../tokens';
import {AbstractKeywordNode} from './abstract-keyword';

/** "import" */
export class ImportNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.IMPORT;
	}
}
