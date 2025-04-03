import {AstVisitor} from '../visit';
import {Char} from './types';

export type AstNodeCaptorCharCheck = Char;
export type AstNodeCaptorCharFuncCheck = (char: Char, astVisitor: AstVisitor) => boolean;
export type AstNodeCaptorCharChecker = AstNodeCaptorCharCheck | AstNodeCaptorCharFuncCheck;
export type AstNodeCaptorCharsChecker = Array<AstNodeCaptorCharChecker>;
export type AstNodeCaptorCharsCheckers = Array<AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker>;

export interface AstNodeCaptor {
	/**
	 * checkers of leading chars. if return empty array means accept anything.
	 */
	checkers(): AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers;
	/**
	 * start to visit the char sequence from given offset.
	 * and given char is the char of given offset.
	 * nodes visited should be appended to ast in this function, and returns true if any node visited.
	 * or returns false if no node visited.
	 */
	visit(char: Char, offset: number): boolean;
}
