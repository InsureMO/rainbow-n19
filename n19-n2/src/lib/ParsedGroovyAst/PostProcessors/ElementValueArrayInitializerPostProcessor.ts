import {ElementValueArrayInitializerContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValueArrayInitializerPostProcessor extends PostNodeProcessorAdapter<ElementValueArrayInitializerContext> {
	shouldCountIntoHierarchy(node: DecoratedNode): boolean {
		node.setRole(GroovyParser.RULE_elementValueArrayInitializer, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValueArrayInitializerContext;
		const lbrackTerminalNode = ctx.LBRACK();
		if (lbrackTerminalNode != null) {
			// share underlay node
			const lbrackNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.LBRACK, lbrackTerminalNode);
			return [lbrackNode];
		}
		return [];
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes: Array<DecoratedNode> = [];

		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValueArrayInitializerContext;
		const valueList = ctx.elementValue_list();
		const commaList = ctx.COMMA_list();
		const commaCount = commaList.length;
		if (commaCount !== 0 && valueList.length === commaCount) {
			// last one is comma
			const lastCommaTerminalNode = commaList[commaCount - 1];
			const lastCommaNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.COMMA, lastCommaTerminalNode);
			nodes.push(lastCommaNode);
		}

		const rbrackTerminalNode = ctx.RBRACK();
		if (rbrackTerminalNode != null) {
			// share underlay node
			const rbrackNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.RBRACK, rbrackTerminalNode);
			nodes.push(rbrackNode);
		}
		return nodes;
	}
}
