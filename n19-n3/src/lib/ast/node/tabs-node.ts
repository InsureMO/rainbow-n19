import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export class TabsNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.Tabs;
	}
}
