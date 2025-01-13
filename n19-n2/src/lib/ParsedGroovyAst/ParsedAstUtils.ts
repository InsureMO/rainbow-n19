import {ParserRuleContext} from 'antlr4';
import {GroovyParserRuleContext} from '../OrgApacheGroovyParserAntlr4';

export class ParsedAstUtils {
	private constructor() {
		// avoid extend
	}

	static gprc(ctx: ParserRuleContext): GroovyParserRuleContext {
		return ctx as GroovyParserRuleContext;
	}
}
