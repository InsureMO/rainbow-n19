import * as KeywordRecognizers from './keyword';
import * as OperatorRecognizers from './operator';
import * as StatementRecognizers from './statement';

export * from './shared';
export * from './pointcuts';

// abstract
export * from './abstract';
// keyword
export * from './keyword';
// operator
export * from './operator';
// separator
export * from './separator';
// statement
export * from './statement';

export const AllNodeRecognizers = [
	// keyword
	...Object.values(KeywordRecognizers),
	// operator
	...Object.values(OperatorRecognizers),
	// statement
	...Object.values(StatementRecognizers)
].map(Recognizer => new Recognizer());
