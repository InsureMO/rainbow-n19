import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * "#!"
 */
export class ScriptCommandStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.ScriptCommandStartMark;
	}
}
