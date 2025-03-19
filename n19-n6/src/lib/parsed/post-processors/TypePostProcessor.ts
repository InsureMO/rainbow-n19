import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {GroovyParser, TypeBoundContext, TypeContext, TypeListContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromTypeBound = (ctx: TypeBoundContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForTypeBound = [TerminalNodeGetFromTypeBound, SymbolIndex];
type TerminalNodeGetFromTypeList = (ctx: TypeListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForTypeList = [TerminalNodeGetFromTypeList, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. type bound,<br>
 * 2. type list,<br>
 * 3. type argument,<br>
 * 4. this formal parameter,<br>
 * 5. formal parameter,<br>
 * 6. variable declaration,<br>
 * 7. type name pair,<br>
 * 8. enhanced for control,<br>
 * 9. cast par expression,<br>
 * 10. expression.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "&" node after me, when parent is type bound,<br>
 * 3. find and put a "," node after me, when parent is type list,<br>
 */
export class TypePostProcessor extends PostNodeProcessorAdapter<TypeContext> {
	private static TYPE_BOUND__BITAND: TerminalNodePairForTypeBound = [(ctx, index) => ctx.BITAND(index), GroovyParser.BITAND];
	private static TYPE_LIST__COMMA: TerminalNodePairForTypeList = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_type, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as TypeContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof TypeBoundContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: TypeBoundContext) => ctx.type__list(),
				indexOffset: 0,
				terminal: TypePostProcessor.TYPE_BOUND__BITAND,
				parentDecorated: node.parent.decorated
			});
		} else if (parentCtx instanceof TypeListContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: TypeListContext) => ctx.type__list(),
				indexOffset: 0,
				terminal: TypePostProcessor.TYPE_LIST__COMMA,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}