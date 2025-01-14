import {SepContext} from '../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../DecorableParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class SepPostProcessor extends PostNodeProcessorAdapter<SepContext> {
	needCopyTextOnToParsed(_ctx: SepContext): boolean {
		return true;
	}

	shouldCollectToAtomicNodeOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
