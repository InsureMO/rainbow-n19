import {EnhancedForControlContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of for control.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class EnhancedForControlPostProcessor extends PostNodeProcessorAdapter<EnhancedForControlContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_enhancedForControl, DecoratedNode.RULE_ROLE);
		return true;
	}
}