import {GroovyParser, TypeDeclarationContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of script statement.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class TypeDeclarationPostProcessor extends PostNodeProcessorAdapter<TypeDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		const decorated = node.decorated;
		decorated.setRole(GroovyParser.RULE_typeDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}
