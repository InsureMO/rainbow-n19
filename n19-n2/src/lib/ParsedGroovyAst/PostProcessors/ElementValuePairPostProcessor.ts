import {ElementValuePairContext, ElementValuePairsContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of element value pairs.<br>
 * doing:<br>
 * 1. put a "," node before itself, when itself is not the first child of parent,<br>
 * 2. put itself as a container node,<br>
 */
export class ElementValuePairPostProcessor extends PostNodeProcessorAdapter<ElementValuePairContext> {
	collectBeforeEnter(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValuePairContext;
		const parentCtx = ctx.parentCtx as ElementValuePairsContext;
		const valueList = parentCtx.elementValuePair_list();
		const valueIndex = valueList.indexOf(ctx);
		if (valueIndex !== 0) {
			const commaTerminalNode = parentCtx.COMMA(valueIndex - 1);
			if (commaTerminalNode != null) {
				const commaNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.COMMA, commaTerminalNode);
				return [commaNode];
			}
		}
		return [];
	}

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		const decorated = node.decorated;
		decorated.setRole(GroovyParser.RULE_elementValuePair, DecoratedNode.RULE_ROLE);
		return true;
	}
}
