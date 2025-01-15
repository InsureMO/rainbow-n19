import {GroovyParser, QualifiedClassNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedClassNamePostProcessor extends PostNodeProcessorAdapter<QualifiedClassNameContext> {
	shouldCountIntoHierarchy(node: DecoratedNode): boolean {
		node.setRole(GroovyParser.RULE_qualifiedClassName, DecoratedNode.RULE_ROLE);
		return true;
	}
}
