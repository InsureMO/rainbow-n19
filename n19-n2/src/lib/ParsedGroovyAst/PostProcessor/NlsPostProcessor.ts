import {NlsContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class NlsPostProcessor extends PostNodeProcessorAdapter<NlsContext> {
	ignoreToParsed(_ctx: NlsContext): boolean {
		return true;
	}

	needCopyTextOnToParsed(_ctx: NlsContext): boolean {
		return true;
	}

	copyTextOnToParsed(node: ParsedNode, ctx: NlsContext) {
		this.logCopyTextToParsedAsMissedLogic(node, ctx);
	}
}
