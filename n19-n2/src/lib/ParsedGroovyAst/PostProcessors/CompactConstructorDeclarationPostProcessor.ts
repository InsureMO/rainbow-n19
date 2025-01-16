import {CompactConstructorDeclarationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of member declaration.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class CompactConstructorDeclarationPostProcessor extends PostNodeProcessorAdapter<CompactConstructorDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_compactConstructorDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}