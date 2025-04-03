import {AstNode} from '../../ast-node';
import {TokenId} from '../../tokens';
import {AbstractAstNode, AbstractContainerAstNode} from '../abstract';
import {LiteralAstNode} from './literal';

/** "'" */
export class StringQuotationMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringQuotationMark;
	}
}

/** ''' */
export class StringQuotationMarkMLNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringQuotationMarkML;
	}
}

/** \ after multiple line mark, and no character after it, for all kinds of multiple string and gstring */
export class StringMLFirstNewLineEraserNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringMLFirstNewLineEraser;
	}
}

/** \b */
export class StringBackspaceEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringBackspaceEscape;
	}
}

/** \f */
export class StringFormFeedEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringFormFeedEscape;
	}
}

/** \n */
export class StringNewLineEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringNewLineEscape;
	}
}

/** \r */
export class StringCarriageReturnEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringCarriageReturnEscape;
	}
}

/** \s */
export class StringSingleSpaceEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringSingleSpaceEscape;
	}
}

/** \t */
export class StringTabulationEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringTabulationEscape;
	}
}

/** \\ */
export class StringBackslashEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringBackslashEscape;
	}
}

/** \', in string, or optional in multiple string, gstring and multiple line gstring */
export class StringSingleQuoteEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringSingleQuoteEscape;
	}
}

/** \" in gstring, or optional in multiple string and multiple line gstring */
export class StringDoubleQuoteEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringDoubleQuoteEscape;
	}
}

/** \$, not for slashy gstring or dollar slashy gstring */
export class StringDollarEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringDollarEscape;
	}
}

/** \u followed by 4 hexadecimal digits */
export class StringUnicodeEscapeNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringUnicodeEscape;
	}
}

/** \u */
export class StringUnicodeEscapeMarkNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringUnicodeEscapeMark;
	}
}

/** 4 hexadecimal digits follows \u */
export class StringUnicodeEscapeContentNode extends AbstractAstNode {
	get tokenId(): TokenId {
		return TokenId.StringUnicodeEscapeContent;
	}
}

export class StringLiteralNode extends AbstractContainerAstNode implements LiteralAstNode {
	get tokenId(): TokenId {
		return TokenId.StringLiteral;
	}

	protected couldBeChildOfMe(node: AstNode): boolean {
		return [
			TokenId.StringQuotationMark,
			TokenId.StringQuotationMarkML,
			TokenId.StringMLFirstNewLineEraser,
			TokenId.StringBackspaceEscape,
			TokenId.StringFormFeedEscape,
			TokenId.StringNewLineEscape,
			TokenId.StringCarriageReturnEscape,
			TokenId.StringSingleSpaceEscape,
			TokenId.StringTabulationEscape,
			TokenId.StringBackslashEscape,
			TokenId.StringSingleQuoteEscape,
			TokenId.StringDoubleQuoteEscape,
			TokenId.StringDollarEscape,
			TokenId.StringUnicodeEscape,
			TokenId.StringUnicodeEscapeMark,
			TokenId.StringUnicodeEscapeContent,
			TokenId.NewLine,
			TokenId.Whitespaces,
			TokenId.Tabs
		].includes(node.tokenId);
	}
}
