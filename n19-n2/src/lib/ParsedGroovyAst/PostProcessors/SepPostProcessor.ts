import {GroovyParser, SepContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class SepPostProcessor extends PostNodeProcessorAdapter<SepContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: SepContext): boolean {
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const parsed = node.decorated.parsed;
		const ctx = parsed.groovyParserRuleContext as SepContext;
		const semiTerminalNodes = ctx.SEMI_list();
		return (semiTerminalNodes ?? []).map(semiTerminalNode => {
			return DecoratedNode.createSymbol(parsed, GroovyParser.SEMI, semiTerminalNode);
		});
	}
}
