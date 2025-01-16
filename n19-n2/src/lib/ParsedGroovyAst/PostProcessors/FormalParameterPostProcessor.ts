import {TerminalNode} from 'antlr4';
import {FormalParameterContext, FormalParameterListContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromFormalParameterList = (ctx: FormalParameterListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForFormalParameterList = [TerminalNodeGetFromFormalParameterList, SymbolIndex];

/**
 * could be child of formal parameter list.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class FormalParameterPostProcessor extends PostNodeProcessorAdapter<FormalParameterContext> {
	private static COMMA: TerminalNodePairForFormalParameterList = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_formalParameter, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as FormalParameterContext;
		const parentCtx = ctx.parentCtx as FormalParameterListContext;
		const thisFormalParameterExists = parentCtx.thisFormalParameter() != null;
		// when first comma grabbed by this formal parameter, index offset set to 1
		// otherwise index offset is 0
		return this.collectTerminalNodeWithIndexToArray({
			decorated,
			siblings: (ctx: FormalParameterListContext) => ctx.formalParameter_list(),
			indexOffset: thisFormalParameterExists ? 1 : 0,
			terminal: FormalParameterPostProcessor.COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}