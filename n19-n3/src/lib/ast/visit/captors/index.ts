import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';
import {AbstractEndMarkedCaptor, AbstractEndMarkedWithNewLineCaptor} from './abstract-end-marked-captor';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';
import {AbstractSingleCharCaptor} from './abstract-single-char-captor';
import {AbstractCommentCaptor, MultipleLinesCommentCaptor, SingleLineCommentCaptor} from './comment-captors';
import {IdentifierCaptor} from './identifier-captor';
import {
	AbstractKeywordCaptor,
	ImportDeclarationCaptor,
	KwAbstractCaptor,
	KwAsCaptor,
	KwAtInterfaceCaptor,
	KwClassCaptor,
	KwConstCaptor,
	KwDefaultCaptor,
	KwEnumCaptor,
	KwExtendsCaptor,
	KwFinalCaptor,
	KwGotoCaptor,
	KwImplementsCaptor,
	KwInterfaceCaptor,
	KwNativeCaptor,
	KwNonSealedCaptor,
	KwPermitsCaptor,
	KwPrivateCaptor,
	KwProtectedCaptor,
	KwPublicCaptor,
	KwRecordCaptor,
	KwSealedCaptor,
	KwStaticCaptor,
	KwStrictfpCaptor,
	KwSynchronizedCaptor,
	KwTraitCaptor,
	KwTransientCaptor,
	KwVolatileCaptor,
	PackageDeclarationCaptor
} from './keyword-captors';
import {NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor} from './new-line-captors';
import {ScriptCommandCaptor} from './script-command-captor';
import {DotCaptor, SemicolonCaptor, SpreadDotCaptor} from './symbol-captors';
import {TabsCaptor} from './tabs-captor';
import {UndeterminedCharsCaptor} from './undetermined-chars-captor';
import {WhitespacesCaptor} from './whitespaces-captor';

export const SortedCaptors = [
	// whitespace, tab and new line
	WhitespacesCaptor,
	TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor,
	NewLineStartsWithNewLineCaptor,
	// shebang and comment
	ScriptCommandCaptor,
	SingleLineCommentCaptor,
	MultipleLinesCommentCaptor,
	// statement
	PackageDeclarationCaptor,
	ImportDeclarationCaptor,
	// keyword
	KwStaticCaptor,
	KwAsCaptor,
	KwStaticCaptor,
	KwAsCaptor,
	KwPublicCaptor,
	KwProtectedCaptor,
	KwPrivateCaptor,
	KwFinalCaptor,
	KwAbstractCaptor,
	KwStrictfpCaptor,
	KwRecordCaptor,
	KwSealedCaptor,
	KwPermitsCaptor,
	KwNonSealedCaptor,
	KwInterfaceCaptor,
	KwClassCaptor,
	KwAtInterfaceCaptor,
	KwEnumCaptor,
	KwTraitCaptor,
	KwExtendsCaptor,
	KwImplementsCaptor,
	KwDefaultCaptor,
	KwSynchronizedCaptor,
	KwTransientCaptor,
	KwVolatileCaptor,
	KwNativeCaptor,
	KwConstCaptor,
	KwGotoCaptor,
	// symbol
	SemicolonCaptor,
	DotCaptor,
	SpreadDotCaptor,
	// identifier
	IdentifierCaptor,
	// others
	UndeterminedCharsCaptor
] as const;

// noinspection JSUnusedGlobalSymbols
export const Captors = {
	// abstract
	AbstractCharSequenceCaptor,
	AbstractSameCharsCaptor,
	AbstractSingleCharCaptor,
	AbstractEndMarkedCaptor,
	AbstractEndMarkedWithNewLineCaptor,
	AbstractCommentCaptor,
	AbstractKeywordCaptor,

	// whitespace, tab and new line
	WhitespacesCaptor,
	TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor,
	NewLineStartsWithNewLineCaptor,
	// shebang and comment
	ScriptCommandCaptor,
	SingleLineCommentCaptor,
	MultipleLinesCommentCaptor,
	// statement
	PackageDeclarationCaptor,
	ImportDeclarationCaptor,
	// keyword
	KwStaticCaptor,
	KwAsCaptor,
	KwPublicCaptor,
	KwProtectedCaptor,
	KwPrivateCaptor,
	KwFinalCaptor,
	KwAbstractCaptor,
	KwStrictfpCaptor,
	KwRecordCaptor,
	KwSealedCaptor,
	KwPermitsCaptor,
	KwNonSealedCaptor,
	KwInterfaceCaptor,
	KwClassCaptor,
	KwAtInterfaceCaptor,
	KwEnumCaptor,
	KwTraitCaptor,
	KwExtendsCaptor,
	KwImplementsCaptor,
	KwDefaultCaptor,
	KwSynchronizedCaptor,
	KwTransientCaptor,
	KwVolatileCaptor,
	KwNativeCaptor,
	KwConstCaptor,
	KwGotoCaptor,
	// symbol
	SemicolonCaptor,
	DotCaptor,
	SpreadDotCaptor,
	// identifier
	IdentifierCaptor,
	// others
	UndeterminedCharsCaptor
} as const;
