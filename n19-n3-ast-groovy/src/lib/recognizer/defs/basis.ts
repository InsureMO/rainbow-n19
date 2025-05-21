import {TokenId, TokenType} from '../../tokens';
import {NodePointcuts} from '../pointcuts';
import {MultipleLinesCommentsRecognizer, ScriptCommandRecognizer, SingleLineCommentsRecognizer} from '../statement';
import {NodeRecognizeUtils, NodeRehydration} from '../util';
import {PredefinedPreservation as Preserve, PredefinedRehydration as Rehydrate, RecognizerBasisType} from './internal';

export const RecognizerBasis: Readonly<Partial<{ [key in TokenId]: RecognizerBasisType }>> = {
	// separator
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
	[TokenId.LBrace]: {
		name: 'SpLBrace',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral],
		declareAsParent: [
			/** if parent has {@link $Neaf.TakeLBraceAs} */
			NodePointcuts.LogicBlock.Brace.createOnTakeLBraceAs,
			/** any other case */
			[TokenId.CodeBlock, TokenType.LogicBlock]
		]
	},
	[TokenId.LParen]: {
		name: 'SpLParen',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral],
		declareAsParent: [[TokenId.ParenBlock, TokenType.LogicBlock]]
	},
	// operators
	[TokenId.Multiple]: {
		name: 'OpMultiple',
		rehydrate: [
			Rehydrate.ToCharsWhenInStringLiteral,
			{parentTokenId: TokenId.ImportDeclaration, to: [TokenId.ImportAllMark, TokenType.Mark]}
		]
	},
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
		name: 'MultipleLinesComments', class: MultipleLinesCommentsRecognizer,
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral]
	},
	// number literal
	// boolean literal
	// keyword
	[TokenId.ABSTRACT]: {
		name: 'KwAbstract',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TemporaryStatement]]
	},
	[TokenId.ASSERT]: {
		name: 'KwAbstract',
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
	[TokenId.IF]: {
		name: 'KwIf',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsIfElseDeclaration],
		declareAsParent: [
			// create 2 parent nodes
			[[TokenId.IfIfDeclaration, TokenType.LogicBlockDeclaration], [TokenId.IfDeclaration, TokenType.LogicBlockDeclaration]]
		]
	},
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
			{check: NodeRehydration.isNonSealedKeywordNotSupported, to: NodeRehydration.rehydrateNonSealedTo3Parts},
			{check: NodeRecognizeUtils.isDirectAfterDot, to: NodeRehydration.rehydrateNonSealedTo3Parts}
		],
		preserve: [Preserve.ParentIsCsscmfDeclaration, Preserve.ParentIsTypeDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
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
	[TokenId.SYNCHRONIZED]: {
		name: 'KwSynchronized',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		preserve: [Preserve.ParentIsCsscmfDeclaration],
		declareAsParent: [[TokenId.Tmp$CsscmfDeclaration, TokenType.TypeDeclaration]]
	},
	[TokenId.THROW]: {
		name: 'KwThrow',
		rehydrate: [Rehydrate.ToCharsWhenInStringLiteral, Rehydrate.ToIdentifierWhenAfterDotDirectly],
		declareAsParent: [[TokenId.ThrowStatement, TokenType.LogicStatement]]
	},
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
	}
	// primitive type
};
