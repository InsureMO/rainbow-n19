import {TerminalNode} from 'antlr4';
import {AnnotationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {Optional} from '../../TsAddon';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {SymbolIndex} from '../Types';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

type TerminalNodeGet = (ctx: AnnotationContext) => Optional<TerminalNode>;
type TerminalNodePair = [TerminalNodeGet, SymbolIndex];

/**
 * could be child of following:<br>
 * 1. class or interface modifier,<br>
 * 2. variable modifier,<br>
 * 3. annotations opt,<br>
 * 4. element value.<br>
 * doing:<br>
 * 1. put me as a container node,<br>
 * 2. find and put a "@" node as its first child.
 */
export class AnnotationPostProcessor extends PostNodeProcessorAdapter<AnnotationContext> {
	private static AT: TerminalNodePair = [(ctx) => ctx.AT(), GroovyParser.AT];

	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_annotation, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		return this.collectTerminalNodeToArray({decorated: node.decorated, terminal: AnnotationPostProcessor.AT});
	}
}
