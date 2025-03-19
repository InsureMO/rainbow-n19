import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {FormalParameterListContext, GroovyParser, ThisFormalParameterContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ThisFormalParameterContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of formal parameter list.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "THIS" node as my last child,<br>
 * 3. find and put a "," node after me.
 */
export class ThisFormalParameterPostProcessor extends PostNodeProcessorAdapter<ThisFormalParameterContext> {
	private static THIS: TerminalNodePair = [(ctx) => ctx.THIS(), GroovyParser.THIS];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_thisFormalParameter, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ThisFormalParameterPostProcessor.THIS
		});
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ThisFormalParameterContext;
		const parentCtx = ctx.parentCtx as FormalParameterListContext;
		const firstCommaNode = parentCtx.COMMA(0);
		if (firstCommaNode != null) {
			return [DecoratedNode.createSymbol(node.parent.decorated.parsed, GroovyParser.COMMA, firstCommaNode)];
		}
		return [];
	}
}