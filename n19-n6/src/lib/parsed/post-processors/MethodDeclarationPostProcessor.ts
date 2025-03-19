import {GroovyParser, MethodDeclarationContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:
 * 1. script statement,<br>
 * 2. member declaration.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class MethodDeclarationPostProcessor extends PostNodeProcessorAdapter<MethodDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_methodDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}