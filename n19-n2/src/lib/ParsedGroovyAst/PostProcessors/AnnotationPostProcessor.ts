import {AnnotationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class AnnotationPostProcessor extends PostNodeProcessorAdapter<AnnotationContext> {
	shouldCountIntoHierarchy(node: DecoratedNode): boolean {
		node.setRole(GroovyParser.RULE_annotation, DecoratedNode.RULE_ROLE);
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
