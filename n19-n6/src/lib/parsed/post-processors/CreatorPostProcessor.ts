import {CreatorContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 *  could be child of following:<br>
 *  1. path element,<br>
 *  2. primary.<br>
 *  doing:<br>
 *  1. put me as a container node.
 */
export class CreatorPostProcessor extends PostNodeProcessorAdapter<CreatorContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_creator, DecoratedNode.RULE_ROLE);
		return true;
	}
}