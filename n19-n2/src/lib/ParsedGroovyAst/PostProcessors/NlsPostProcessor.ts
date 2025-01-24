import {GroovyParser, NlsContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {CommentsNodeProcessorAdapter} from './CommentsNodeProcessorAdapter';

/**
 * ignored
 */
export class NlsPostProcessor extends CommentsNodeProcessorAdapter<NlsContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoreToParsed(ctx: NlsContext): boolean {
		const terminalNodes = ctx.NL_list();
		if (terminalNodes != null && terminalNodes.length !== 0) {
			for (const node of terminalNodes) {
				if (node.symbol.text?.startsWith('//') === true) {
					return false;
				}
			}
			return true;
		} else {
			return !ctx.start?.text?.startsWith('//');
		}
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const parsed = decorated.parsed;
		const ctx = parsed.groovyParserRuleContext as NlsContext;
		const terminalNodes = ctx.NL_list();
		return (terminalNodes ?? [])
			.filter(node => this.isSingleLineComment(node) || this.isMultipleLineComment(node))
			.map(node => DecoratedNode.createSymbol(parsed, GroovyParser.NL, node));
	}
}
