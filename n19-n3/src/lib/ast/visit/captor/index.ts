import {AbstractCharSequenceCaptor} from './abstract-char-sequence-captor';
import {AbstractSameCharsCaptor} from './abstract-same-chars-captor';
import {NewLineStartsWithCarriageReturnCaptor, NewLineStartsWithNewLineCaptor} from './new-line-captors';
import {ScriptCommandCaptor} from './script-command-captor';
import {TabsCaptor} from './tabs-captor';
import {UndeterminedTextCaptor} from './undetermined-text-captor';
import {WhitespacesCaptor} from './whitespaces-captor';

export const SortedCaptors = [
	WhitespacesCaptor,
	TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor,
	NewLineStartsWithNewLineCaptor,

	ScriptCommandCaptor,

	UndeterminedTextCaptor
] as const;

export const Captors = {
	AbstractCharSequenceCaptor,
	AbstractSameCharsCaptor,

	WhitespacesCaptor,
	TabsCaptor,
	NewLineStartsWithCarriageReturnCaptor,
	NewLineStartsWithNewLineCaptor,

	ScriptCommandCaptor,

	UndeterminedTextCaptor
} as const;
