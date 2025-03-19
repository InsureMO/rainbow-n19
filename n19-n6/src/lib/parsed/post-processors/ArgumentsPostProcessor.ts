import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {ArgumentsContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ArgumentsContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. enum constant,<br>
 * 2. path element,<br>
 * 3. creator.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "(" node as my first child,<br>
 * 3. find and put a "," node as next child, when enhanced argument list in par not exists.<br>
 */
export class ArgumentsPostProcessor extends PostNodeProcessorAdapter<ArgumentsContext> {
	private static LPAREN: TerminalNodePair = [(ctx) => ctx.LPAREN(), GroovyParser.LPAREN];
	private static COMMA: TerminalNodePair = [(ctx) => ctx.COMMA(), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_arguments, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as ArgumentsContext;
		const nodes = this.collectTerminalNodeToArray({
			decorated,
			terminal: ArgumentsPostProcessor.LPAREN
		});
		if (ctx.enhancedArgumentListInPar() == null) {
			const commaNode = this.collectTerminalNode({
				decorated,
				terminal: ArgumentsPostProcessor.COMMA
			});
			if (commaNode != null) {
				nodes.push(commaNode);
			}
		}
		return nodes;
	}
}