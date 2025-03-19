import {GroovyParser, NamePartContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of path element.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class NamePartPostProcessor extends PostNodeProcessorAdapter<NamePartContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namePart, DecoratedNode.RULE_ROLE);
		return true;
	}
}