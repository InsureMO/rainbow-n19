import {GroovyParser, GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class NoopPostNodeProcessor extends PostNodeProcessorAdapter<GroovyParserRuleContext> {
	/**
	 * always returns false
	 */
	shouldCollectToAtomicNodesOnEnteringVisitor(node: DecorableParsedNode): boolean {
		console.error(`Node[type=${node.type}, name=${GroovyParser.ruleNames[node.type]}] is not supported yet.`);
		return false;
	}
}
