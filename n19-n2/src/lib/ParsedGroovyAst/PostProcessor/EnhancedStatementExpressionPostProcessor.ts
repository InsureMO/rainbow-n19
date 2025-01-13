import {GroovyParserRuleContext} from '../../OrgApacheGroovyParserAntlr4';
import {PostNodeProcessorAdapter} from './PostNodeProcessorAdapter';

export class EnhancedStatementExpressionPostProcessor extends PostNodeProcessorAdapter {
	ignoreToParsed(_ctx: GroovyParserRuleContext): boolean {
		return false;
	}
}
