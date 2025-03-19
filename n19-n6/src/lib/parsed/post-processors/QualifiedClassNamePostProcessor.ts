import {Optional} from '@rainbow-n19/n2';
import {TerminalNode} from 'antlr4';
import {CatchTypeContext, GroovyParser, QualifiedClassNameContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGetFromCatchType = (ctx: CatchTypeContext, index: number) => Optional<TerminalNode>;
type TerminalNodePairForCatchType = [TerminalNodeGetFromCatchType, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class or interface type,<br>
 * 2. general class or interface type,<br>
 * 3. annotation qualified class name,<br>
 * 4. annotation name,<br>
 * 5. catch type,<br>
 * 6. created type.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "|" node after me, when parent is catch type.
 */
export class QualifiedClassNamePostProcessor extends PostNodeProcessorAdapter<QualifiedClassNameContext> {
	private static CATCH_TYPE__BITOR: TerminalNodePairForCatchType = [(ctx, index) => ctx.BITOR(index), GroovyParser.BITOR];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_qualifiedClassName, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectAfterExit(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as QualifiedClassNameContext;
		const parentCtx = ctx.parentCtx;
		if (parentCtx instanceof CatchTypeContext) {
			return this.collectTerminalNodeWithIndexToArray({
				decorated,
				siblings: (ctx: CatchTypeContext) => ctx.qualifiedClassName_list(),
				indexOffset: 0,
				terminal: QualifiedClassNamePostProcessor.CATCH_TYPE__BITOR,
				parentDecorated: node.parent.decorated
			});
		}
		return [];
	}
}
