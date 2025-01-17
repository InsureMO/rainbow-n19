import {TerminalNode} from 'antlr4';
import {GroovyParser, NamedPropertyArgContext, NamedPropertyArgLabelContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromNamedPropertyArg = (ctx: NamedPropertyArgContext) => Optional<TerminalNode>;
type TerminalNodePairForNamedPropertyArg = [TerminalNodeGetFromNamedPropertyArg, SymbolIndex];

/**
 * could be child of named property arg.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a ":" node after me.
 */
export class NamedPropertyArgLabelPostProcessor extends PostNodeProcessorAdapter<NamedPropertyArgLabelContext> {
	private static COLON: TerminalNodePairForNamedPropertyArg = [(ctx) => ctx.COLON(), GroovyParser.COLON];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedPropertyArgLabel, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: NamedPropertyArgLabelPostProcessor.COLON
		});
	}
}