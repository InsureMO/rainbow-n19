import {GroovyParser, StandardLambdaExpressionContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. enhanced statement expression,<br>
 * 2. enhanced argument list element.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class StandardLambdaExpressionPostProcessor extends PostNodeProcessorAdapter<StandardLambdaExpressionContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_standardLambdaExpression, DecoratedNode.RULE_ROLE);
		return true;
	}
}