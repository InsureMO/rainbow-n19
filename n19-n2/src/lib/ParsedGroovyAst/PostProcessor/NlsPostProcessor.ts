import {NlsContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class NlsPostProcessor extends PostNodeProcessorAdapter<NlsContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoreToParsed(_ctx: NlsContext): boolean {
		return true;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	needCopyTextOnToParsed(_ctx: NlsContext): boolean {
		return true;
	}

	copyTextOnToParsed(node: ParsedNode, ctx: NlsContext) {
		this.logCopyTextToParsedAsMissedLogic(node, ctx);
	}
}
