import {GroovyParser, LambdaBodyContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. lambda expression,<br>
 * 2. standard lambda expression.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class LambdaBodyPostProcessor extends PostNodeProcessorAdapter<LambdaBodyContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_lambdaBody, DecoratedNode.RULE_ROLE);
		return true;
	}
}