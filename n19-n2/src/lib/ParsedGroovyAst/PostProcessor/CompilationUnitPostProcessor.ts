import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class CompilationUnitPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}
}
