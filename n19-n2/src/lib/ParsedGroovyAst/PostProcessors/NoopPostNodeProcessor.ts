import {GroovyParser, GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecoratedNode} from '../DecoratedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class NoopPostNodeProcessor extends PostNodeProcessorAdapter<GroovyParserRuleContext> {
	/**
	 * always returns false
	 */
	shouldCollectToAtomicNodesOnEntering(node: DecoratedNode): boolean {
		console.error(`Node[type=${node.type}, name=${GroovyParser.ruleNames[node.type]}] is not supported yet.`);
		return false;
	}
}
