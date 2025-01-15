import {AnnotationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. class or interface modifier,<br>
 * 2. variable modifier,<br>
 * 3. annotations opt,<br>
 * 4. element value.<br>
 * doing:<br>
 * 1. put itself as a container node,<br>
 * 2. put a "@" node as its first child.
 */
export class AnnotationPostProcessor extends PostNodeProcessorAdapter<AnnotationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_annotation, DecoratedNode.RULE_ROLE);
		return true;
	}

	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const ctx = decorated.parsed.groovyParserRuleContext as AnnotationContext;
		const atTerminalNode = ctx.AT();
		if (atTerminalNode != null) {
			// share underlay node
			const atNode = DecoratedNode.createSymbol(decorated.parsed, GroovyParser.AT, atTerminalNode);
			return [atNode];
		}
		return [];
	}
}
