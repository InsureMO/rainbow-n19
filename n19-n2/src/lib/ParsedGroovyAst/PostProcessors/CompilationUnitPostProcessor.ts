import {CompilationUnitContext, GroovyParser} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class CompilationUnitPostProcessor extends PostNodeProcessorAdapter<CompilationUnitContext> {
	shouldCountIntoHierarchy(node: DecoratedNode): boolean {
		node.setRole(GroovyParser.RULE_compilationUnit, DecoratedNode.RULE_ROLE);
		return true;
	}
}
