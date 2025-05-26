import {TokenId, TokenType} from '../../tokens';
import {
	RecognizerMultipleLinesComments,
	ScriptCommandRecognizer,
	SingleLineCommentsRecognizer
} from '../node-recognize-specific';
import {DeclareAsParentBasis} from './defs-declare-as-parent';
import {PredefinedPreservation as Preserve, PreserveCheckBasis} from './defs-preserve';
import {NodeRehydration, PredefinedRehydration as Rehydrate, RehydrateBasis} from './defs-rehydrate';
import {NodeRecognizeUtils} from './recognize-utils';
import {NodeRecognizer} from './recognizer';

export type GroovyAstNodeRecognizerConstructor = abstract new () => NodeRecognizer;

/** define everything by configuration, unless it has to be programmatic */
export type StandardRecognizerBasis = Readonly<{
	name: string;
	class?: GroovyAstNodeRecognizerConstructor;
	rehydrate?: ReadonlyArray<RehydrateBasis>;
	preserve?: ReadonlyArray<PreserveCheckBasis>;
	declareAsParent?: ReadonlyArray<DeclareAsParentBasis>;
}>;
export type RecognizerBasisDefs = StandardRecognizerBasis | 'TODO' | 'NotRequired';

export const RecognizerBasis: Readonly<Partial<{ [key in TokenId]: RecognizerBasisDefs }>> = {
	// separator
	[TokenId.LBrace]: {
		name: 'SpLBrace',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral],
		declareAsParent: [
			/** if parent has {@link NodeAttributeOperator.TakeLBraceAs} */
			NodeRecognizeUtils.createOnTakeLBraceAs,
			/** any other case */
			[TokenId.CodeBlock, TokenType.LogicBlock]
		]
	},
	[TokenId.RBrace]: 'NotRequired',
	[TokenId.LParen]: {
		name: 'SpLParen',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral],
		declareAsParent: [[TokenId.ParenBlock, TokenType.LogicBlock]]
	},
	[TokenId.RParen]: 'NotRequired',
	[TokenId.LBrack]: 'TODO',
	[TokenId.RBrack]: 'NotRequired',
	[TokenId.At]: {
		name: 'SpAt',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral],
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
	[TokenId.Multiple]: {
		name: 'OpMultiple',
		rehydrate: [
			Rehydrate.ToCharsWhenInStringLiteral,
			{parentTokenId: TokenId.ImportDeclaration, to: [TokenId.ImportAllMark, TokenType.Mark]}
		]
	},
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
	[TokenId.ScriptCommandStartMark]: {
		name: 'ScriptCommand', class: ScriptCommandRecognizer,
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral]
	},
	[TokenId.SingleLineCommentStartMark]: {
		name: 'SingleLineComments', class: SingleLineCommentsRecognizer,
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral]
	},
	[TokenId.MultipleLinesCommentStartMark]: {
		name: 'MultipleLinesComments', class: RecognizerMultipleLinesComments,
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral]
	},
	[TokenId.MultipleLinesCommentEndMark]: 'NotRequired',
	// number literal
	[TokenId.NumericBasePart]: 'NotRequired',
	[TokenId.BinaryStartMark]: 'NotRequired',
	[TokenId.OctalStartMark]: 'NotRequired',
	[TokenId.HexadecimalStartMark]: 'NotRequired',
	// boolean literal
	[TokenId.BooleanTrue]: 'NotRequired',
	[TokenId.BooleanFalse]: 'NotRequired',
	// string literal
	[TokenId.StringQuotationMark]: 'TODO',
	[TokenId.StringQuotationMarkML]: 'TODO',
	[TokenId.StringBackspaceEscape]: 'TODO',
	[TokenId.StringFormFeedEscape]: 'TODO',
	[TokenId.StringNewLineEscape]: 'TODO',
	[TokenId.StringCarriageReturnEscape]: 'TODO',
	[TokenId.StringSingleSpaceEscape]: 'TODO',
	[TokenId.StringTabulationEscape]: 'TODO',
	[TokenId.StringBackslashEscape]: 'TODO',
	[TokenId.StringSingleQuoteEscape]: 'TODO',
	[TokenId.StringDoubleQuoteEscape]: 'TODO',
	[TokenId.StringDollarEscape]: 'TODO',
	[TokenId.StringUnicodeEscapeMark]: 'TODO',
	[TokenId.GStringQuotationMark]: 'TODO',
	[TokenId.GStringQuotationMarkML]: 'TODO',
	[TokenId.DollarSlashyGStringQuotationStartMark]: 'TODO',
	[TokenId.DollarSlashyGStringQuotationEndMark]: 'TODO',
	[TokenId.SlashyGStringBackslashEscape]: 'TODO',
	[TokenId.DollarSlashyGStringDollarEscape]: 'TODO',
	[TokenId.GStringInterpolationStartMark]: 'TODO',
	[TokenId.GStringInterpolationLBraceStartMark]: 'TODO',
	[TokenId.RegexpPatternStartMark]: 'TODO',
	// keyword
	[TokenId.ABSTRACT]: {
		name: 'KwAbstract',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.ASSERT]: {
		name: 'KwAssert',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.AssertStatement, TokenType.LogicStatement]]
	},
	[TokenId.AT_INTERFACE]: {
		name: 'KwAtInterface',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.AtInterfaceClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.BREAK]: {
		name: 'KwBreak',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.BreakStatement, TokenType.LogicStatement]]
	},
	[TokenId.CASE]: {
		name: 'KwCase',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.SwitchCaseDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.CATCH]: {
		name: 'KwCatch',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.TryCatchDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.CLASS]: {
		name: 'KwClass',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.ClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.CONST]: 'NotRequired',
	[TokenId.CONTINUE]: {
		name: 'KwContinue',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ContinueStatement, TokenType.LogicStatement]]
	},
	[TokenId.DEF]: {
		name: 'KwDef',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
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
		name: 'KwDefault',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
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
		name: 'KwDo',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.DoWhileDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.ELSE]: {
		name: 'KwElse',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.IfElseDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.ENUM]: {
		name: 'KwEnum',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.EnumClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.EXTENDS]: 'TODO',
	[TokenId.FINAL]: {
		name: 'KwFinal',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.FINALLY]: {
		name: 'KwFinally',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.TryFinallyDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.FOR]: {
		name: 'KwFor',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ForDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.GOTO]: 'TODO',
	[TokenId.IF]: {
		name: 'KwIf',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsIfElseDeclaration],
		declareAsParent: [
			// create 2 parent nodes
			[[TokenId.IfIfDeclaration, TokenType.LogicBlockDeclaration], [TokenId.IfDeclaration, TokenType.LogicBlockDeclaration]]
		]
	},
	[TokenId.IMPLEMENTS]: 'TODO',
	[TokenId.IMPORT]: {
		name: 'KwImport',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ImportDeclaration, TokenType.ImportDeclaration]]
	},
	[TokenId.INTERFACE]: {
		name: 'KwInterface',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.InterfaceDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.NATIVE]: {
		name: 'KwNative',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsMethodDeclaration],
		declareAsParent: [[TokenId.MethodDeclaration, TokenType.MethodDeclaration]]
	},
	[TokenId.NEW]: {
		name: 'KwNew',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.NewExpression, TokenType.LogicStatement]]
	},
	[TokenId.NON_SEALED]: {
		name: 'KwNonSealed',
		rehydrate: [
			Rehydrate.ToCharsWhenInStringLiteral,
			{check: NodeRecognizeUtils.isNonSealedKeywordNotSupported, to: NodeRehydration.rehydrateNonSealedTo3Parts},
			{check: NodeRecognizeUtils.isDirectAfterDot, to: NodeRehydration.rehydrateNonSealedTo3Parts}
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.NULL]: 'TODO',
	[TokenId.PACKAGE]: {
		name: 'KwPackage',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.PackageDeclaration, TokenType.PackageDeclaration]]
	},
	[TokenId.PERMITS]: {
		name: 'KwPermits',
		rehydrate: [
			Rehydrate.ToCharsWhenInStringLiteral,
			Rehydrate.ToIdentifierWhenKeywordSealedNotSupported,
			Rehydrate.ToIdentifierWhenAfterDotDirectly
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.PRIVATE]: {
		name: 'KwPrivate',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.PROTECTED]: {
		name: 'KwProtected',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.PUBLIC]: {
		name: 'KwPublic',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.RECORD]: {
		name: 'KwRecord',
		rehydrate: [
			Rehydrate.ToCharsWhenInStringLiteral,
			Rehydrate.ToIdentifierWhenKeywordRecordNotSupported,
			Rehydrate.ToIdentifierWhenAfterDotDirectly
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.RecordClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.RETURN]: 'TODO',
	[TokenId.SEALED]: {
		name: 'KwSealed',
		rehydrate: [
			Rehydrate.ToCharsWhenInStringLiteral,
			Rehydrate.ToIdentifierWhenKeywordSealedNotSupported,
			Rehydrate.ToIdentifierWhenAfterDotDirectly
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.STATIC]: {
		name: 'KwStatic',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [
			Preserve.ParentIsImportDeclaration,
			Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration
		],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.STRICTFP]: {
		name: 'KwStrictfp',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.SWITCH]: {
		name: 'KwSwitch',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.SwitchDeclaration, TokenType.LogicBlockDeclaration]]
	},
	[TokenId.SUPER]: 'TODO',
	[TokenId.SYNCHRONIZED]: {
		name: 'KwSynchronized',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.THIS]: 'TODO',
	[TokenId.THREADSAFE]: 'TODO',
	[TokenId.THROW]: {
		name: 'KwThrow',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ThrowStatement, TokenType.LogicStatement]]
	},
	[TokenId.THROWS]: 'TODO',
	[TokenId.TRAIT]: {
		name: 'KwTrait',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.TraitClassDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.TRANSIENT]: {
		name: 'KwTransient',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsFieldDeclaration],
		declareAsParent: [[TokenId.FieldDeclaration, TokenType.FieldDeclaration]]
	},
	[TokenId.TRY]: {
		name: 'KwTry',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [
			// create 2 parent nodes
			[[TokenId.TryTryDeclaration, TokenType.LogicBlockDeclaration], [TokenId.TryDeclaration, TokenType.LogicBlockDeclaration]]
		]
	},
	[TokenId.VAR]: {
		name: 'KwVar',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.VarStatement, TokenType.LogicStatement]]
	},
	[TokenId.VOID]: {
		name: 'KwVoid',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsMethodDeclaration],
		declareAsParent: [[TokenId.MethodDeclaration, TokenType.MethodDeclaration]]
	},
	[TokenId.VOLATILE]: {
		name: 'KwVolatile',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsFieldDeclaration],
		declareAsParent: [[TokenId.FieldDeclaration, TokenType.FieldDeclaration]]
	},
	[TokenId.WHILE]: {
		name: 'KwWhile',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
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
