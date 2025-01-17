import {ClassicalForControlContext, ForInitContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of classical for control.<br>
 * doing:<br>
 * 1. find and put a ";" node after me,<br>
 * 2. find and put next ";" node after me, when next expression node not exists.
 */
export class ForInitPostProcessor extends PostNodeProcessorAdapter<ForInitContext> {
	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes: Array<DecoratedNode> = [];
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ClassicalForControlContext;
		// noinspection DuplicatedCode
		const semiTerminalNode = ctx.SEMI(0);
		if (semiTerminalNode != null) {
			nodes.push(DecoratedNode.createSymbol(decorated.parsed, GroovyParser.SEMI, semiTerminalNode));
		}
		if (ctx.expression() == null) {
			const semiTerminalNode = ctx.SEMI(1);
			if (semiTerminalNode != null) {
				nodes.push(DecoratedNode.createSymbol(decorated.parsed, GroovyParser.SEMI, semiTerminalNode));
			}
		}
		return nodes;
	}
}