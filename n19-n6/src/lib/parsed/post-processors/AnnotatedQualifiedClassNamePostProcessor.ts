import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {AnnotatedQualifiedClassNameContext, GroovyParser, QualifiedClassNameListContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromQualifiedClassNameList = (ctx: QualifiedClassNameListContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForQualifiedClassNameList = [TerminalNodeGetFromQualifiedClassNameList, SymbolIndex];

/**
 * could be child of qualified class name list.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "," node after me.
 */
export class AnnotatedQualifiedClassNamePostProcessor extends PostNodeProcessorAdapter<AnnotatedQualifiedClassNameContext> {
	private static QUALIFIED_CLASS_NAME_LIST__COMMA: TerminalNodePairForQualifiedClassNameList = [(ctx, index) => ctx.COMMA(index), GroovyParser.COMMA];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_typeArgument, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnExiting(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		return this.collectTerminalNodeWithIndexToArray({
			decorated,
			siblings: (ctx: QualifiedClassNameListContext) => ctx.annotatedQualifiedClassName_list(),
			indexOffset: 0,
			terminal: AnnotatedQualifiedClassNamePostProcessor.QUALIFIED_CLASS_NAME_LIST__COMMA,
			parentDecorated: node.parent.decorated
		});
	}
}