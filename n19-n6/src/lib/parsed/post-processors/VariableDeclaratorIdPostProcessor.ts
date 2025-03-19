import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {
	EnhancedForControlContext,
	FormalParameterContext,
	GroovyParser,
	VariableDeclaratorContext,
	VariableDeclaratorIdContext,
	VariableNamesContext
} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromVariableDeclarator = (ctx: VariableDeclaratorContext) => Optional<TerminalNode>;
type TerminalNodePairForVariableDeclarator = [TerminalNodeGetFromVariableDeclarator, SymbolIndex];
type TerminalNodeGetFromFormalParameter = (ctx: FormalParameterContext) => Optional<TerminalNode>;
type TerminalNodePairForFormalParameter = [TerminalNodeGetFromFormalParameter, SymbolIndex];
type TerminalNodeGetFromVariableNames = (ctx: VariableNamesContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForVariableNames = [TerminalNodeGetFromVariableNames, SymbolIndex];
type TerminalNodeGetFromEnhancedForControl = (ctx: EnhancedForControlContext) => Optional<TerminalNode>;
type TerminalNodePairForEnhancedForControl = [TerminalNodeGetFromEnhancedForControl, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. variable declarator,<br>
 * 2. formal parameter,<br>
 * 3. standard lambda parameters,<br>
 * 4. type name pair,<br>
 * 5. variable names,<br>
 * 6. enhanced for control.<br>
 * doing:<br>
 * 1. find and put a "..." node in front of me, when parent is formal parameter,<br>
 * 2. put me as a container node,<br>
 * 3. find and put a "=" node after me, when parent is variable declarator,<br>
 * 4. find and put a "=" node after me, when parent is formal parameter,<br>
 * 5. find and put a "," node after me, when parent is variable names,<br>
 * 6. find and put a ":" or "IN" node after me, when parent is enhanced for control.<br>
 */
export class VariableDeclaratorIdPostProcessor extends PostNodeProcessorAdapter<VariableDeclaratorIdContext> {
	private static VARIABLE_DECLARATOR__ASSIGN: TerminalNodePairForVariableDeclarator = [(ctx) => ctx.ASSIGN(), GroovyParser.ASSIGN];
	private static FORMAL_PARAMETER__ASSIGN: TerminalNodePairForFormalParameter = [(ctx) => ctx.ASSIGN(), GroovyParser.ASSIGN];
	private static VARIABLE_NAMES__COMMA: TerminalNodePairForVariableNames = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];
	private static ENHANCE_FOR_CONTROL__COLON: TerminalNodePairForEnhancedForControl = [(ctx) => ctx.COLON(), GroovyParser.COLON];
	private static ENHANCE_FOR_CONTROL__IN: TerminalNodePairForEnhancedForControl = [(ctx) => ctx.IN(), GroovyParser.IN];
	private static ENHANCE_FOR_CONTROL__TERMINALS = [
		VariableDeclaratorIdPostProcessor.ENHANCE_FOR_CONTROL__COLON,
		VariableDeclaratorIdPostProcessor.ENHANCE_FOR_CONTROL__IN
	];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_variableDeclaratorId, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as VariableDeclaratorIdContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof VariableDeclaratorContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: VariableDeclaratorIdPostProcessor.VARIABLE_DECLARATOR__ASSIGN
			});
		} else if (parentCtx instanceof FormalParameterContext) {
			return this.collectTerminalNodeToArray({
				decorated: node.parent.decorated,
				terminal: VariableDeclaratorIdPostProcessor.FORMAL_PARAMETER__ASSIGN
			});
		} else if (parentCtx instanceof VariableNamesContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: VariableNamesContext) => ctx.variableDeclaratorId_list(),
				indexOffset: 0,
				terminal: VariableDeclaratorIdPostProcessor.VARIABLE_NAMES__COMMA,
				parentDecorated: node.parent.decorated
			});
		} else if (parentCtx instanceof EnhancedForControlContext) {
			return this.collectTerminalNodes({
				decorated: node.parent.decorated,
				terminals: VariableDeclaratorIdPostProcessor.ENHANCE_FOR_CONTROL__TERMINALS,
				firstOnly: true
			});
		}
		return [];
	}
}