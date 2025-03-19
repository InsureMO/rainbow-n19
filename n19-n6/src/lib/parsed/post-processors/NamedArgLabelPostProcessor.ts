import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, NamedArgContext, NamedArgLabelContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromNamedArg = (ctx: NamedArgContext) => Optional<TerminalNode>;
type TerminalNodePairForNamedArg = [TerminalNodeGetFromNamedArg, SymbolIndex];

/**
 * could be child of named arg.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a ":" node after me.
 */
export class NamedArgLabelPostProcessor extends PostNodeProcessorAdapter<NamedArgLabelContext> {
	private static COLON: TerminalNodePairForNamedArg = [(ctx) => ctx.COLON(), GroovyParser.COLON];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedArgLabel, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({
			decorated: node.parent.decorated,
			terminal: NamedArgLabelPostProcessor.COLON
		});
	}
}