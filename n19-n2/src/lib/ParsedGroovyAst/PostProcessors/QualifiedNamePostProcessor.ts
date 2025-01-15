import {GroovyParser, QualifiedNameContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class QualifiedNamePostProcessor extends PostNodeProcessorAdapter<QualifiedNameContext> {
	shouldCountIntoHierarchy(node: DecoratedNode): boolean {
		node.setRole(GroovyParser.RULE_qualifiedName, DecoratedNode.RULE_ROLE);
		return true;
	}
}
