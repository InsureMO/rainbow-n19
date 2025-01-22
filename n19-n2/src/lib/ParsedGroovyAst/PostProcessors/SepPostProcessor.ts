import {TerminalNode} from 'antlr4';
import {GroovyParser, SepContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class SepPostProcessor extends PostNodeProcessorAdapter<SepContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// needCopyTextOnToParsed(_ctx: SepContext): boolean {
	// 	return false;
	// }

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const parsed = node.decorated.parsed;
		const ctx = parsed.groovyParserRuleContext as SepContext;
		return (ctx.children ?? []).map(node => {
			if (!(node instanceof TerminalNode)) {
				return null;
			}
			if (node.symbol.type === GroovyParser.SEMI) {
				return DecoratedNode.createSymbol(parsed, GroovyParser.SEMI, node);
			} else if (node.symbol.type === GroovyParser.NL) {
				const text = node.symbol.text ?? '';
				if (text.startsWith('//')
					|| (text.startsWith('/*') && text.endsWith('*/'))) {
					return DecoratedNode.createSymbol(parsed, GroovyParser.NL, node);
				}
			} else {
				return null;
			}
		}).filter(x => x != null);
	}
}
