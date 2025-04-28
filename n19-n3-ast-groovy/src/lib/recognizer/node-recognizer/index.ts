import {KwPackageRecognizer} from './package-recognizer';
import {ScriptCommandRecognizer} from './script-command-recognizer';

// abstract
export * from './abstract-in-string-recognizer';
// script command
export * from './script-command-recognizer';
// keyword
export * from './package-recognizer';

export const AllNodeRecognizers = [
	// script command
	new ScriptCommandRecognizer(),
	// keyword
	new KwPackageRecognizer()
];
