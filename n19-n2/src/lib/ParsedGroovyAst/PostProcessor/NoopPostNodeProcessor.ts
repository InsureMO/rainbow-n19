import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class NoopPostNodeProcessor extends PostNodeProcessorAdapter<GroovyParserRuleContext> {
	/**
	 * always returns false
	 */
	shouldCollectToAtomicNodeOnEnteringVisitor(node: DecorableParsedNode): boolean {
		console.error(`Node type[${node.type}] is not supported yet.`);
		return false;
	}
}
