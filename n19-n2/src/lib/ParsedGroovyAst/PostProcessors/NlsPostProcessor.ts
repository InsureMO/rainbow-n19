import {NlsContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

/**
 * ignored
 */
export class NlsPostProcessor extends PostNodeProcessorAdapter<NlsContext> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	ignoreToParsed(_ctx: NlsContext): boolean {
		return true;
	}
}
