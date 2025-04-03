import {AstNodeConstructor} from '../../../ast-node';
import {
	ArrowNode,
	ElvisNode,
	IdenticalNode,
	MethodPointerNode,
	MethodReferenceNode,
	NotIdenticalNode,
	PowerAssignNode,
	PowerNode,
	RangeExclusiveFullNode,
	RangeExclusiveLeftNode,
	RangeExclusiveRightNode,
	RangeInclusiveNode,
	RegexFindNode,
	RegexMatchNode,
	SafeChainDotNode,
	SafeDotNode,
	SafeIndexCloseNode,
	SafeIndexNode,
	SpaceshipNode,
	SpreadDotNode
} from '../../../node';
import {AstChars, AstOperators} from '../../chars';
import {AstVisitor} from '../../visitor';
import {AbstractMultipleCharsCaptor} from '../abstract-multiple-chars-captor';

/** ".." */
export class RangeInclusiveCaptor extends AbstractMultipleCharsCaptor<RangeInclusiveNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeInclusive, astVisitor);
	}

	/**
	 * check is not {@link TokenId.Ellipsis} or {@link TokenId.RangeExclusiveRight}
	 */
	protected checkFollowingChars(offset: number): boolean {
		const char = this.charAt(offset);
		return char !== AstChars.Dot && char !== AstOperators.LessThan;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeInclusiveNode> {
		return RangeInclusiveNode;
	}
}

/** "<.." */
export class RangeExclusiveLeftCaptor extends AbstractMultipleCharsCaptor<RangeExclusiveLeftNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeExclusiveLeft, astVisitor);
	}

	/**
	 * check is not {@link TokenId.RangeExclusiveFull}
	 */
	protected checkFollowingChars(offset: number): boolean {
		return this.charAt(offset) !== AstOperators.LessThan;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeExclusiveLeftNode> {
		return RangeExclusiveLeftNode;
	}
}

/** "..<" */
export class RangeExclusiveRightCaptor extends AbstractMultipleCharsCaptor<RangeExclusiveRightNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeExclusiveRight, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeExclusiveRightNode> {
		return RangeExclusiveRightNode;
	}
}

/** "<..<" */
export class RangeExclusiveFullCaptor extends AbstractMultipleCharsCaptor<RangeExclusiveFullNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RangeExclusiveFull, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RangeExclusiveFullNode> {
		return RangeExclusiveFullNode;
	}
}

/** "*." */
export class SpreadDotCaptor extends AbstractMultipleCharsCaptor<SpreadDotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SpreadDot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SpreadDotNode> {
		return SpreadDotNode;
	}
}

/** "?." */
export class SafeDotCaptor extends AbstractMultipleCharsCaptor<SafeDotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeDot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeDotNode> {
		return SafeDotNode;
	}
}

/** "?[" */
export class SafeIndexCaptor extends AbstractMultipleCharsCaptor<SafeIndexNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeIndex, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeIndexNode> {
		return SafeIndexNode;
	}
}

/** "]" */
export class SafeIndexCloseCaptor extends AbstractMultipleCharsCaptor<SafeIndexCloseNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeIndexClose, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeIndexCloseNode> {
		return SafeIndexCloseNode;
	}
}

/** "??." */
export class SafeChainDotCaptor extends AbstractMultipleCharsCaptor<SafeChainDotNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.SafeChainDot, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SafeChainDotNode> {
		return SafeChainDotNode;
	}
}

/** "?:" */
export class ElvisCaptor extends AbstractMultipleCharsCaptor<ElvisNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Elvis, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ElvisNode> {
		return ElvisNode;
	}
}

/** ".&" */
export class MethodPointerCaptor extends AbstractMultipleCharsCaptor<MethodPointerNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.MethodPointer, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<MethodPointerNode> {
		return MethodPointerNode;
	}
}

/** "::" */
export class MethodReferenceCaptor extends AbstractMultipleCharsCaptor<MethodReferenceNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.MethodReference, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<MethodReferenceNode> {
		return MethodReferenceNode;
	}
}

/** "=~" */
export class RegexFindCaptor extends AbstractMultipleCharsCaptor<RegexFindNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RegexFind, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RegexFindNode> {
		return RegexFindNode;
	}
}

/** "==~" */
export class RegexMatchCaptor extends AbstractMultipleCharsCaptor<RegexMatchNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.RegexMatch, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RegexMatchNode> {
		return RegexMatchNode;
	}
}

/** "**" */
export class PowerCaptor extends AbstractMultipleCharsCaptor<PowerNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Power, astVisitor);
	}

	/**
	 * check is not {@link TokenId.PowerAssign}
	 */
	protected checkFollowingChars(offset: number): boolean {
		return this.charAt(offset) !== AstOperators.Assign;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PowerNode> {
		return PowerNode;
	}
}

/** "**=" */
export class PowerAssignCaptor extends AbstractMultipleCharsCaptor<PowerAssignNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.PowerAssign, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<PowerAssignNode> {
		return PowerAssignNode;
	}
}

/** "<=>" */
export class SpaceshipCaptor extends AbstractMultipleCharsCaptor<SpaceshipNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Spaceship, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SpaceshipNode> {
		return SpaceshipNode;
	}
}

/** "===" */
export class IdenticalCaptor extends AbstractMultipleCharsCaptor<IdenticalNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Identical, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<IdenticalNode> {
		return IdenticalNode;
	}
}

/** "!==" */
export class NotIdenticalCaptor extends AbstractMultipleCharsCaptor<NotIdenticalNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.NotIdentical, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<NotIdenticalNode> {
		return NotIdenticalNode;
	}
}

/** "->" */
export class ArrowCaptor extends AbstractMultipleCharsCaptor<ArrowNode> {
	constructor(astVisitor: AstVisitor) {
		super(AstOperators.Arrow, astVisitor);
	}

	protected getAstNodeConstructor(): AstNodeConstructor<ArrowNode> {
		return ArrowNode;
	}
}
