import {CompilationUnitContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * root, no parent.<br>
 * doing:<br>
 * 1. put itself as a container node.
 */
export class CompilationUnitPostProcessor extends PostNodeProcessorAdapter<CompilationUnitContext> {
	shouldCountIntoHierarchy(node: HierarchicalNode): boolean {
		node.decorated.setRole(GroovyParser.RULE_compilationUnit, DecoratedNode.RULE_ROLE);
		return true;
	}
}
