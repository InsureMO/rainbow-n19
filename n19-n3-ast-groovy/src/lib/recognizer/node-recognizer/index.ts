import {MultipleLinesCommentsRecognizer} from './multiple-lines-comments-recognizer';
import {ScriptCommandRecognizer} from './script-command-recognizer';
import {SingleLineCommentsRecognizer} from './single-line-comments-recognizer';

// abstract
export * from './abstract-in-string-recognizer';
export * from './abstract-comments-recognizer';
// script command
export * from './script-command-recognizer';
// comment
export * from './single-line-comments-recognizer';
export * from './multiple-lines-comments-recognizer';
// keyword
export * from './package-recognizer';

export const AllNodeRecognizers = [
	// script command
	new ScriptCommandRecognizer(),
	// comment
	new SingleLineCommentsRecognizer(),
	new MultipleLinesCommentsRecognizer()
	// keyword
	// new KwPackageRecognizer()
];
