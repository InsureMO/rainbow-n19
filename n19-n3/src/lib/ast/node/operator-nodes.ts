import {TokenId} from '../tokens';
import {AbstractAstNode} from './abstract-node';

export abstract class AbstractOperatorNode extends AbstractAstNode {
}

/** ".." */
export class RangeInclusiveNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeInclusive;
	}
}

/** "<.." */
export class RangeExclusiveLeftNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveLeft;
	}
}

/** "..<" */
export class RangeExclusiveRightNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveRight;
	}
}

/** "<..<" */
export class RangeExclusiveFullNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RangeExclusiveFull;
	}
}

/** "*." */
export class SpreadDotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SpreadDot;
	}
}

/** "?." */
export class SafeDotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeDot;
	}
}

/** "?[" */
export class SafeIndexNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeIndex;
	}
}

/** "]" */
export class SafeIndexCloseNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeIndexClose;
	}
}

/** "??." */
export class SafeChainDotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SafeChainDot;
	}
}

/** "?:" */
export class ElvisNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Elvis;
	}
}

/** ".&" */
export class MethodPointerNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.MethodPointer;
	}
}

/** "::" */
export class MethodReferenceNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.MethodReference;
	}
}

/** "=~" */
export class RegexFindNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RegexFind;
	}
}

/** "==~" */
export class RegexMatchNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RegexMatch;
	}
}

/** "**" */
export class PowerNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Power;
	}
}

/** "**=" */
export class PowerAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.PowerAssign;
	}
}

/** "<=>" */
export class SpaceshipNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Spaceship;
	}
}

/** "===" */
export class IdenticalNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Identical;
	}
}

/** "!==" */
export class NotIdenticalNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotIdentical;
	}
}

/** "->" */
export class ArrowNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Arrow;
	}
}

/** "!instanceof" */
export class NotInstanceOfNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotInstanceOf;
	}
}

/** "!in" */
export class NotInNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotIn;
	}
}

/** "=" */
export class AssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Assign;
	}
}

/** ">" */
export class GreaterThanNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.GreaterThan;
	}
}

/** "<" */
export class LessThanNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.LessThan;
	}
}

/** "!" */
export class NotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Not;
	}
}

/** "~" */
export class BitnotNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Bitnot;
	}
}

/** "?" */
export class QuestionNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Question;
	}
}

/** ":" */
export class ColonNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Colon;
	}
}

/** "==" */
export class EqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Equal;
	}
}

/** "<=" */
export class LessThanOrEqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.LessThanOrEqual;
	}
}

/** ">=" */
export class GreaterThanOrEqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.GreaterThanOrEqual;
	}
}

/** "!=" */
export class NotEqualNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.NotEqual;
	}
}

/** "&&" */
export class AndNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.And;
	}
}

/** "||" */
export class OrNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Or;
	}
}

/** "++" */
export class IncreaseNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Increase;
	}
}

/** "--" */
export class DecNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Dec;
	}
}

/** "+" */
export class AddNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Add;
	}
}

/** "-" */
export class SubtractNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Subtract;
	}
}

/** "*" */
export class MultipleNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Multiple;
	}
}

/** "/" */
export class DivideNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Divide;
	}
}

/** "&" */
export class BitandNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Bitand;
	}
}

/** "|" */
export class BitorNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Bitor;
	}
}

/** "^" */
export class XorNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Xor;
	}
}

/** "%" */
export class ModNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Mod;
	}
}

/** "+=" */
export class AddAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.AddAssign;
	}
}

/** "-=" */
export class SubAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.SubAssign;
	}
}

/** "*=" */
export class MulAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.MulAssign;
	}
}

/** "/=" */
export class DivAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.DivAssign;
	}
}

/** "&=" */
export class AndAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.AndAssign;
	}
}

/** "|=" */
export class OrAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.OrAssign;
	}
}

/** "^=" */
export class XorAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.XorAssign;
	}
}

/** "%=" */
export class ModAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.ModAssign;
	}
}

/** "<<=" */
export class LshiftAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.LshiftAssign;
	}
}

/** ">>=" */
export class RshiftAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.RshiftAssign;
	}
}

/** ">>>=" */
export class UrshiftAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.UrshiftAssign;
	}
}

/** "?=" */
export class ElvisAssignNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.ElvisAssign;
	}
}

/** "..." */
export class EllipsisNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Ellipsis;
	}
}

/** "*" */
export class AsteriskNode extends AbstractOperatorNode {
	get tokenId(): TokenId {
		return TokenId.Asterisk;
	}
}
