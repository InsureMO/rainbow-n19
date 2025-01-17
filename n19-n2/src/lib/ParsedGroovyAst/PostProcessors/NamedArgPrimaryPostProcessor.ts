import {GroovyParser, NamedArgPrimaryContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of named arg label.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class NamedArgPrimaryPostProcessor extends PostNodeProcessorAdapter<NamedArgPrimaryContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_namedArgPrimary, DecoratedNode.RULE_ROLE);
		return true;
	}
}