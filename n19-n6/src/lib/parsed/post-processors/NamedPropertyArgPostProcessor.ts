import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, NamedPropertyArgContext, NamedPropertyArgListContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: NamedPropertyArgContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];
type TerminalNodeGetFromNamedPropertyArgList = (ctx: NamedPropertyArgListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForNamedPropertyArgList = [TerminalNodeGetFromNamedPropertyArgList, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. named property arg list,<br>
 * 2. argument list element,<br>
 * 3. enhanced argument list element.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "*" node as my first node,<br>
 * 3. find and put a ":" node as my second node, when "*" exists,<br>
 * 4. find and put a "," node after me, when parent is name property arg list.
 */
export class NamedPropertyArgPostProcessor extends PostNodeProcessorAdapter<NamedPropertyArgContext> {
	private static MUL: TerminalNodePair = [(ctx) => ctx.MUL(), GroovyParser.MUL];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static NAMED_PROPERTY_ARG_LIST__COMMA: TerminalNodePairForNamedPropertyArgList = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedPropertyArg, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const nodes = this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: NamedPropertyArgPostProcessor.MUL
		});
		if (nodes.length === 1) {
			const colonNode = this.collectTerminalNode({
				decorated: node.decorated,
				terminal: NamedPropertyArgPostProcessor.COLON
			});
			if (colonNode != null) {
				nodes.push(colonNode);
			}
		}
		return nodes;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as NamedPropertyArgContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof NamedPropertyArgListContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated: node.decorated,
				siblings: (ctx: NamedPropertyArgListContext) => ctx.namedPropertyArg_list(),
				indexOffset: 0,
				terminal: NamedPropertyArgPostProcessor.NAMED_PROPERTY_ARG_LIST__COMMA,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}