import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractSymbolNode extends AbstractAstNode {
}

/** ";" */
export class SemicolonNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Semi;
	}
}

/** "." */
export class DotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Dot;
	}
}

/** "*" */
export class SpreadDotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.SpreadDot;
	}
}
