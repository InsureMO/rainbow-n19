import {GroovyParser, GstringPathContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of gstring value.<br>
 * doing:<br>
 * 1. find and put all GStringPathPart (Dot IdentifierInGString) as children of my parent, after first identifier child.
 */
export class GstringPathPostProcessor extends PostNodeProcessorAdapter<GstringPathContext> {
	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const parsed = decorated.parsed;
		const ctx = parsed.groovyParserRuleContext as GstringPathContext;
		return (ctx.GStringPathPart_list() ?? []).map(partNode => {
			return DecoratedNode.createSymbol(parsed, GroovyParser.GStringPathPart, partNode);
		});
	}
}