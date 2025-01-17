import {GroovyParser, LocalVariableDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. block statement,<br>
 * 2. statement,<br>
 * 3. resource,<br>
 * 4. for init.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class LocalVariableDeclarationPostProcessor extends PostNodeProcessorAdapter<LocalVariableDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_localVariableDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}