import {TerminalNode} from 'antlr4';
import {ClassBodyContext, EnumConstantsContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromClassBody = (ctx: ClassBodyContext) => Optional<TerminalNode>;
type TerminalNodePairForClassBody = [TerminalNodeGetFromClassBody, SymbolIndex];

/**
 * could be child of class body.<br>
 * doing:<br>
 * 1. find and put a "," node after me.
 */
export class EnumConstantsPostProcessor extends PostNodeProcessorAdapter<EnumConstantsContext> {
	private static COMMA: TerminalNodePairForClassBody = [(ctx) => ctx.COMMA(), GroovyParser.COMMA];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as EnumConstantsContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof ClassBodyContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: EnumConstantsPostProcessor.COMMA
			});
		}
		return [];
	}
}