import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';
import {AbstractEndMarkedCaptor, AbstractEndMarkedWithNewLineCaptor} from './abstract-end-marked-captor';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';
import {AbstractSingleCharCaptor} from './abstract-single-char-captor';
import {AbstractCommentCaptor, MultipleLinesCommentCaptor, SingleLineCommentCaptor} from './comment-captors';
import {IdentifierCaptor} from './identifier-captor';
import {NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor} from './new-line-captors';
import {PackageDeclarationCaptor} from './package-declaration-captor';
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
	// keyword
	PackageDeclarationCaptor,
	// symbol
	SemicolonCaptor,
	DotCaptor,
	SpreadDotCaptor,
	// identifier
	IdentifierCaptor,
	// others
	UndeterminedCharsCaptor
] as const;

export const Captors = {
	// abstract
	AbstractCharSequenceCaptor,
	AbstractSameCharsCaptor,
	AbstractSingleCharCaptor,
	AbstractEndMarkedCaptor,
	AbstractEndMarkedWithNewLineCaptor,
	AbstractCommentCaptor,

	// whitespace, tab and new line
	WhitespacesCaptor,
	TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor,
	NewLineStartsWithNewLineCaptor,
	// shebang and comment
	ScriptCommandCaptor,
	SingleLineCommentCaptor,
	MultipleLinesCommentCaptor,
	// keyword
	PackageDeclarationCaptor,
	// symbol
	SemicolonCaptor,
	DotCaptor,
	SpreadDotCaptor,
	// identifier
	IdentifierCaptor,
	// others
	UndeterminedCharsCaptor
} as const;
