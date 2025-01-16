import {TerminalNode} from 'antlr4';
import {GroovyParser, TypeParametersContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: TypeParametersContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class declaration,<br>
 * 2. method declaration.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. put a "<" node as my first child,<br>
 * 3. put a ">" node as my last child.<br>
 */
export class TypeParametersPostProcessor extends PostNodeProcessorAdapter<TypeParametersContext> {
	private static LT: TerminalNodePair = [(ctx: TypeParametersContext) => ctx.LT(), GroovyParser.LT];
	private static GT: TerminalNodePair = [(ctx: TypeParametersContext) => ctx.GT(), GroovyParser.GT];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeParameters, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: TypeParametersPostProcessor.LT});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: TypeParametersPostProcessor.GT});
	}
}
