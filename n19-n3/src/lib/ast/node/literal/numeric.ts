import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractAstNode, AbstractContainerAstNode} from '../abstract';
import {LiteralAstNode} from './literal';

/** "+", "-" */
export class NumericSignPartNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.NumericSignPart;
	}
}

/** numbers */
export class NumericBasePartNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.NumericBasePart;
	}
}

/** "_" */
export class NumericUnderscorePartNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.NumericUnderscorePart;
	}
}

/** gG: BigInteger/BigDecimal, lL: Long, iI: Integer, dD: double, fF: float */
export class NumericSuffixPartNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.NumericSuffixPart;
	}
}

/** 0b of [+-]0b... */
export class BinaryStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.BinaryStartMark;
	}
}

export class BinaryLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.BinaryLiteral;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.NumericSignPart,
			TokenId.BinaryStartMark,
			TokenId.NumericBasePart,
			TokenId.NumericUnderscorePart,
			TokenId.NumericSuffixPart
		].includes(node.tokenId);
	}
}

/** 0 of [+-]0... */
export class OctalStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.OctalStartMark;
	}
}

/** [+-]0..., "..." means numbers */
export class OctalLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.OctalLiteral;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.NumericSignPart,
			TokenId.OctalStartMark,
			TokenId.NumericBasePart,
			TokenId.NumericUnderscorePart,
			TokenId.NumericSuffixPart
		].includes(node.tokenId);
	}
}

/** 0x of [+-]0x... */
export class HexadecimalStartMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.HexadecimalStartMark;
	}
}

/** [+-]0x..., "..." means numbers */
export class HexadecimalLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.HexadecimalLiteral;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.NumericSignPart,
			TokenId.HexadecimalStartMark,
			TokenId.NumericBasePart,
			TokenId.NumericUnderscorePart,
			TokenId.NumericSuffixPart
		].includes(node.tokenId);
	}
}

/** [+-]..., "..." means numbers */
export class IntegralLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.IntegralLiteral;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.NumericSignPart,
			TokenId.NumericBasePart,
			TokenId.NumericUnderscorePart,
			TokenId.NumericSuffixPart
		].includes(node.tokenId);
	}
}

/** "E", "e" */
export class DecimalExponentSymbolNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.DecimalExponentSymbol;
	}
}

/** [+-]..., "..." means numbers. exponent part of decimal literal, after symbol */
export class DecimalExponentPartNode extends AbstractContainerAstNode {
	get tokenId(): TokenId {
		return TokenId.DecimalExponentPart;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.NumericBasePart,
			TokenId.NumericUnderscorePart
		].includes(node.tokenId);
	}
}

/** [+-]..., "..." means float, double or exponent number */
export class DecimalLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.DecimalLiteral;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.NumericSignPart,
			TokenId.NumericBasePart,
			TokenId.NumericUnderscorePart,
			TokenId.DecimalExponentSymbol,
			TokenId.DecimalExponentPart,
			TokenId.NumericSuffixPart
		].includes(node.tokenId);
	}
}
