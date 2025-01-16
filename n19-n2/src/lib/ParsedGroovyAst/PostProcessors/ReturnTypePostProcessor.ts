import {TerminalNode} from 'antlr4';
import {GroovyParser, ReturnTypeContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: ReturnTypeContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of method declaration.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put "VOID" as first child of me.
 */
export class ReturnTypePostProcessor extends PostNodeProcessorAdapter<ReturnTypeContext> {
	private static VOID: TerminalNodePair = [(ctx) => ctx.VOID(), GroovyParser.VOID];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_returnType, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.decorated,
			terminal: ReturnTypePostProcessor.VOID
		});
	}
}