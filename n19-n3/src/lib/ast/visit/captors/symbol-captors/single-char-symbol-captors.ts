import {AstNodeConstructor} from '../../../ast-node';
import {
	AsteriskNode,
	CommaNode,
	DotNode,
	LAngleBrackNode,
	LBraceNode,
	LBrackNode,
	LParenNode,
	RAngleBrackNode,
	RBraceNode,
	RBrackNode,
	RParenNode,
	SemicolonNode
} from '../../../node';
import {AstChars} from '../../chars';
import {Char} from '../../types';
import {AbstractSingleCharCaptor} from '../abstract-single-char-captor';

/** "." */
export class DotCaptor extends AbstractSingleCharCaptor<DotNode> {
	protected get char(): Char {
		return AstChars.Dot;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<DotNode> {
		return DotNode;
	}
}

/** "," */
export class CommaCaptor extends AbstractSingleCharCaptor<CommaNode> {
	protected get char(): Char {
		return AstChars.Comma;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<CommaNode> {
		return CommaNode;
	}
}

/** ";" */
export class SemicolonCaptor extends AbstractSingleCharCaptor<SemicolonNode> {
	protected get char(): Char {
		return AstChars.Semicolon;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<SemicolonNode> {
		return SemicolonNode;
	}
}

/** "*" */
export class AsteriskCaptor extends AbstractSingleCharCaptor<AsteriskNode> {
	protected get char(): Char {
		return AstChars.AsteriskMark;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<AsteriskNode> {
		return AsteriskNode;
	}
}

/** "{" */
export class LBraceCaptor extends AbstractSingleCharCaptor<LBraceNode> {
	protected get char(): Char {
		return AstChars.LBrace;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBraceNode> {
		return LBraceNode;
	}
}

/** "}" */
export class RBraceCaptor extends AbstractSingleCharCaptor<RBraceNode> {
	protected get char(): Char {
		return AstChars.RBrace;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RBraceNode> {
		return RBraceNode;
	}
}

/** "[" */
export class LBrackCaptor extends AbstractSingleCharCaptor<LBrackNode> {
	protected get char(): Char {
		return AstChars.LBrack;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LBrackNode> {
		return LBrackNode;
	}
}

/** "]" */
export class RBrackCaptor extends AbstractSingleCharCaptor<RBrackNode> {
	protected get char(): Char {
		return AstChars.RBrack;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RBrackNode> {
		return RBrackNode;
	}
}

/** "(" */
export class LParenCaptor extends AbstractSingleCharCaptor<LParenNode> {
	protected get char(): Char {
		return AstChars.LParen;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LParenNode> {
		return LParenNode;
	}
}

/** ")" */
export class RParenCaptor extends AbstractSingleCharCaptor<RParenNode> {
	protected get char(): Char {
		return AstChars.RParen;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RParenNode> {
		return RParenNode;
	}
}

/** "<" */
export class LAngleBrackCaptor extends AbstractSingleCharCaptor<LAngleBrackNode> {
	protected get char(): Char {
		return AstChars.LAngleBrack;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<LAngleBrackNode> {
		return LAngleBrackNode;
	}
}

/** ">" */
export class RAngleBrackCaptor extends AbstractSingleCharCaptor<RAngleBrackNode> {
	protected get char(): Char {
		return AstChars.RAngleBrack;
	}

	protected getAstNodeConstructor(): AstNodeConstructor<RAngleBrackNode> {
		return RAngleBrackNode;
	}
}
