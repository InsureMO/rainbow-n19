import {TerminalNode} from 'antlr4';
import {
	GroovyParser,
	TypeArgumentContext,
	TypeArgumentsContext,
	TypeParametersContext
} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromTypeArguments = (ctx: TypeArgumentsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForTypeArguments = [TerminalNodeGetFromTypeArguments, SymbolIndex];

/**
 * could be child of type arguments.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class TypeArgumentPostProcessor extends PostNodeProcessorAdapter<TypeArgumentContext> {
	private static TYPE_ARGUMENTS__COMMA: TerminalNodePairForTypeArguments = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeArgument, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeWithIndexToArray({
			decorated,
			siblings: (ctx: TypeParametersContext) => ctx.typeParameter_list(),
			indexOffset: 0,
			terminal: TypeArgumentPostProcessor.TYPE_ARGUMENTS__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}