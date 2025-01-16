import {TerminalNode} from 'antlr4';
import {GroovyParser, TypeParameterContext, TypeParametersContext} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromTypeParameters = (ctx: TypeParametersContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForTypeParameters = [TerminalNodeGetFromTypeParameters, SymbolIndex];

/**
 * could be child of type parameters.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me, when next is a comma node.
 */
export class TypeParameterPostProcessor extends PostNodeProcessorAdapter<TypeParameterContext> {
	private static COMMA: TerminalNodePairForTypeParameters = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeParameter, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeWithIndexToArray({
			decorated,
			siblings: (ctx: TypeParametersContext) => ctx.typeParameter_list(),
			indexOffset: 0,
			terminal: TypeParameterPostProcessor.COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}
