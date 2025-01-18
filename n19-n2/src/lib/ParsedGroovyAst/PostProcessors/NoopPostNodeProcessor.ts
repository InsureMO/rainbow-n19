import {GroovyParser, GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {HierarchicalNode} from '../HierarchicalNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * a guard, not real use in runtime.
 */
export class NoopPostNodeProcessor extends PostNodeProcessorAdapter<GroovyParserRuleContext> {
	collectOnEntering(node: HierarchicalNode): Array<DecoratedNode> {
		const decorated = node.decorated;
		const type = decorated.type;
		console.error(`Node[type=${type}, name=${GroovyParser.ruleNames[type]}] is not supported yet.`);
		return [decorated];
	}
}
