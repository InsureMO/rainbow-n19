import {AstNode} from '@rainbow-n19/n3-ast';
import {TokenId} from '../../tokens';
import {AbstractAstNode, AbstractContainerAstNode} from '../abstract';
import {LiteralAstNode} from './literal';

/** " */
export class GStringQuotationMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringQuotationMark;
	}
}

/** """ */
export class GStringQuotationMarkMLNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringQuotationMarkML;
	}
}

/** / */
export class SlashyGStringQuotationMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.SlashyGStringQuotationMark;
	}
}

/** $/ */
export class DollarSlashyGStringQuotationMarkBeginNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.DollarSlashyGStringQuotationMarkBegin;
	}
}

/** /$ */
export class DollarSlashyGStringQuotationMarkEndNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.DollarSlashyGStringQuotationMarkEnd;
	}
}

/** \/ */
export class SlashyGStringBackslashEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.SlashyGStringBackslashEscape;
	}
}

/** $$ */
export class DollarSlashyGStringDollarEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.DollarSlashyGStringDollarEscape;
	}
}

/** $/ */
export class DollarSlashyGStringSlashEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.DollarSlashyGStringSlashEscape;
	}
}

/** string part in gstring */
export class GStringContentNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringContent;
	}
}

/** $ of ${...} or $... */
export class GStringInterpolationSymbolNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringInterpolationSymbol;
	}
}

/** ${...}, $..., the "..." part, any groovy expression is good for it */
export class GStringInterpolationContentNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringInterpolationContent;
	}
}

/** ${...}, $..., "..." means interpolation, any groovy expression is good for it */
export class GStringInterpolationNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringInterpolation;
	}
}

export class GStringLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.GStringLiteral;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}

export class SlashyGStringLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.SlashyGStringLiteral;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}

export class DollarSlashyGStringLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.DollarSlashyGStringLiteral;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	protected couldBeChildOfMe(_node: AstNode): boolean {
		return true;
	}
}
