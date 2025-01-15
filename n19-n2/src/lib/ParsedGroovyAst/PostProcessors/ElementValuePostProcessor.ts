import {
	ElementValueArrayInitializerContext,
	ElementValueContext,
	GroovyParser
} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class ElementValuePostProcessor extends PostNodeProcessorAdapter<ElementValueContext> {
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValueContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ElementValueArrayInitializerContext) {
			const valueList = parentCtx.elementValue_list();
			const valueIndex = valueList.indexOf(ctx);
			if (valueIndex !== 0) {
				// has a comma before each element value except first one
				const commaTerminalNode = parentCtx.COMMA(valueIndex - 1);
				const commaNode = DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.COMMA, commaTerminalNode);
				return [commaNode];
			}
		} else {
			decorated.parsed.debugger.addMissedLogics(`Parent context[${parentCtx.constructor.name}] of ElementValueContext is not supported yet.`);
		}
		return [];
	}
}
