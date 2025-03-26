import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';
import {AbstractDelegateCaptor} from './abstract-delegate-captor';
import {AbstractEndMarkedCaptor, AbstractEndMarkedWithNewLineCaptor} from './abstract-end-marked-captor';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';
import {AbstractCommentCaptor, MultipleLinesCommentCaptor, SingleLineCommentCaptor} from './comment-captor';
import {PKeywordCaptor} from './keyword-captor';
import {NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor} from './new-line-captors';
import {ScriptCommandCaptor} from './script-command-captor';
import {TabsCaptor} from './tabs-captor';
import {UndeterminedTextCaptor} from './undetermined-text-captor';
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
	PKeywordCaptor,
	// others
	UndeterminedTextCaptor
] as const;

export const Captors = {
	AbstractCharSequenceCaptor,
	AbstractSameCharsCaptor,
	AbstractEndMarkedCaptor,
	AbstractEndMarkedWithNewLineCaptor,
	AbstractCommentCaptor,

	AbstractDelegateCaptor,
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
	PKeywordCaptor,
	// others
	UndeterminedTextCaptor
} as const;
