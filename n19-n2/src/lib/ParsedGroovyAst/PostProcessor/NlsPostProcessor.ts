import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {ParsedNode} from '../ParsedNode';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class NlsPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	needCopyTextOnToParsed(_ctx: GroovyParserRuleContext): boolean {
		return true;
	}

	copyTextOnToParsed(node: ParsedNode, ctx: GroovyParserRuleContext) {
		this.logCopyTextToParsedAsMissedLogic(node, ctx);
	}
}
