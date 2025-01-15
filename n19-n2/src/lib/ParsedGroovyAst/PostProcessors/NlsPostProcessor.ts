import {NlsContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * ignored
 */
export class NlsPostProcessor extends PostNodeProcessorAdapter<NlsContext> {
	ignoreToParsed(_ctx: NlsContext): boolean {
		return true;
	}
}
