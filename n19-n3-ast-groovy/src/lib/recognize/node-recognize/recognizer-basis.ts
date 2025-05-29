import {TokenId, TokenType} from '../../tokens';
import {
	MultipleLinesCommentsRecognizer,
	NumericBasePartRecognizer,
	ScriptCommandRecognizer,
	SingleLineCommentsRecognizer
} from '../node-recognize-specific';
import {DeclareAsParentBasis} from './defs-declare-as-parent';
import {PredefinedPreservation as Preserve, PreserveCheckBasis} from './defs-preserve';
import {
	NodeRehydration,
	PredefinedRehydration,
	PredefinedRehydration as Rehydrate,
	RehydrateBasis
} from './defs-rehydrate';
import {NodeRecognizeUtils} from './recognize-utils';
import {NodeRecognizer} from './recognizer';

export type GroovyAstNodeRecognizerConstructor = abstract new () => NodeRecognizer;

/** define everything by configuration, unless it has to be programmatic */
export type StandardRecognizerBasis = Readonly<{
	class?: GroovyAstNodeRecognizerConstructor;
	rehydrate?: ReadonlyArray<RehydrateBasis>;
	preserve?: ReadonlyArray<PreserveCheckBasis>;
	declareAsParent?: ReadonlyArray<DeclareAsParentBasis>;
}>;
export type RecognizerBasisDefs = StandardRecognizerBasis | 'TODO' | 'NotRequired';

export const RecognizerBasis: Readonly<Partial<{ [key in TokenId]: RecognizerBasisDefs }>> = {
	// separator
	[TokenId.LBrace]: {
		declareAsParent: [[TokenId.CodeBlock, TokenType.LogicBlock]]
	},
	[TokenId.RBrace]: 'NotRequired',
	[TokenId.LParen]: {
		declareAsParent: [[TokenId.ParenBlock, TokenType.LogicBlock]]
	},
	[TokenId.RParen]: 'NotRequired',
	[TokenId.LBrack]: 'TODO',
	[TokenId.RBrack]: 'NotRequired',
	[TokenId.At]: {
		declareAsParent: [
			{
				check: NodeRecognizeUtils.isDirectAfterDot,
				// after dot directly, x.@y
				to: [TokenId.AtFieldPathElement, TokenType.PathElement],
				// not after dot, @x
				or: [TokenId.AnnotationDeclaration, TokenType.AnnotationDeclaration]
			}
		]
	},
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
	[TokenId.IN]: 'TODO',
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
	[TokenId.INSTANCEOF]: 'TODO',
	// mark
	[TokenId.ScriptCommandStartMark]: {class: ScriptCommandRecognizer},
	[TokenId.SingleLineCommentStartMark]: {class: SingleLineCommentsRecognizer},
	[TokenId.MultipleLinesCommentStartMark]: {class: MultipleLinesCommentsRecognizer},
	[TokenId.MultipleLinesCommentEndMark]: 'NotRequired',
	// number literal
	[TokenId.NumericSignPart]: 'NotRequired',
	[TokenId.NumericBasePart]: {class: NumericBasePartRecognizer},
	[TokenId.NumericSuffixPart]: 'NotRequired',
	[TokenId.BinaryStartMark]: 'NotRequired',
	[TokenId.OctalStartMark]: 'NotRequired',
	[TokenId.HexadecimalStartMark]: 'NotRequired',
	[TokenId.DecimalExponentMark]: 'NotRequired',
	// boolean literal
	[TokenId.BooleanTrue]: 'NotRequired',
	[TokenId.BooleanFalse]: 'NotRequired',
	// string literal
	[TokenId.StringQuotationMark]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		// TODO need to check start mark of this string literal
		preserve: [{parentTokenId: TokenId.StringLiteral}],
		declareAsParent: [[TokenId.StringLiteral, TokenType.StringLiteral]]
	},
	[TokenId.StringQuotationMarkML]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		// TODO need to check start mark of this string literal
		preserve: [{parentTokenId: TokenId.StringLiteral}],
		declareAsParent: [[TokenId.StringLiteral, TokenType.StringLiteral]]
	},
	[TokenId.StringBackspaceEscape]: {
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringFormFeedEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringNewLineEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringCarriageReturnEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringSingleSpaceEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringTabulationEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringBackslashEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringSingleQuoteEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringDoubleQuoteEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.StringLiteral, TokenId.GStringLiteral]}]
	},
	[TokenId.StringDollarEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: [TokenId.GStringLiteral, TokenId.SlashyGStringLiteral]}]
	},
	[TokenId.StringUnicodeEscapeMark]: 'TODO',
	[TokenId.GStringQuotationMark]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		// TODO need to check start mark of this gstring literal
		preserve: [{parentTokenId: TokenId.GStringLiteral}],
		declareAsParent: [[TokenId.GStringLiteral, TokenType.StringLiteral]]
	},
	[TokenId.GStringQuotationMarkML]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		// TODO need to check start mark of this gstring literal
		preserve: [{parentTokenId: TokenId.GStringLiteral}],
		declareAsParent: [[TokenId.GStringLiteral, TokenType.StringLiteral]]
	},
	[TokenId.DollarSlashyGStringQuotationStartMark]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		// it is escape of opening dollar slashy
		preserve: [{parentTokenId: TokenId.DollarSlashyGStringLiteral}],
		declareAsParent: [[TokenId.DollarSlashyGStringLiteral, TokenType.StringLiteral]]
	},
	[TokenId.DollarSlashyGStringQuotationEndMark]: 'TODO',
	[TokenId.SlashyGStringBackslashEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: TokenId.SlashyGStringLiteral}]
	},
	[TokenId.DollarSlashyGStringDollarEscape]: {
		rehydrate: [PredefinedRehydration.DisableToCharsWhenTokenTypeIsStringLiteral],
		preserve: [{parentTokenId: TokenId.DollarSlashyGStringLiteral}]
	},
	[TokenId.GStringInterpolationStartMark]: 'TODO',
	[TokenId.GStringInterpolationLBraceStartMark]: 'TODO',
	// keyword
	[TokenId.ABSTRACT]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.ASSERT]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.AssertStatement, TokenType.LogicStatement]]
	},
	[TokenId.AT_INTERFACE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.AtInterfaceClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.BREAK]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.BreakStatement, TokenType.LogicStatement]]
	},
	[TokenId.CASE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.SwitchCaseDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.CATCH]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.TryCatchDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.CLASS]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.ClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.CONST]: 'NotRequired',
	[TokenId.CONTINUE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ContinueStatement, TokenType.LogicStatement]]
	},
	[TokenId.DEF]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [
			{
				/**
				 * could be method or field if parent is class body
				 */
				parentTokenId: [TokenId.Tmp$CsscmfDeclaration, TokenId.ClassBody],
				to: [TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement],
				or: [TokenId.DefStatement, TokenType.LogicStatement]
			}
		]
	},
	[TokenId.DEFAULT]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsMethodDeclaration],
		declareAsParent: [
			{
				parentTokenId: [TokenId.SwitchDeclaration, TokenId.SwitchBody, TokenId.SwitchCaseDeclaration, TokenId.SwitchDefaultDeclaration],
				to: [TokenId.SwitchDefaultDeclaration, TokenType.LogicBlockDeclaration],
				or: [TokenId.MethodDeclaration, TokenType.MethodDeclaration]
			}
		]
	},
	[TokenId.DO]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.DoWhileDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.ELSE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.IfElseDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.ENUM]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.EnumClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.EXTENDS]: 'TODO',
	[TokenId.FINAL]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.FINALLY]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.TryFinallyDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.FOR]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ForDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.GOTO]: 'TODO',
	[TokenId.IF]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsIfElseDeclaration],
		declareAsParent: [
			// create 2 parent nodes
			[[TokenId.IfIfDeclaration, TokenType.LogicBlockDeclaration], [TokenId.IfDeclaration, TokenType.LogicBlockDeclaration]]
		]
	},
	[TokenId.IMPLEMENTS]: 'TODO',
	[TokenId.IMPORT]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ImportDeclaration, TokenType.ImportDeclaration]]
	},
	[TokenId.INTERFACE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.InterfaceDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.NATIVE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsMethodDeclaration],
		declareAsParent: [[TokenId.MethodDeclaration, TokenType.MethodDeclaration]]
	},
	[TokenId.NEW]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.NewExpression, TokenType.LogicStatement]]
	},
	[TokenId.NON_SEALED]: {
		rehydrate: [
			{check: NodeRecognizeUtils.isNonSealedKeywordNotSupported, to: NodeRehydration.rehydrateNonSealedTo3Parts},
			{check: NodeRecognizeUtils.isDirectAfterDot, to: NodeRehydration.rehydrateNonSealedTo3Parts}
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.NULL]: 'TODO',
	[TokenId.PACKAGE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.PackageDeclaration, TokenType.PackageDeclaration]]
	},
	[TokenId.PERMITS]: {
		rehydrate: [
			Rehydrate.ToIdentifierWhenKeywordSealedNotSupported,
			Rehydrate.ToIdentifierWhenAfterDotDirectly
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.PRIVATE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.PROTECTED]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.PUBLIC]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.RECORD]: {
		rehydrate: [
			Rehydrate.ToIdentifierWhenKeywordRecordNotSupported,
			Rehydrate.ToIdentifierWhenAfterDotDirectly
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.RecordClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.RETURN]: 'TODO',
	[TokenId.SEALED]: {
		rehydrate: [
			Rehydrate.ToIdentifierWhenKeywordSealedNotSupported,
			Rehydrate.ToIdentifierWhenAfterDotDirectly
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.STATIC]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [
			Preserve.ParentIsImportDeclaration,
			Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration
		],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.STRICTFP]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.SWITCH]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.SwitchDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.SUPER]: 'TODO',
	[TokenId.SYNCHRONIZED]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.THIS]: 'TODO',
	[TokenId.THREADSAFE]: 'TODO',
	[TokenId.THROW]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ThrowStatement, TokenType.LogicStatement]]
	},
	[TokenId.THROWS]: 'TODO',
	[TokenId.TRAIT]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.TraitClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.TRANSIENT]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsFieldDeclaration],
		declareAsParent: [[TokenId.FieldDeclaration, TokenType.FieldDeclaration]]
	},
	[TokenId.TRY]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [
			// create 2 parent nodes
			[[TokenId.TryTryDeclaration, TokenType.LogicBlockDeclaration], [TokenId.TryDeclaration, TokenType.LogicBlockDeclaration]]
		]
	},
	[TokenId.VAR]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.VarStatement, TokenType.LogicStatement]]
	},
	[TokenId.VOID]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsMethodDeclaration],
		declareAsParent: [[TokenId.MethodDeclaration, TokenType.MethodDeclaration]]
	},
	[TokenId.VOLATILE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsFieldDeclaration],
		declareAsParent: [[TokenId.FieldDeclaration, TokenType.FieldDeclaration]]
	},
	[TokenId.WHILE]: {
		rehydrate: [Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsDoWhileDeclaration],
		declareAsParent: [[TokenId.WhileDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.YIELD]: 'TODO',
	// primitive type
	[TokenId.BOOLEAN]: 'TODO',
	[TokenId.CHAR]: 'TODO',
	[TokenId.BYTE]: 'TODO',
	[TokenId.SHORT]: 'TODO',
	[TokenId.INT]: 'TODO',
	[TokenId.LONG]: 'TODO',
	[TokenId.FLOAT]: 'TODO',
	[TokenId.DOUBLE]: 'TODO',
	// chars
	[TokenId.Whitespaces]: 'NotRequired',
	[TokenId.Tabs]: 'NotRequired',
	[TokenId.NewLine]: 'NotRequired',
	[TokenId.Identifier]: 'TODO',
	[TokenId.UndeterminedChars]: 'NotRequired'
};
