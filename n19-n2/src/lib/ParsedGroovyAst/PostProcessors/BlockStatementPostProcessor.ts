import {BlockStatementContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of block statements.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class BlockStatementPostProcessor extends PostNodeProcessorAdapter<BlockStatementContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_blockStatement, DecoratedNode.RULE_ROLE);
		return true;
	}
}