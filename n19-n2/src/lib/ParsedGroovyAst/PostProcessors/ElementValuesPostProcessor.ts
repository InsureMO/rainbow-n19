import {AnnotationContext, ElementValuesContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of annotation.<br>
 * doing:<br>
 * 1. put a "(" before itself.
 */
export class ElementValuesPostProcessor extends PostNodeProcessorAdapter<ElementValuesContext> {
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValuesContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof AnnotationContext) {
			const lparenTerminalNode = parentCtx.LPAREN();
			if (lparenTerminalNode != null) {
				const annotationDecorated = node.parent.decorated;
				const lparenNode = DecoratedNode.createSymbol(annotationDecorated.parsed, GroovyParser.LPAREN, lparenTerminalNode);
				return [lparenNode];
			}
		} else {
			// decorated.parsed.debugger.addMissedLogics(`Parent context[${parentCtx.constructor.name}] of ElementValuesContext is not supported yet.`);
		}
		return [];
	}
}
