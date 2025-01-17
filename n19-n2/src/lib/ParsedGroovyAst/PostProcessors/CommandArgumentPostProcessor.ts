import {CommandArgumentContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of command expression.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class CommandArgumentPostProcessor extends PostNodeProcessorAdapter<CommandArgumentContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_commandArgument, DecoratedNode.RULE_ROLE);
		return true;
	}
}