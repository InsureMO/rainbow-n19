import {GroovyParser, NamedPropertyArgPrimaryContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of named property arg label.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class NamedPropertyArgPrimaryPostProcessor extends PostNodeProcessorAdapter<NamedPropertyArgPrimaryContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedPropertyArgPrimary, DecoratedNode.RULE_ROLE);
		return true;
	}
}