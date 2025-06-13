import {TokenId, TokenType} from '../../tokens';
import {
	ASLRecognizeUtils,
	DivideAssignRecognizeUtils,
	DSGLRecognizeUtils,
	GLRecognizeUtils,
	GStringInterpolationRecognizeUtils,
	MultipleLinesCommentRecognizeUtils,
	NSLRecognizeUtils,
	NumericBasePartRecognizer,
	RecognizeCommonUtils,
	ScriptCommandRecognizeUtils,
	SGLRecognizeUtils,
	SingleLineCommentRecognizeUtils,
	SLRecognizeUtils,
	ThreadsafeRecognizeUtils
} from '../node-recognize-specific';
import {NodeRehydration} from './build-rehydrate-funcs';
import {NodeRecognizeUtils} from './recognize-utils';
import {AstRecognition} from './recognizer';
import {
	CustomClass,
	DeclareAsParent,
	DeclareAsParentWhenAndOtherwise,
	DisableToCharsWhenParentTokenTypeIsStringLiteral,
	DoDeclareAsParentWhen,
	DoRehydrateWhen,
	GroovyAstNodeRecognizerConstructor,
	NodeAsParentDeclaration,
	NodeRehydrateFunc,
	PreserveWhenParentIsOneOfTokenIds,
	PreserveWhenParentIsTokenType,
	RecognizeBasisDefs,
	RecognizeBasisType,
	RehydrateTokenToWhen,
	RehydrateTokenToWhenParentTokenIdIsOneOf,
	RehydrateTokenToWhenParentTokenTypeIs,
	RehydrateTokenToWhenParentTokenTypeIsNot,
	RehydrateTokenUseFuncWhen,
	RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf,
	RehydrateTokenUseFuncWhenParentTokenIdIsOneOf,
	RehydrateTokenUseFuncWhenParentTokenTypeIs,
	RehydrateTokenUseFuncWhenParentTokenTypeIsNot
} from './types';

// custom recognize class
const CustomClass = (clazz: GroovyAstNodeRecognizerConstructor): CustomClass => [RecognizeBasisType.CustomClass, clazz];
// rehydrate
/** disable the default rehydrate to chars when parent token type is string literal */
const DisableToCharsWhenParentTokenTypeIsStringLiteral: DisableToCharsWhenParentTokenTypeIsStringLiteral = [RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral];
const RehydrateToken = {
	whenParentTokenIdIsOneOf: (tokenId: TokenId, ...tokenIds: Array<TokenId>) => {
		return {
			to: (to: TokenId | [TokenId, TokenType]): RehydrateTokenToWhenParentTokenIdIsOneOf => {
				return [RecognizeBasisType.RehydrateTokenToWhenParentTokenIdIsOneOf, [tokenId, ...tokenIds], to];
			},
			use: (func: NodeRehydrateFunc): RehydrateTokenUseFuncWhenParentTokenIdIsOneOf => {
				return [RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenIdIsOneOf, [tokenId, ...tokenIds], func];
			}
		};
	},
	whenParentTokenIdIsNotAnyOf: (tokenId: TokenId, ...tokenIds: Array<TokenId>) => {
		return {
			use: (func: NodeRehydrateFunc): RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf => {
				return [RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenIdIsNotAnyOf, [tokenId, ...tokenIds], func];
			}
		};
	},
	whenParentTokenTypeIs: (tokenType: TokenType) => {
		return {
			to: (to: TokenId | [TokenId, TokenType]): RehydrateTokenToWhenParentTokenTypeIs => {
				return [RecognizeBasisType.RehydrateTokenToWhenParentTokenTypeIs, tokenType, to];
			},
			use: (func: NodeRehydrateFunc): RehydrateTokenUseFuncWhenParentTokenTypeIs => {
				return [RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenTypeIs, tokenType, func];
			}
		};
	},
	whenParentTokenTypeIsNot: (tokenType: TokenType) => {
		return {
			to: (to: TokenId | [TokenId, TokenType]): RehydrateTokenToWhenParentTokenTypeIsNot => {
				return [RecognizeBasisType.RehydrateTokenToWhenParentTokenTypeIsNot, tokenType, to];
			},
			use: (func: NodeRehydrateFunc): RehydrateTokenUseFuncWhenParentTokenTypeIsNot => {
				return [RecognizeBasisType.RehydrateTokenUseFuncWhenParentTokenTypeIsNot, tokenType, func];
			}
		};
	},
	when: (when: DoRehydrateWhen, ...more: Array<DoRehydrateWhen>) => {
		let check: DoRehydrateWhen;
		if (more == null || more.length === 0) {
			check = when;
		} else {
			check = (recognition: AstRecognition): boolean => [when, ...more].some(when => when(recognition));
		}
		return {
			to: (to: TokenId | [TokenId, TokenType]): RehydrateTokenToWhen => {
				return [RecognizeBasisType.RehydrateTokenToWhen, check, to];
			},
			use: (func: NodeRehydrateFunc): RehydrateTokenUseFuncWhen => {
				return [RecognizeBasisType.RehydrateTokenUseFuncWhen, check, func];
			}
		};
	}
};
const RehydrateToIdentifierWhenAfterDotDirectly = RehydrateToken.when(RecognizeCommonUtils.isAfterDot).to([TokenId.Identifier, TokenType.Identifier]);
// preserve
const PreserveWhenParentIsOneOfTokenIds = (tokenId: TokenId, ...tokenIds: Array<TokenId>): PreserveWhenParentIsOneOfTokenIds => {
	return [RecognizeBasisType.PreserveWhenParentIsOneOfTokenIds, tokenId, ...tokenIds];
};
const PreserveWhenParentIsTokenType = (tokenType: TokenType): PreserveWhenParentIsTokenType => {
	return [RecognizeBasisType.PreserveWhenParentIsTokenType, tokenType];
};
const PreserveWhenParentIsCsscmfDeclaration = PreserveWhenParentIsOneOfTokenIds(TokenId.Tmp$CsscmfDeclaration);
const PreserveWhenParentIsTypeDeclaration = PreserveWhenParentIsTokenType(TokenType.TypeDeclaration);
const PreserveWhenParentIsMethodDeclaration = PreserveWhenParentIsTokenType(TokenType.MethodDeclaration);
const PreserveWhenParentIsFieldDeclaration = PreserveWhenParentIsTokenType(TokenType.FieldDeclaration);

// declare as parent
interface DeclareAsParentHelper {
	(declaration: NodeAsParentDeclaration, ...declarations: Array<NodeAsParentDeclaration>): DeclareAsParent;
	/** fulfill any of given when */
	when: (when: DoDeclareAsParentWhen, ...more: Array<DoDeclareAsParentWhen>) => {
		to: (declaration: NodeAsParentDeclaration) => {
			otherwise: (declaration: NodeAsParentDeclaration) => DeclareAsParentWhenAndOtherwise
		}
	};
}

// @ts-expect-error properties will be appended later
const DeclareAsParent: DeclareAsParentHelper = (declaration: NodeAsParentDeclaration, ...declarations: Array<NodeAsParentDeclaration>): DeclareAsParent => {
	return [RecognizeBasisType.DeclareAsParent, declaration, ...declarations];
};
DeclareAsParent.when = (when: DoDeclareAsParentWhen, ...more: Array<DoDeclareAsParentWhen>) => {
	return {
		to: (to: NodeAsParentDeclaration) => {
			return {
				otherwise: (otherwise: NodeAsParentDeclaration): DeclareAsParentWhenAndOtherwise => {
					if (more == null || more.length === 0) {
						return [RecognizeBasisType.DeclareAsParentWhenAndOtherwise, when, to, otherwise];
					} else {
						return [RecognizeBasisType.DeclareAsParentWhenAndOtherwise, (recognition: AstRecognition): boolean => {
							return [when, ...more].some(when => when(recognition));
						}, to, otherwise];
					}
				}
			};
		}
	};
};

/**
 * 0. for newline, whitespaces, tabs, undetermined chars, chars, there is no default rehydration applied,
 * 1. rehydrate to chars when parent token type is sl/ml comment or script command (when enabled),
 *    note the ml comment end mark will not be rehydrated when parent is ml comment,
 * 2. rehydrate to chars when parent token type is {@link TokenType.StringLiteral},
 *    unless {@link RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral} declared.
 *    and it is the first rehydration if it is applied.
 *    this rehydrate function will be applied on almost all tokens except string related.
 */
export const RecognizerBasis: Readonly<Partial<{ [key in TokenId]: RecognizeBasisDefs }>> = {
	// separator
	[TokenId.LBrace]: [DeclareAsParent([TokenId.CodeBlock, TokenType.LogicBlock])],
	[TokenId.RBrace]: [
		RehydrateToken.when(GStringInterpolationRecognizeUtils.startsFromLBrace).to([TokenId.GStringInterpolationRBraceEndMark, TokenType.Mark])
	],
	[TokenId.LParen]: [DeclareAsParent([TokenId.ParenBlock, TokenType.LogicBlock])],
	[TokenId.RParen]: 'NotRequired',
	[TokenId.LBrack]: 'TODO',
	[TokenId.RBrack]: 'NotRequired',
	[TokenId.At]: [
		DeclareAsParent.when(RecognizeCommonUtils.isAfterDot)
			// after dot, x.@y
			.to([TokenId.AtFieldPathElement, TokenType.PathElement])
			// not after dot, @x
			.otherwise([TokenId.AnnotationDeclaration, TokenType.AnnotationDeclaration])
	],
	[TokenId.Semicolon]: 'NotRequired',
	[TokenId.Comma]: 'NotRequired',
	[TokenId.Dot]: 'NotRequired',
	// operators
	[TokenId.RangeInclusive]: 'TODO',
	[TokenId.RangeExclusiveLeft]: 'TODO',
	[TokenId.RangeExclusiveRight]: 'TODO',
	[TokenId.RangeExclusiveFull]: 'TODO',
	[TokenId.SpreadDot]: 'TODO',
	[TokenId.SafeDot]: 'TODO',
	[TokenId.SafeIndex]: 'TODO',
	[TokenId.SafeIndexClose]: 'TODO',
	[TokenId.SafeChainDot]: 'TODO',
	[TokenId.Elvis]: 'TODO',
	[TokenId.ElvisAssign]: 'TODO',
	[TokenId.MethodPointer]: 'TODO',
	[TokenId.RegexFind]: 'TODO',
	[TokenId.RegexMatch]: 'TODO',
	[TokenId.Power]: 'TODO',
	[TokenId.PowerAssign]: 'TODO',
	[TokenId.Spaceship]: 'TODO',
	[TokenId.Identical]: 'TODO',
	[TokenId.NotIdentical]: 'TODO',
	[TokenId.IN]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.NOT_IN]: 'TODO',
	[TokenId.NOT_INSTANCEOF]: 'TODO',
	[TokenId.Assign]: 'TODO',
	[TokenId.GreaterThan]: 'TODO',
	[TokenId.LessThan]: 'TODO',
	[TokenId.Not]: 'TODO',
	[TokenId.Bitnot]: 'TODO',
	[TokenId.Question]: 'TODO',
	[TokenId.Colon]: 'TODO',
	[TokenId.Equal]: 'TODO',
	[TokenId.LessThanOrEqual]: 'TODO',
	[TokenId.GreaterThanOrEqual]: 'TODO',
	[TokenId.NotEqual]: 'TODO',
	[TokenId.And]: 'TODO',
	[TokenId.Or]: 'TODO',
	[TokenId.Increase]: 'TODO',
	[TokenId.Decrease]: 'TODO',
	[TokenId.Add]: 'TODO',
	[TokenId.Subtract]: 'TODO',
	[TokenId.Multiple]: 'TODO',
	[TokenId.Divide]: 'TODO',
	[TokenId.Bitand]: 'TODO',
	[TokenId.Bitor]: 'TODO',
	[TokenId.Xor]: 'TODO',
	[TokenId.Mod]: 'TODO',
	[TokenId.Lshift]: 'TODO',
	[TokenId.Rshift]: 'TODO',
	[TokenId.Urshift]: 'TODO',
	[TokenId.AddAssign]: 'TODO',
	[TokenId.SubtractAssign]: 'TODO',
	[TokenId.MultipleAssign]: 'TODO',
	[TokenId.DivideAssign]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to / and $ when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(DivideAssignRecognizeUtils.splitSGL),
		RehydrateToken.whenParentTokenTypeIs(TokenType.StringLiteral).to([TokenId.Chars, TokenType.Chars])
	],
	[TokenId.BitandAssign]: 'TODO',
	[TokenId.BitorAssign]: 'TODO',
	[TokenId.XorAssign]: 'TODO',
	[TokenId.ModAssign]: 'TODO',
	[TokenId.LshiftAssign]: 'TODO',
	[TokenId.RshiftAssign]: 'TODO',
	[TokenId.UrshiftAssign]: 'TODO',
	[TokenId.MethodReference]: 'TODO',
	[TokenId.Ellipsis]: 'TODO',
	[TokenId.Arrow]: 'TODO',
	[TokenId.INSTANCEOF]: [RehydrateToIdentifierWhenAfterDotDirectly],
	// mark
	[TokenId.ScriptCommandStartMark]: [
		RehydrateToken.when(NodeRecognizeUtils.isScriptCommandNotAllowed).use(ScriptCommandRecognizeUtils.rehydrateScriptCommandStartMarkTo2Parts),
		DeclareAsParent([TokenId.ScriptCommand, TokenType.ScriptCommand])
	],
	// created in on child appended pointcut of sl/ml comment declaration, and node recognizer will not be used under any circumstances.
	[TokenId.CommentKeyword]: 'NotRequired',
	// created in on child appended pointcut of sl/ml comment declaration, and node recognizer will not be used under any circumstances.
	[TokenId.CommentHighlightChars]: 'NotRequired',
	[TokenId.SingleLineCommentStartMark]: [ // //
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to / (slashy gstring literal end mark) and / when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(SingleLineCommentRecognizeUtils.splitStartMarkSGL),
		// rehydrate to chars when parent is any string literal
		RehydrateToken.whenParentTokenTypeIs(TokenType.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		DeclareAsParent([TokenId.SingleLineComment, TokenType.Comments])
	],
	[TokenId.MultipleLinesCommentStartMark]: [ // /*
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to / and * when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(MultipleLinesCommentRecognizeUtils.splitStartMarkSGL),
		// rehydrate to chars when parent is any string literal
		RehydrateToken.whenParentTokenTypeIs(TokenType.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		DeclareAsParent([TokenId.MultipleLinesComment, TokenType.Comments])
	],
	[TokenId.MultipleLinesCommentEndMark]: [ // */
		// ml comment end mark will not apply the default to chars rehydration when parent is ml comment,
		// it is built-in, no need to declare as configuration
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to * and / when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(MultipleLinesCommentRecognizeUtils.splitEndMarkSGL),
		// rehydrate to chars when parent is any string literal
		RehydrateToken.whenParentTokenTypeIs(TokenType.StringLiteral).to([TokenId.Chars, TokenType.Chars])
	],
	// created in on child appended pointcut of ml comment declaration, and node recognizer will not be used under any circumstances.
	[TokenId.MultipleLinesCommentsHeadAsterisks]: 'NotRequired',
	// number literal
	// it is created inside the logic of rebuilding the number literal node and node recognizer will not be used under any circumstances.
	// note the created inside logic is for exponent sign only, not for the sign of whole number literal
	// and sign of whole number literal still treated as add/subtract, will not be included as start of number literal
	[TokenId.NumericSignPart]: 'NotRequired',
	[TokenId.NumericBasePart]: [
		// ToCharsWhenParentTokenTypeIsStringLiteral still works here
		CustomClass(NumericBasePartRecognizer)
	],
	// it is created inside the logic of rebuilding the number literal node and node recognizer will not be used under any circumstances.
	[TokenId.NumericSuffixPart]: 'NotRequired',
	// it is created inside the logic of rebuilding the number literal node and node recognizer will not be used under any circumstances.
	[TokenId.BinaryStartMark]: 'NotRequired',
	// it is created inside the logic of rebuilding the number literal node and node recognizer will not be used under any circumstances.
	[TokenId.OctalStartMark]: 'NotRequired',
	// it is created inside the logic of rebuilding the number literal node and node recognizer will not be used under any circumstances.
	[TokenId.HexadecimalStartMark]: 'NotRequired',
	// it is created inside the logic of rebuilding the number literal node and node recognizer will not be used under any circumstances.
	[TokenId.DecimalExponentMark]: 'NotRequired',
	// boolean literal
	[TokenId.BooleanTrue]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.BooleanFalse]: [RehydrateToIdentifierWhenAfterDotDirectly],
	// string literal
	[TokenId.StringQuotationMark]: [ // '
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars, when parent is standard/slashy/dollar slashy gstring literal
		RehydrateToken
			.whenParentTokenIdIsOneOf(TokenId.GStringLiteral, TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral)
			.to([TokenId.Chars, TokenType.Chars]),
		// it is an incorrect syntax, should be a single quotation escape
		RehydrateToken.when(SLRecognizeUtils.isMultipleLines).to([TokenId.Chars, TokenType.Chars]),
		// only in sl string literal, since ml already rehydrated
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral),
		DeclareAsParent([TokenId.StringLiteral, TokenType.StringLiteral])
	],
	[TokenId.StringQuotationMarkML]: [ // '''
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is standard/slashy/dollar slashy gstring literal
		RehydrateToken
			.whenParentTokenIdIsOneOf(TokenId.GStringLiteral, TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral)
			.to([TokenId.Chars, TokenType.Chars]),
		// split when start mark of literal is SL mark
		RehydrateToken.when(SLRecognizeUtils.isSingleLine).use(SLRecognizeUtils.splitStringQuotationMarkML),
		// only in ml string literal since sl already rehydrated
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral),
		DeclareAsParent([TokenId.StringLiteral, TokenType.StringLiteral])
	],
	// it is rehydrated from undetermined chars, so it always appears in the right place.
	[TokenId.StringMLNewLineEraser]: [ // \
		DisableToCharsWhenParentTokenTypeIsStringLiteral
	],
	[TokenId.StringBackspaceEscape]: [ // \b
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and b when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitBackspaceEscapeNSL)
	],
	[TokenId.StringFormFeedEscape]: [ // \f
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and f when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitFormFeedEscapeNSL)
	],
	[TokenId.StringNewLineEscape]: [ // \n
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and n when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitNewlineEscapeNSL)
	],
	[TokenId.StringCarriageReturnEscape]: [ // \r
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and r when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitCarriageReturnEscapeNSL)
	],
	[TokenId.StringTabulationEscape]: [ // \t
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and t when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitTabulationEscapeNSL)
	],
	[TokenId.StringBackslashEscape]: [ // \\
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to \ and \ when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(SGLRecognizeUtils.splitBackslashEscapeSGL),
		// split to \ and \ when parent is dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.DollarSlashyGStringLiteral).to([TokenId.UndeterminedChars, TokenType.UndeterminedChars]),
		// split to \ and \ when parent is any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).to([TokenId.UndeterminedChars, TokenType.UndeterminedChars])
	],
	[TokenId.StringSingleQuoteEscape]: [ // \'
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and ' when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitSingleQuoteEscapeNSL)
	],
	[TokenId.StringDoubleQuoteEscape]: [ // \"
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and " when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitDoubleQuoteEscapeNSL)
	],
	[TokenId.StringDollarEscape]: [ // \$
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to \ and $ when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(SGLRecognizeUtils.splitDollarEscapeSGL),
		// split to \ and $ when parent is dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.DollarSlashyGStringLiteral).use(DSGLRecognizeUtils.splitDollarEscapeDSGL),
		// split to \ and $ when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitDollarEscapeNSL)
	],
	[TokenId.StringOctalEscape]: [ // \0 ~ \7, \00 ~ \77, \000 ~ \777
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rebuild octal escape node, when parent token id is string literal or gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral, TokenId.GStringLiteral).use(ASLRecognizeUtils.rebuildOctalEscape),
		// rehydrate to chars when parent is slashy gstring literal or dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// otherwise, split to \ and ...
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitOctalEscapeNSL)
	],
	// it is created inside the logic of rebuilding the octal escape node and node recognizer will not be used under any circumstances.
	[TokenId.StringOctalEscapeMark]: 'NotRequired',
	// it is created inside the logic of rebuilding the octal escape node and node recognizer will not be used under any circumstances.
	[TokenId.StringOctalEscapeContent]: 'NotRequired',
	[TokenId.StringUnicodeEscape]: [ // \u0000 ~ \uFFFF
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rebuild Unicode escape node, when parent token type is string literal
		RehydrateToken.whenParentTokenTypeIs(TokenType.StringLiteral).use(ASLRecognizeUtils.rebuildUnicodeEscape),
		// otherwise, split to \ and u....
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitUnicodeEscapeNSL)
	],
	// it is created inside the logic of rebuilding the unicode escape node and node recognizer will not be used under any circumstances.
	[TokenId.StringUnicodeEscapeMark]: 'NotRequired',
	// it is created inside the logic of rebuilding the unicode escape node and node recognizer will not be used under any circumstances.
	[TokenId.StringUnicodeEscapeContent]: 'NotRequired',
	[TokenId.GStringQuotationMark]: [ // "
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars, when parent is string literal or slashy/dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral, TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// it is an incorrect syntax, should be a double quotation escape
		RehydrateToken.when(GLRecognizeUtils.isMultipleLines).to([TokenId.Chars, TokenType.Chars]),
		// only in sl string literal, since ml already rehydrated
		PreserveWhenParentIsOneOfTokenIds(TokenId.GStringLiteral),
		DeclareAsParent([TokenId.GStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.GStringQuotationMarkML]: [ // """
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is string literal or slashy/dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral, TokenId.SlashyGStringLiteral, TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split when start mark of literal is SL mark
		RehydrateToken.when(GLRecognizeUtils.isSingleLine).use(GLRecognizeUtils.rehydrateGStringQuotationMarkML),
		// only in ml gstring literal since sl already rehydrated
		PreserveWhenParentIsOneOfTokenIds(TokenId.GStringLiteral),
		DeclareAsParent([TokenId.GStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.SlashyGStringQuotationMark]: [ // /
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// also is end mark
		PreserveWhenParentIsOneOfTokenIds(TokenId.SlashyGStringLiteral),
		DeclareAsParent([TokenId.SlashyGStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.DollarSlashyGStringQuotationStartMark]: [ // $/
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to slash escape when parent is dollar slashy gstring literal
		// must be handled here instead of by revising on child appended pointcut, otherwise it will be declared as parent
		// this rehydration leads to the configuration of dollar slashy gstring slash escape
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.DollarSlashyGStringLiteral).to([TokenId.DollarSlashyGStringSlashEscape, TokenType.Mark]),
		// rehydrate to chars when parent is string literal or gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to $ and / when parent is gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.GStringLiteral).use(GLRecognizeUtils.splitDollarSlashyGStringQuotationStartMarkGL),
		// split to $ and / when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(SGLRecognizeUtils.splitDollarSlashyGStringQuotationStartMarkSGL),
		DeclareAsParent([TokenId.DollarSlashyGStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.DollarSlashyGStringQuotationEndMark]: [ // /$
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is string literal or gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to / and $ when parent is gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.GStringLiteral).use(GLRecognizeUtils.splitDollarSlashyGStringQuotationEndMarkGL),
		// split to / and $ when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(SGLRecognizeUtils.splitDollarSlashyGStringQuotationEndMarkSGL),
		// split to / and $ when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitDollarSlashyGStringQuotationEndMarkNSL)
	],
	[TokenId.SlashyGStringSlashEscape]: [ // \/
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// split to \ and / when parent is string literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral).use(SLRecognizeUtils.splitSlashyGStringSlashEscapeSL),
		// split to \ and / when parent is gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.GStringLiteral).use(GLRecognizeUtils.splitSlashyGStringSlashEscapeGL),
		// rehydrate to chars when parent is dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.DollarSlashyGStringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to \ and / when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitSlashyGStringSlashEscapeNSL)
	],
	// it is rehydrated from dollar slashy gstring quotation start mark, so it always appears in the right place.
	[TokenId.DollarSlashyGStringSlashEscape]: [ // $/
		DisableToCharsWhenParentTokenTypeIsStringLiteral
	],
	[TokenId.DollarSlashyGStringDollarEscape]: [ // $$
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to $ and $ when parent is gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.GStringLiteral).use(GLRecognizeUtils.splitDollarSlashyGStringDollarEscapeGL),
		// split to $ and $ when parent is slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.SlashyGStringLiteral).use(SGLRecognizeUtils.splitDollarSlashyGStringDollarEscapeSGL),
		// seek more following nodes
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.rehydrateDollarSlashyGStringDollarEscapeNSL)
	],
	// it is rehydrated from other nodes inside the logic of other node recognizing such as
	// - DollarSlashyGStringQuotationStartMark, $/,
	// - Identifier,
	// so it always appears in the right place.
	[TokenId.GStringInterpolationStartMark]: [ // $
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		DeclareAsParent([TokenId.GStringInterpolation, TokenType.StringLiteral])
	],
	[TokenId.GStringInterpolationLBraceStartMark]: [ // ${
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// rehydrate to chars when parent is dollar slashy gstring literal
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// split to $ and { when parent is not any string literal
		RehydrateToken.whenParentTokenTypeIsNot(TokenType.StringLiteral).use(NSLRecognizeUtils.splitGStringInterpolationLBraceStartMarkNSL),
		DeclareAsParent([TokenId.GStringInterpolation, TokenType.StringLiteral])
	],
	// created in on child appended pointcut of gstring interpolation, and node recognizer will not be used under any circumstances.
	[TokenId.GStringInterpolationRBraceEndMark]: [ // }
		DisableToCharsWhenParentTokenTypeIsStringLiteral
	],
	// keyword
	[TokenId.ABSTRACT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.AS]: [
		RehydrateToIdentifierWhenAfterDotDirectly
		// TODO declare as an AsStatement? to identify that following nodes are identifier and dot
	],
	[TokenId.ASSERT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.AssertStatement, TokenType.LogicStatement])
	],
	[TokenId.AT_INTERFACE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.AtInterfaceClassDeclaration, TokenType.TypeDeclaration])
	],
	[TokenId.BREAK]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.BreakStatement, TokenType.LogicStatement])
	],
	[TokenId.CASE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.SwitchCaseDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.CATCH]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.TryCatchDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.CLASS]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.ClassDeclaration, TokenType.TypeDeclaration])
	],
	[TokenId.CONST]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.CONTINUE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.ContinueStatement, TokenType.LogicStatement])
	],
	[TokenId.DEF]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		// could be method or field if parent is class body
		// could be class, method or field is parent is csscmf
		// could be class, method or field is parent is type
		// otherwise is variable def
		DeclareAsParent.when(
			NodeRecognizeUtils.parentIsOneOfTokenIds(TokenId.Tmp$CsscmfDeclaration, TokenId.ClassBody),
			NodeRecognizeUtils.parentIsOneOfTokenTypes(TokenType.TypeDeclaration)
		).to([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
			.otherwise([TokenId.DefStatement, TokenType.LogicStatement])
	],
	[TokenId.DEFAULT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsMethodDeclaration,
		// should be default route when parent is switch declaration, body or other route declaration
		// otherwise is default method in interface
		DeclareAsParent.when(NodeRecognizeUtils.parentIsOneOfTokenIds(TokenId.SwitchDeclaration, TokenId.SwitchBody, TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration))
			.to([TokenId.SwitchDefaultDeclaration, TokenType.LogicBlockDeclaration])
			.otherwise([TokenId.MethodDeclaration, TokenType.MethodDeclaration])
	],
	[TokenId.DO]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.DoWhileDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.ELSE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.IfElseDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.ENUM]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.EnumClassDeclaration, TokenType.TypeDeclaration])
	],
	[TokenId.EXTENDS]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.FINAL]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.FINALLY]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.TryFinallyDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.FOR]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.ForDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.GOTO]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.IF]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsOneOfTokenIds(TokenId.IfElseDeclaration),
		DeclareAsParent([TokenId.IfIfDeclaration, TokenType.LogicBlockDeclaration], [TokenId.IfDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.IMPLEMENTS]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.IMPORT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.ImportDeclaration, TokenType.ImportDeclaration])
	],
	[TokenId.INTERFACE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.InterfaceDeclaration, TokenType.TypeDeclaration])
	],
	[TokenId.NATIVE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsMethodDeclaration,
		DeclareAsParent([TokenId.MethodDeclaration, TokenType.MethodDeclaration])
	],
	[TokenId.NEW]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.NewExpression, TokenType.LogicStatement])
	],
	[TokenId.NON_SEALED]: [
		RehydrateToken.when(NodeRecognizeUtils.isNonSealedKeywordNotSupported).use(NodeRehydration.rehydrateNonSealedTo3Parts),
		RehydrateToken.when(RecognizeCommonUtils.isAfterDot).use(NodeRehydration.rehydrateNonSealedTo3Parts),
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.NULL]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.PACKAGE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.PackageDeclaration, TokenType.PackageDeclaration])
	],
	[TokenId.PERMITS]: [
		RehydrateToken.when(NodeRecognizeUtils.isSealedKeywordNotSupported).to([TokenId.Identifier, TokenType.Identifier]),
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.PRIVATE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.PROTECTED]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.PUBLIC]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.RECORD]: [
		RehydrateToken.when(NodeRecognizeUtils.isRecordKeywordNotSupported).to([TokenId.Identifier, TokenType.Identifier]),
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.RecordClassDeclaration, TokenType.TypeDeclaration])
	],
	[TokenId.RETURN]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.SEALED]: [
		RehydrateToken.when(NodeRecognizeUtils.isSealedKeywordNotSupported).to([TokenId.Identifier, TokenType.Identifier]),
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.STATIC]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsOneOfTokenIds(TokenId.ImportDeclaration),
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.STRICTFP]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.SWITCH]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.SwitchDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.SUPER]: 'TODO',
	[TokenId.SYNCHRONIZED]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
	],
	[TokenId.THIS]: 'TODO',
	[TokenId.THREADSAFE]: [
		// rehydrate to 2 parts when after dot
		RehydrateToken.when(RecognizeCommonUtils.isAfterDot).use(ThreadsafeRecognizeUtils.splitTo2Parts)
	],
	[TokenId.THROW]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.ThrowStatement, TokenType.LogicStatement])
	],
	[TokenId.THROWS]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.TRAIT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.TraitClassDeclaration, TokenType.TypeDeclaration])
	],
	[TokenId.TRANSIENT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsFieldDeclaration,
		DeclareAsParent([TokenId.FieldDeclaration, TokenType.FieldDeclaration])
	],
	[TokenId.TRY]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.TryTryDeclaration, TokenType.LogicBlockDeclaration], [TokenId.TryDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.VAR]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		DeclareAsParent([TokenId.VarStatement, TokenType.LogicStatement])
	],
	[TokenId.VOID]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsMethodDeclaration,
		DeclareAsParent([TokenId.MethodDeclaration, TokenType.MethodDeclaration])
	],
	[TokenId.VOLATILE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsFieldDeclaration,
		DeclareAsParent([TokenId.FieldDeclaration, TokenType.FieldDeclaration])
	],
	[TokenId.WHILE]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsOneOfTokenIds(TokenId.DoWhileDeclaration),
		DeclareAsParent([TokenId.WhileDeclaration, TokenType.LogicBlockDeclaration])
	],
	[TokenId.YIELD]: [
		RehydrateToIdentifierWhenAfterDotDirectly
		// TODO how does it end? it is the common issue for XXXStatement
		// DeclareAsParent([TokenId.YieldStatement, TokenType.LogicStatement])
	],
	// primitive type
	[TokenId.BOOLEAN]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.CHAR]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.BYTE]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.SHORT]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.INT]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.LONG]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.FLOAT]: [RehydrateToIdentifierWhenAfterDotDirectly],
	[TokenId.DOUBLE]: [RehydrateToIdentifierWhenAfterDotDirectly],
	// chars
	[TokenId.Identifier]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		RehydrateToken.whenParentTokenIdIsOneOf(TokenId.StringLiteral).to([TokenId.Chars, TokenType.Chars]),
		// TODO, when in any gstring literal, check $
		RehydrateToken.whenParentTokenTypeIs(TokenType.StringLiteral).to([TokenId.Chars, TokenType.Chars])
	],
	// will not rehydrate under 4 tokens
	[TokenId.Whitespaces]: 'NotRequired',
	// will not rehydrate under 4 tokens
	[TokenId.Tabs]: 'NotRequired',
	// will not rehydrate under 4 tokens
	[TokenId.NewLine]: 'NotRequired',
	// will not rehydrate under 4 tokens
	[TokenId.Chars]: 'NotRequired',
	[TokenId.UndeterminedChars]: [
		// will not rehydrate under 4 tokens
		RehydrateToken.when(ASLRecognizeUtils.isBackslashAtLineEndAndIsML).to([TokenId.StringMLNewLineEraser, TokenType.Mark])
	]
};
