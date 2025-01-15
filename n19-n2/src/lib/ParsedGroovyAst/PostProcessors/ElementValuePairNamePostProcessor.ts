import {ElementValuePairContext, ElementValuePairNameContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of element value pair.<br>
 * <br>
 * 1. put a "=" node after itself.
 */
export class ElementValuePairNamePostProcessor extends PostNodeProcessorAdapter<ElementValuePairNameContext> {
	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValuePairNameContext;
		const parentCtx = ctx.parentCtx as ElementValuePairContext;
		const assignTerminalNode = parentCtx.ASSIGN();
		if (assignTerminalNode != null) {
			const assignNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.ASSIGN, assignTerminalNode);
			return [assignNode];
		}
		return [];
	}
}
