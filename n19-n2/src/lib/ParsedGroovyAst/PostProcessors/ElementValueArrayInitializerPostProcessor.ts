import {TerminalNode} from 'antlr4';
import {ElementValueArrayInitializerContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ElementValueArrayInitializerContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of element value.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. put a "[" node as its first child,<br>
 * 3. put a "," node before "]" node, when there is a comma tailing,<br>
 * 4. put a "]" node as its last child.
 */
export class ElementValueArrayInitializerPostProcessor extends PostNodeProcessorAdapter<ElementValueArrayInitializerContext> {
	private static LBRACK: TerminalNodePair = [(ctx) => ctx.LBRACK(), GroovyParser.LBRACK];
	private static RBRACK: TerminalNodePair = [(ctx) => ctx.RBRACK(), GroovyParser.RBRACK];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_elementValueArrayInitializer, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeToArray({decorated, terminal: ElementValueArrayInitializerPostProcessor.LBRACK});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeToArray({decorated, terminal: ElementValueArrayInitializerPostProcessor.RBRACK});
	}
}
