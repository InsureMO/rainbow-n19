import {TokenId, TokenType} from '../../tokens';
import {MultipleLinesCommentsRecognizer, NumericBasePartRecognizer} from '../node-recognize-specific';
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
	RehydrateTokenUseFuncWhen
} from './types';

// custom recognize class
const CustomClass = (clazz: GroovyAstNodeRecognizerConstructor): CustomClass => [RecognizeBasisType.CustomClass, clazz];
// rehydrate
/** disable the default rehydrate to chars when parent token type is string literal */
const DisableToCharsWhenParentTokenTypeIsStringLiteral: DisableToCharsWhenParentTokenTypeIsStringLiteral = [RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral];
const RehydrateToken = {
	when: (when: DoRehydrateWhen) => {
		return {
			to: (to: TokenId | [TokenId, TokenType]): RehydrateTokenToWhen => {
				return [RecognizeBasisType.RehydrateTokenToWhen, when, to];
			},
			use: (func: NodeRehydrateFunc): RehydrateTokenUseFuncWhen => {
				return [RecognizeBasisType.RehydrateTokenUseFuncWhen, when, func];
			}
		};
	}
};
const RehydrateToIdentifierWhenAfterDotDirectly = RehydrateToken.when(NodeRecognizeUtils.isDirectAfterDot).to([TokenId.Identifier, TokenType.Identifier]);
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
 * 1. rehydrate to chars when parent token type is {@link TokenType.StringLiteral},
 *    unless {@link RecognizeBasisType.DisableToCharsWhenParentTokenTypeIsStringLiteral} declared.
 *    and it is the first rehydration if it is applied.
 *    this rehydrate function will be applied on almost all tokens except string related.
 */
export const RecognizerBasis: Readonly<Partial<{ [key in TokenId]: RecognizeBasisDefs }>> = {
	// separator
	[TokenId.LBrace]: [DeclareAsParent([TokenId.CodeBlock, TokenType.LogicBlock])],
	[TokenId.RBrace]: 'NotRequired',
	[TokenId.LParen]: [DeclareAsParent([TokenId.ParenBlock, TokenType.LogicBlock])],
	[TokenId.RParen]: 'NotRequired',
	[TokenId.LBrack]: 'TODO',
	[TokenId.RBrack]: 'NotRequired',
	[TokenId.At]: [
		DeclareAsParent.when(NodeRecognizeUtils.isDirectAfterDot)
			// after dot directly, x.@y
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
	[TokenId.AddAssign]: 'TODO',
	[TokenId.SubtractAssign]: 'TODO',
	[TokenId.MultipleAssign]: 'TODO',
	[TokenId.DivideAssign]: 'TODO',
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
		RehydrateToken.when(NodeRecognizeUtils.isScriptCommandNotAllowed).use(NodeRehydration.rehydrateScriptCommandStartMarkTo2Parts),
		DeclareAsParent([TokenId.ScriptCommand, TokenType.ScriptCommand])
	],
	[TokenId.SingleLineCommentStartMark]: [
		DeclareAsParent([TokenId.SingleLineComment, TokenType.Comments])
	],
	// [CustomClass(SingleLineCommentsRecognizer)],
	[TokenId.MultipleLinesCommentStartMark]: [CustomClass(MultipleLinesCommentsRecognizer)],
	[TokenId.MultipleLinesCommentEndMark]: 'NotRequired',
	// number literal
	[TokenId.NumericSignPart]: 'NotRequired',
	[TokenId.NumericBasePart]: [CustomClass(NumericBasePartRecognizer)],
	[TokenId.NumericSuffixPart]: 'NotRequired',
	[TokenId.BinaryStartMark]: 'NotRequired',
	[TokenId.OctalStartMark]: 'NotRequired',
	[TokenId.HexadecimalStartMark]: 'NotRequired',
	[TokenId.DecimalExponentMark]: 'NotRequired',
	// boolean literal
	[TokenId.BooleanTrue]: 'NotRequired',
	[TokenId.BooleanFalse]: 'NotRequired',
	// string literal
	[TokenId.StringQuotationMark]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// TODO need to rehydrate to chars
		//  when parent is standard/slashy/dollar slashy gstring literal
		//  or start mark of literal is ML mark
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral),
		DeclareAsParent([TokenId.StringLiteral, TokenType.StringLiteral])
	],
	[TokenId.StringQuotationMarkML]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// TODO need to
		//  rehydrate to chars when parent is standard/slashy/dollar slashy gstring literal
		//  or split to 2 parts when start mark of literal is SL mark
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral),
		DeclareAsParent([TokenId.StringLiteral, TokenType.StringLiteral])
	],
	[TokenId.StringBackspaceEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// TODO need to rehydrate to chars when parent is slashy/dollar slashy gstring literal
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringFormFeedEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringNewLineEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringCarriageReturnEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringSingleSpaceEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringTabulationEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringBackslashEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringSingleQuoteEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringDoubleQuoteEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.StringLiteral, TokenId.GStringLiteral)
	],
	[TokenId.StringDollarEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.GStringLiteral, TokenId.SlashyGStringLiteral)
	],
	[TokenId.StringUnicodeEscapeMark]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral
	],
	[TokenId.GStringQuotationMark]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// TODO need to rehydrate to chars
		//  when parent is string literal or slashy/dollar slashy gstring literal
		//  or start mark of literal is ML mark
		PreserveWhenParentIsOneOfTokenIds(TokenId.GStringLiteral),
		DeclareAsParent([TokenId.GStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.GStringQuotationMarkML]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		// TODO need to
		//  rehydrate to chars when parent is string literal or slashy/dollar slashy gstring literal
		//  or split to 2 parts when start mark of literal is SL mark
		PreserveWhenParentIsOneOfTokenIds(TokenId.GStringLiteral),
		DeclareAsParent([TokenId.GStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.DollarSlashyGStringQuotationStartMark]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.DollarSlashyGStringLiteral),
		DeclareAsParent([TokenId.DollarSlashyGStringLiteral, TokenType.StringLiteral])
	],
	[TokenId.DollarSlashyGStringQuotationEndMark]: 'TODO',
	[TokenId.SlashyGStringBackslashEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.SlashyGStringLiteral)
	],
	[TokenId.DollarSlashyGStringDollarEscape]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral,
		PreserveWhenParentIsOneOfTokenIds(TokenId.DollarSlashyGStringLiteral)
	],
	[TokenId.GStringInterpolationLBraceStartMark]: [
		DisableToCharsWhenParentTokenTypeIsStringLiteral
	],
	// keyword
	[TokenId.ABSTRACT]: [
		RehydrateToIdentifierWhenAfterDotDirectly,
		PreserveWhenParentIsCsscmfDeclaration,
		PreserveWhenParentIsTypeDeclaration,
		DeclareAsParent([TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement])
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
		RehydrateToken.when(NodeRecognizeUtils.isDirectAfterDot).use(NodeRehydration.rehydrateNonSealedTo3Parts),
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
	[TokenId.THREADSAFE]: 'TODO', // TODO rehydrate to 2 parts when after dot directly
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
	[TokenId.Whitespaces]: 'NotRequired',
	[TokenId.Tabs]: 'NotRequired',
	[TokenId.NewLine]: 'NotRequired',
	[TokenId.Identifier]: 'TODO',
	[TokenId.UndeterminedChars]: 'NotRequired'
};
