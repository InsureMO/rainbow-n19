import {GroovyParser, PackageDeclarationContext} from '../../parser';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of compilation unit.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class PackageDeclarationPostProcessor extends PostNodeProcessorAdapter<PackageDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_packageDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}
