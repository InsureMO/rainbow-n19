import {GroovyParser, ImportDeclarationContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * could be child of script statement.<br>
 * doing:<br>
 * 1. put me as a container node.
 */
export class ImportDeclarationPostProcessor extends PostNodeProcessorAdapter<ImportDeclarationContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_importDeclaration, DecoratedNode.RULE_ROLE);
		return true;
	}
}
