import {SepContext} from '../../../OrgApacheGroovyParserAntlr4';
import {DecorableParsedNode} from '../../DecorableParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class SepPostProcessor extends PostNodeProcessorAdapter<SepContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: SepContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	shouldCollectToAtomicNodesOnEnteringVisitor(_node: DecorableParsedNode): boolean {
		return true;
	}
}
