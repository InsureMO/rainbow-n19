import {AbstractAstNodeCaptor} from './abstract-ast-node-captor';
import {AbstractEndMarkedCaptor, AbstractEndMarkedWithNewLineCaptor} from './abstract-end-marked-captor';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';
import {AbstractSingleCharCaptor} from './abstract-single-char-captor';
import {AbstractCommentCaptor, MultipleLinesCommentCaptor, SingleLineCommentCaptor} from './comment-captors';
import {IdentifierCaptor} from './identifier-captor';
import {
	AbstractKeywordCaptor,
	AbstractSingleWordKeywordCaptor,
	ImportDeclarationCaptor,
	KwAbstractCaptor,
	KwAsCaptor,
	KwConstCaptor,
	KwDefaultCaptor,
	KwExtendsCaptor,
	KwFinalCaptor,
	KwGotoCaptor,
	KwImplementsCaptor,
	KwNativeCaptor,
	KwNonSealedCaptor,
	KwPermitsCaptor,
	KwPrivateCaptor,
	KwProtectedCaptor,
	KwPublicCaptor,
	KwSealedCaptor,
	KwStaticCaptor,
	KwStrictfpCaptor,
	KwSynchronizedCaptor,
	KwTransientCaptor,
	KwVolatileCaptor,
	PackageDeclarationCaptor
} from './keyword-captors';
import {NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor} from './new-line-captors';
import {ScriptCommandCaptor} from './script-command-captor';
import {
	AsteriskCaptor,
	CommaCaptor,
	DotCaptor,
	LAngleBrackCaptor,
	LBraceCaptor,
	LBrackCaptor,
	LParenCaptor,
	RAngleBrackCaptor,
	RBraceCaptor,
	RBrackCaptor,
	RParenCaptor,
	SemicolonCaptor
} from './symbol-captors';
import {TabsCaptor} from './tabs-captor';
import {
	AbstractTypeCaptor,
	AtInterfaceDeclarationCaptor,
	ClassDeclarationCaptor,
	EnumClassDeclarationCaptor,
	InterfaceDeclarationCaptor,
	RecordClassDeclarationCaptor,
	TraitClassDeclarationCaptor
} from './type-captors';
import {UndeterminedCharsCaptor} from './undetermined-chars-captor';
import {WhitespacesCaptor} from './whitespaces-captor';

export const SortedCaptors = [
	// whitespace, tab and new line
	WhitespacesCaptor, TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor,
	// shebang and comment
	ScriptCommandCaptor,
	SingleLineCommentCaptor, MultipleLinesCommentCaptor,
	// statement
	PackageDeclarationCaptor,
	ImportDeclarationCaptor,
	InterfaceDeclarationCaptor,
	ClassDeclarationCaptor,
	AtInterfaceDeclarationCaptor,
	EnumClassDeclarationCaptor,
	RecordClassDeclarationCaptor,
	TraitClassDeclarationCaptor,
	// keyword
	KwStaticCaptor,
	KwAsCaptor,
	KwPublicCaptor, KwProtectedCaptor, KwPrivateCaptor,
	KwFinalCaptor, KwAbstractCaptor, KwStrictfpCaptor,
	KwSealedCaptor, KwPermitsCaptor, KwNonSealedCaptor,
	KwExtendsCaptor, KwImplementsCaptor,
	KwDefaultCaptor, KwSynchronizedCaptor, KwNativeCaptor,
	KwTransientCaptor, KwVolatileCaptor,
	// reserved keyword
	KwConstCaptor,
	KwGotoCaptor,
	// symbol
	SemicolonCaptor, DotCaptor, CommaCaptor,
	AsteriskCaptor,
	LBraceCaptor, RBraceCaptor,
	LBrackCaptor, RBrackCaptor,
	LParenCaptor, RParenCaptor,
	LAngleBrackCaptor, RAngleBrackCaptor,
	// identifier
	IdentifierCaptor,
	// others
	UndeterminedCharsCaptor
] as const;

// noinspection JSUnusedGlobalSymbols
export const Captors = {
	AbstractAstNodeCaptor,
	AbstractSameCharsCaptor, AbstractSingleCharCaptor,
	AbstractEndMarkedCaptor, AbstractEndMarkedWithNewLineCaptor,
	AbstractCommentCaptor,
	AbstractKeywordCaptor, AbstractSingleWordKeywordCaptor,
	AbstractTypeCaptor,

	// whitespace, tab and new line
	WhitespacesCaptor, TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor,
	// shebang and comment
	ScriptCommandCaptor,
	SingleLineCommentCaptor, MultipleLinesCommentCaptor,
	// statement
	PackageDeclarationCaptor,
	ImportDeclarationCaptor,
	InterfaceDeclarationCaptor,
	ClassDeclarationCaptor,
	AtInterfaceDeclarationCaptor,
	EnumClassDeclarationCaptor,
	RecordClassDeclarationCaptor,
	TraitClassDeclarationCaptor,
	// keyword
	KwStaticCaptor,
	KwAsCaptor,
	KwPublicCaptor, KwProtectedCaptor, KwPrivateCaptor,
	KwFinalCaptor, KwAbstractCaptor, KwStrictfpCaptor,
	KwSealedCaptor, KwPermitsCaptor, KwNonSealedCaptor,
	KwExtendsCaptor, KwImplementsCaptor,
	KwDefaultCaptor, KwSynchronizedCaptor, KwNativeCaptor,
	KwTransientCaptor, KwVolatileCaptor,
	// reserved keyword
	KwConstCaptor,
	KwGotoCaptor,
	// symbol
	SemicolonCaptor, DotCaptor, CommaCaptor,
	AsteriskCaptor,
	LBraceCaptor, RBraceCaptor,
	LBrackCaptor, RBrackCaptor,
	LParenCaptor, RParenCaptor,
	LAngleBrackCaptor, RAngleBrackCaptor,
	// identifier
	IdentifierCaptor,
	// others
	UndeterminedCharsCaptor
} as const;
