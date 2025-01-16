import {GroovyParser, QualifiedStandardClassNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. class or interface type,<br>
 * 2. standard class or interface type.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class QualifiedStandardClassNamePostProcessor extends PostNodeProcessorAdapter<QualifiedStandardClassNameContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_qualifiedStandardClassName, DecoratedNode.RULE_ROLE);
		return true;
	}
}