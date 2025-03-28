import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractKeywordNode extends AbstractAstNode {
}

/** "package" */
export class KwPackageNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.PACKAGE;
	}
}

/** "as" */
export class KwAsNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.AS;
	}
}

/** "static" */
export class KwStaticNode extends AbstractKeywordNode {
	get tokenId(): TokenId {
		return TokenId.STATIC;
	}
}
