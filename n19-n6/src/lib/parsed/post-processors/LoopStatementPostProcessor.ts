import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {
	DoWhileStmtAltContext,
	ForStmtAltContext,
	GroovyParser,
	LoopStatementContext,
	WhileStmtAltContext
} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromForStatement = (ctx: ForStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForForStatement = [TerminalNodeGetFromForStatement, SymbolIndex];
type TerminalNodeGetFromWhileStatement = (ctx: WhileStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForWhileStatement = [TerminalNodeGetFromWhileStatement, SymbolIndex];
type TerminalNodeGetFromDoWhileStatement = (ctx: DoWhileStmtAltContext) => Optional<TerminalNode>;
type TerminalNodePairForDoWhileStatement = [TerminalNodeGetFromDoWhileStatement, SymbolIndex];

/**
 * could be child of statement.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "FOR" node as my first child, when I am a for stmt alt,<br>
 * 3. find and put a "LPAREN" node as my first child, when I am a for stmt alt,<br>
 * 4. find and put a "WHILE" node as my first child, when I am a while stmt alt,<br>
 * 5. find and put a "DO" node as my first child, when I am a do while stmt alt.
 */
export class LoopStatementPostProcessor extends PostNodeProcessorAdapter<LoopStatementContext> {
	private static FOR_STATEMENT__FOR: TerminalNodePairForForStatement = [(ctx) => ctx.FOR(), GroovyParser.FOR];
	private static FOR_STATEMENT__LPAREN: TerminalNodePairForForStatement = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];
	private static FOR_STATEMENT__TERMINALS = [
		LoopStatementPostProcessor.FOR_STATEMENT__FOR,
		LoopStatementPostProcessor.FOR_STATEMENT__LPAREN
	];
	private static WHILE_STATEMENT__WHILE: TerminalNodePairForWhileStatement = [(ctx) => ctx.WHILE(), GroovyParser.WHILE];
	private static DO_WHILE_STATEMENT__DO: TerminalNodePairForDoWhileStatement = [(ctx) => ctx.DO(), GroovyParser.DO];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_loopStatement, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as LoopStatementContext;
		if (ctx instanceof ForStmtAltContext) {
			return this.collectTerminalNodes({
				decorated,
				terminals: LoopStatementPostProcessor.FOR_STATEMENT__TERMINALS,
				firstOnly: false
			});
		} else if (ctx instanceof WhileStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: LoopStatementPostProcessor.WHILE_STATEMENT__WHILE
			});
		} else if (ctx instanceof DoWhileStmtAltContext) {
			return this.collectTerminalNodeToArray({
				decorated,
				terminal: LoopStatementPostProcessor.DO_WHILE_STATEMENT__DO
			});
		}
		return [];
	}
}