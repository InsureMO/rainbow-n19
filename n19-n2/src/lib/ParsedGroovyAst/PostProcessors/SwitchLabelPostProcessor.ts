import {TerminalNode} from 'antlr4';
import {GroovyParser, SwitchLabelContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: SwitchLabelContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of switch block statement group.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "CASE" node as my first child,<br>
 * 3. find and put a "DEFAULT" node as my first child,<br>
 * 4. find and put a ":" node as my last child.
 */
export class SwitchLabelPostProcessor extends PostNodeProcessorAdapter<SwitchLabelContext> {
	private static CASE: TerminalNodePair = [(ctx) => ctx.CASE(), GroovyParser.CASE];
	private static DEFAULT: TerminalNodePair = [(ctx) => ctx.DEFAULT(), GroovyParser.DEFAULT];
	private static COLON: TerminalNodePair = [(ctx) => ctx.COLON(), GroovyParser.COLON];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_switchLabel, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodes({
			decorated: node.decorated,
			terminals: [SwitchLabelPostProcessor.CASE, SwitchLabelPostProcessor.DEFAULT],
			firstOnly: true
		});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: SwitchLabelPostProcessor.COLON
		});
	}
}