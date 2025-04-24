import {TokenId} from '../../../tokens';
import {AbstractSymbolNode} from '../../symbol';

/** "*" */
export class ImportAllMarkNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.ImportAllMark;
	}
}