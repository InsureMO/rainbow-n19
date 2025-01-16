import {BlockStatementsContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. block statements opt,<br>
 * 2. switch block statement group,<br>
 * 3. switch block statement expression group.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class BlockStatementsPostProcessor extends PostNodeProcessorAdapter<BlockStatementsContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_blockStatements, DecoratedNode.RULE_ROLE);
		return true;
	}
}