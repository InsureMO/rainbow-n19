import {FieldDeclarationContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of member declaration.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class FieldDeclarationPostProcessor extends PostNodeProcessorAdapter<FieldDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_fieldDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}