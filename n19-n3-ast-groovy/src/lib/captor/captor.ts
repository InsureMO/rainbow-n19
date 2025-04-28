import {Optional} from '@rainbow-n19/n3-ast';
import {GroovyAst} from '../ast';
import {GroovyAstNode} from '../node';
import {AstTokenizer} from './ast-tokenizer';
import {Char} from './types';

export type AstNodeCaptorCharCheck = Char;
export type AstNodeCaptorCharFuncCheck = {
	(char: Char, tokenizer: AstTokenizer): boolean;
	describe: () => string;
}
export type AstNodeCaptorCharChecker = AstNodeCaptorCharCheck | AstNodeCaptorCharFuncCheck;
export type AstNodeCaptorCharsChecker = Array<AstNodeCaptorCharChecker>;
export type AstNodeCaptorCharsCheckers = Array<AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker>;
export type AstNodeCaptorCheckers = AstNodeCaptorCharChecker | AstNodeCaptorCharsChecker | AstNodeCaptorCharsCheckers;

export interface AstNodeCaptor {
	/**
	 * checkers of leading chars. if return empty array means accept anything.
	 */
	checkers(): AstNodeCaptorCheckers;
	/**
	 * start to visit the char sequence from given offset.
	 * and given char is the char of given offset.
	 * nodes visited should be appended to ast in this function
	 */
	visit(char: Char, offset: number): void;
	// operators
	/**
	 * get char of given offset
	 */
	charAt(offset: number): Optional<Char>;
	/**
	 * slice text from given start offset to given end offset
	 */
	sliceText(startOffset: number, endOffset: number): Optional<string>;
	/**
	 * get current line number
	 */
	currentLine(): number;
	/**
	 * get ast
	 */
	ast(): GroovyAst;
	/**
	 * get latest node in ast
	 */
	latestNode(): GroovyAstNode;
}
