import {GroovyParser, SwitchBlockStatementGroupContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of switch statement.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class SwitchBlockStatementGroupPostProcessor extends PostNodeProcessorAdapter<SwitchBlockStatementGroupContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_switchBlockStatementGroup, DecoratedNode.RULE_ROLE);
		return true;
	}
}