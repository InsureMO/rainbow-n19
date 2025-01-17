import {GroovyParser, SwitchBlockStatementExpressionGroupContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of switch expression.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class SwitchBlockStatementExpressionGroupPostProcessor extends PostNodeProcessorAdapter<SwitchBlockStatementExpressionGroupContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_switchBlockStatementExpressionGroup, DecoratedNode.RULE_ROLE);
		return true;
	}
}