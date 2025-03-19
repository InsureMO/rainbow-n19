import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, VariableDeclaratorContext, VariableDeclaratorsContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromVariableDeclarators = (ctx: VariableDeclaratorsContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForVariableDeclarators = [TerminalNodeGetFromVariableDeclarators, SymbolIndex];

/**
 * could be child of variable declarators.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class VariableDeclaratorPostProcessor extends PostNodeProcessorAdapter<VariableDeclaratorContext> {
	private static VARIABLE_DECLARATORS__COMMA: TerminalNodePairForVariableDeclarators = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_variableDeclarator, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as VariableDeclaratorContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof VariableDeclaratorsContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: VariableDeclaratorsContext) => ctx.variableDeclarator_list(),
				indexOffset: 0,
				terminal: VariableDeclaratorPostProcessor.VARIABLE_DECLARATORS__COMMA,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}