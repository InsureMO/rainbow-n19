import {GroovyParser, LambdaExpressionContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of closure or lambda expression.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class LambdaExpressionPostProcessor extends PostNodeProcessorAdapter<LambdaExpressionContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_lambdaExpression, DecoratedNode.RULE_ROLE);
		return true;
	}
}
