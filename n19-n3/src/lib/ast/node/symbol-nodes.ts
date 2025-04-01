import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractSymbolNode extends AbstractAstNode {
}

/** ";" */
export class SemicolonNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Semicolon;
	}
}

/** "," */
export class CommaNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Comma;
	}
}

/** "." */
export class DotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Dot;
	}
}

/** "*" */
export class AsteriskNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Asterisk;
	}
}

/** "{" */
export class LBraceNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LBrace;
	}
}

/** "}" */
export class RBraceNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RBrace;
	}
}

/** "[" */
export class LBrackNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LBrack;
	}
}

/** "]" */
export class RBrackNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RBrack;
	}
}

/** "(" */
export class LParenNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LParen;
	}
}

/** ")" */
export class RParenNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RParen;
	}
}

/** "<" */
export class LAngleBrackNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.LAngleBrack;
	}
}

/** ">" */
export class RAngleBrackNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RAngleBrack;
	}
}
