import {GroovyParser, MethodBodyContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. method declaration,<br>
 * 2. compact constructor declaration.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class MethodBodyPostProcessor extends PostNodeProcessorAdapter<MethodBodyContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_methodBody, DecoratedNode.RULE_ROLE);
		return true;
	}
}