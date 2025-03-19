import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {
	DoWhileStmtAltContext,
	EmptyStmtAltContext,
	GroovyParser,
	IfElseStatementContext,
	ReturnStmtAltContext,
	StatementContext,
	SynchronizedStmtAltContext,
	ThrowStmtAltContext
} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromSynchronizedStatement = (ctx: SynchronizedStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForSynchronizedStatement = [TerminalNodeGetFromSynchronizedStatement, SymbolIndex];
type TerminalNodeGetFromReturnStatement = (ctx: ReturnStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForReturnStatement = [TerminalNodeGetFromReturnStatement, SymbolIndex];
type TerminalNodeGetFromThrowStatement = (ctx: ThrowStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForThrowStatement = [TerminalNodeGetFromThrowStatement, SymbolIndex];
type TerminalNodeGetFromEmptyStatement = (ctx: EmptyStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForEmptyStatement = [TerminalNodeGetFromEmptyStatement, SymbolIndex];
type TerminalNodeGetFromIfElseStatement = (ctx: IfElseStatementContext) => Optional<TerminalNode>;
type TerminalNodePairForIfElseStatement = [TerminalNodeGetFromIfElseStatement, SymbolIndex];
type TerminalNodeGetFromLoopStatement = (ctx: DoWhileStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForLoopStatement = [TerminalNodeGetFromLoopStatement, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. script statement,<br>
 * 2. block statement,<br>
 * 3. if else statement,<br>
 * 4. loop statement,<br>
 * 5. statement (myself).<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "SYNCHRONIZED" node as my first child, when I am synchronized stmt alt,<br>
 * 3. find and put a "RETURN" node as my first child, when I am return stmt alt,<br>
 * 4. find and put a "THROW" node as my first child, when I am throw stmt alt,<br>
 * 5. find and put a ";" node as my first child, when I am empty stmt alt,<br>
 * 6. find and put a "ELSE" node after me, when parent is if else statement and my role in parent is tb, which is if part, not else part,<br>
 * 7. find and put a "WHILE" node after me, when parent is loop statement.
 */
export class StatementPostProcessor extends PostNodeProcessorAdapter<StatementContext> {
	private static SYNCHRONIZED_STATEMENT__SYNCHRONIZED: TerminalNodePairForSynchronizedStatement = [(ctx) => ctx.SYNCHRONIZED(), GroovyParser.SYNCHRONIZED];
	private static RETURN_STATEMENT__RETURN: TerminalNodePairForReturnStatement = [(ctx) => ctx.RETURN(), GroovyParser.RETURN];
	private static THROW_STATEMENT__THROW: TerminalNodePairForThrowStatement = [(ctx) => ctx.THROW(), GroovyParser.THROW];
	private static EMPTY_STATEMENT__SEMI: TerminalNodePairForEmptyStatement = [(ctx) => ctx.SEMI(), GroovyParser.SEMI];
	private static IF_ELSE_STATEMENT__ELSE: TerminalNodePairForIfElseStatement = [(ctx) => ctx.ELSE(), GroovyParser.ELSE];
	private static LOOP_STATEMENT__DO_WHILE__WHILE: TerminalNodePairForLoopStatement = [(ctx) => ctx.WHILE(), GroovyParser.WHILE];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_statement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as StatementContext;
		if (ctx instanceof SynchronizedStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: StatementPostProcessor.SYNCHRONIZED_STATEMENT__SYNCHRONIZED
			});
		} else if (ctx instanceof ReturnStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: StatementPostProcessor.RETURN_STATEMENT__RETURN
			});
		} else if (ctx instanceof ThrowStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: StatementPostProcessor.THROW_STATEMENT__THROW
			});
		} else if (ctx instanceof EmptyStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: StatementPostProcessor.EMPTY_STATEMENT__SEMI
			});
		}
		return [];
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as StatementContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof IfElseStatementContext) {
			if (parentCtx._tb === ctx) {
				return this.collectTerminalNodeToArray({
					decorated: node.parent.decorated,
					terminal: StatementPostProcessor.IF_ELSE_STATEMENT__ELSE
				});
			}
		} else if (parentCtx instanceof DoWhileStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: StatementPostProcessor.LOOP_STATEMENT__DO_WHILE__WHILE
			});
		}
		return [];
	}
}