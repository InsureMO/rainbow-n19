import {TerminalNode} from 'antlr4';
import {GroovyParser, TypeArgumentsContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: TypeArgumentsContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class or interface type,<br>
 * 2. general class or interface type,<br>
 * 3. standard class or interface type,<br>
 * 4. primary,<br>
 * 5. type arguments or diamond.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "<" node as my first child,<br>
 * 3. find and put a ">" node as my last child.
 */
export class TypeArgumentsPostProcessor extends PostNodeProcessorAdapter<TypeArgumentsContext> {
	private static LT: TerminalNodePair = [(ctx) => ctx.LT(), GroovyParser.LT];
	private static GT: TerminalNodePair = [(ctx) => ctx.GT(), GroovyParser.GT];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeArguments, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: TypeArgumentsPostProcessor.LT});
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: TypeArgumentsPostProcessor.GT});
	}
}