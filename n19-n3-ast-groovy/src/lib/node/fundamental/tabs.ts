import {TokenId} from '../../tokens';
import {AbstractAstNode} from '../abstract';

/**
 * one or more "\t".
 */
export class TabsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Tabs;
	}
}
