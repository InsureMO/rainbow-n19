import {Optional} from '@rainbow-n19/n2';
import {Ast} from '../ast';
import {AstNode} from '../ast-node';
import {AstVisitor} from '../ast-visitor';
import {AbstractContainerAstNode, CompilationUnitNode} from '../node';
import {Char} from './types';

export type AstNodeCaptorCharCheck = Char;
export type AstNodeCaptorCharFuncCheck = {
	(char: Char, astVisitor: AstVisitor): boolean;
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
	 * nodes visited should be appended to ast in this function, and returns true if any node visited.
	 * or returns false if no node visited.
	 */
	visit(char: Char, offset: number): boolean;

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

	ast(): Ast;

	/**
	 * get current node in ast
	 */
	currentNode(): AstNode;
	/**
	 * get latest node in ast
	 */
	latestNode(): AstNode;

	/**
	 * get latest open node by given node, or use latest node if node not given.
	 * the latest open node is:
	 * 1. if node is {@link CompilationUnitNode}, it is itself
	 * 2. if node is {@link AbstractContainerAstNode} and not closed, it is itself,
	 * 3. recursively find from its ancestor nodes, till found.
	 */
	latestOpenContainerNode(node?: AstNode): CompilationUnitNode | AbstractContainerAstNode;

	/**
	 * last direct child of latest open container node, or latest open container node itself if it has no child
	 */
	latestOpenNode(node?: AstNode): AstNode;
}
