import {AnonymousInnerClassDeclarationContext, GroovyParser} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of following:<br>
 * 1. enum constant,<br>
 * 2. creator.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class AnonymousInnerClassDeclarationPostProcessor extends PostNodeProcessorAdapter<AnonymousInnerClassDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_anonymousInnerClassDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}