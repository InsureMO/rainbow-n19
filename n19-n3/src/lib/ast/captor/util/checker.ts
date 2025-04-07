import {
	AstNodeCaptorCharCheck,
	AstNodeCaptorCharFuncCheck,
	AstNodeCaptorCharsChecker,
	AstNodeCaptorCharsCheckers,
	AstNodeCaptorCheckers
} from '../captor';

export const isCharCheck = (_checker: AstNodeCaptorCheckers, type: string): _checker is AstNodeCaptorCharCheck => {
	return type === 'string';
};

export const isFuncCheck = (_checker: AstNodeCaptorCheckers, type: string): _checker is AstNodeCaptorCharFuncCheck => {
	return type === 'function';
};

export const isArrayCheck = (checker: AstNodeCaptorCheckers): checker is AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers => {
	return Array.isArray(checker);
};

export const isMultiChecks = (checkers: AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers): checkers is AstNodeCaptorCharsCheckers => {
	return checkers.some(checker => Array.isArray(checker));
};
