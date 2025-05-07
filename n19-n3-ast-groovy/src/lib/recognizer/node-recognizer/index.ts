import {KwImportRecognizer} from './kw-import-recognizer';
import {KwPackageRecognizer} from './kw-package-recognizer';
import {MultipleLinesCommentsRecognizer} from './multiple-lines-comments-recognizer';
import {OpMultipleRecognizer} from './op-multiple-recognizer';
import {ScriptCommandRecognizer} from './script-command-recognizer';
import {SingleLineCommentsRecognizer} from './single-line-comments-recognizer';

// abstract
export * from './abstract-recognizer';
export * from './abstract-scene-based-recognizer';
export * from './abstract-eager-recognizer';
export * from './abstract-comments-recognizer';
// script command
export * from './script-command-recognizer';
// comment
export * from './single-line-comments-recognizer';
export * from './multiple-lines-comments-recognizer';
// keyword
export * from './kw-package-recognizer';
export * from './kw-import-recognizer';
// operator
export * from './op-multiple-recognizer';

export const AllNodeRecognizers = [
	// script command
	new ScriptCommandRecognizer(),
	// comment
	new SingleLineCommentsRecognizer(),
	new MultipleLinesCommentsRecognizer(),
	// keyword
	new KwPackageRecognizer(),
	new KwImportRecognizer(),
	// operator
	new OpMultipleRecognizer()
];
