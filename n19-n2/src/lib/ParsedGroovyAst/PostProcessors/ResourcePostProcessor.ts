import {GroovyParser, ResourceContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of resource list.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class ResourcePostProcessor extends PostNodeProcessorAdapter<ResourceContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_resource, DecoratedNode.RULE_ROLE);
		return true;
	}
}