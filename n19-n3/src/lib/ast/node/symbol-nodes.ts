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

/** ".." */
export class RangeInclusiveNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RangeInclusive;
	}
}

/** "<.." */
export class RangeExclusiveLeftNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveLeft;
	}
}

/** "..<" */
export class RangeExclusiveRightNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveRight;
	}
}

/** "<..<" */
export class RangeExclusiveFullNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveFull;
	}
}

/** "*." */
export class SpreadDotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.SpreadDot;
	}
}

/** "?." */
export class SafeDotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.SafeDot;
	}
}

/** "?[" */
export class SafeIndexNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.SafeIndex;
	}
}

/** "]" */
export class SafeIndexCloseNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.SafeIndexClose;
	}
}

/** "??." */
export class SafeChainDotNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.SafeChainDot;
	}
}

/** "?:" */
export class ElvisNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Elvis;
	}
}

/** ".&" */
export class MethodPointerNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.MethodPointer;
	}
}

/** "::" */
export class MethodReferenceNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.MethodReference;
	}
}

/** "=~" */
export class RegexFindNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RegexFind;
	}
}

/** "==~" */
export class RegexMatchNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.RegexMatch;
	}
}

/** "**" */
export class PowerNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Power;
	}
}

/** "**=" */
export class PowerAssignNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.PowerAssign;
	}
}

/** "<=>" */
export class SpaceshipNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Spaceship;
	}
}

/** "===" */
export class IdenticalNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Identical;
	}
}

/** "!==" */
export class NotIdenticalNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.NotIdentical;
	}
}

/** "->" */
export class ArrowNode extends AbstractSymbolNode {
	get tokenId(): TokenId {
		return TokenId.Arrow;
	}
}
