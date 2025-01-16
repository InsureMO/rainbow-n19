import {TerminalNode} from 'antlr4';
import {AnnotationContext, ElementValuesContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: AnnotationContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of annotation.<br>
 * doing:<br>
 * 1. put a "(" before itself.
 */
export class ElementValuesPostProcessor extends PostNodeProcessorAdapter<ElementValuesContext> {
	private static LPAREN: TerminalNodePair = [(ctx: AnnotationContext) => ctx.LPAREN(), GroovyParser.LPAREN];

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ElementValuesContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof AnnotationContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: ElementValuesPostProcessor.LPAREN
			});
		} else {
			// decorated.parsed.debugger.addMissedLogics(`Parent context[${parentCtx.constructor.name}] of ElementValuesContext is not supported yet.`);
		}
		return [];
	}
}
