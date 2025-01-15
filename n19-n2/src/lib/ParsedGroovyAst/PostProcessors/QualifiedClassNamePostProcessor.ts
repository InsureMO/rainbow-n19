import {GroovyParser, QualifiedClassNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. class or interface type,<br>
 * 2. general class or interface type,<br>
 * 3. annotation qualified class name,<br>
 * 4. annotation name,<br>
 * 5. catch type,<br>
 * 6. created type.<br>
 * doing:<br>
 * 1. put itself as a container node.
 */
export class QualifiedClassNamePostProcessor extends PostNodeProcessorAdapter<QualifiedClassNameContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_qualifiedClassName, DecoratedNode.RULE_ROLE);
		return true;
	}
}
