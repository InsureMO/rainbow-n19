import {TerminalNode} from 'antlr4';
import {FormalParameterContext, GroovyParser, VariableModifiersOptContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromFormalParameter = (ctx: FormalParameterContext) => Optional<TerminalNode>;
type TerminalNodePairForFormalParameter = [TerminalNodeGetFromFormalParameter, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. formal parameter,<br>
 * 2. catch clause,<br>
 * 3. enhanced for control.<br>
 * doing:<br>
 * 1. find and put a "..." node after me, when parent is formal parameter and next type node not exists.
 */
export class VariableModifiersOptPostProcessor extends PostNodeProcessorAdapter<VariableModifiersOptContext> {
	private static FORMAL_PARAMETER__ELLIPSIS: TerminalNodePairForFormalParameter = [(ctx) => ctx.ELLIPSIS(), GroovyParser.ELLIPSIS];

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as VariableModifiersOptContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof FormalParameterContext) {
			if (parentCtx.type_() == null) {
				return this.collectTerminalNodeToArray({
					decorated: node.parent.decorated,
					terminal: VariableModifiersOptPostProcessor.FORMAL_PARAMETER__ELLIPSIS
				});
			}
		}
		return [];
	}
}